import { useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { CHAINTIFICATE_ABI, CHAINTIFICATE_ADDRESS } from '../types/contracts';
import { useState, useEffect } from 'react';
import { decodeEventLog } from 'viem';

export const useCreateCollection = () => {
    const { address: userAddress } = useAccount();
    const [pendingData, setPendingData] = useState<{ name: string; description: string } | null>(null);
    const [isApiPending, setIsApiPending] = useState(false);
    const [apiError, setApiError] = useState<string | null>(null);

    const {
        writeContractAsync,
        data: hash,
        isPending: isWritePending,
        error: writeError
    } = useWriteContract();

    const {
        data: receipt,
        isLoading: isConfirming,
        isSuccess: isConfirmed,
        error: receiptError
    } = useWaitForTransactionReceipt({
        hash,
    });

    const createCertificateCollection = async (name: string, symbol: string, description: string) => {
        if (!CHAINTIFICATE_ADDRESS) {
            throw new Error("Chaintificate contract address is not defined");
        }
        setPendingData({ name, description });
        setApiError(null);
        try {
            const tx = await writeContractAsync({
                address: CHAINTIFICATE_ADDRESS as `0x${string}`,
                abi: CHAINTIFICATE_ABI,
                functionName: 'createCertificate',
                args: [name, symbol],
            });
            return tx;
        } catch (err) {
            console.error("Error creating certificate collection:", err);
            setPendingData(null);
            throw err;
        }
    };

    useEffect(() => {
        const syncToDatabase = async () => {
            if (isConfirmed && receipt && pendingData && userAddress) {
                setIsApiPending(true);
                try {
                    let newCollectionAddress: string | undefined;

                    for (const log of receipt.logs) {
                        try {
                            const decodedLog = decodeEventLog({
                                abi: CHAINTIFICATE_ABI,
                                data: log.data,
                                topics: log.topics,
                            });

                            if (decodedLog.eventName === 'CertificateCreated') {
                                newCollectionAddress = decodedLog.args.certificateContract;
                                break;
                            }
                        } catch (e) {
                            // Ignore logs that cannot be decoded or don't match
                            continue;
                        }
                    }

                    if (newCollectionAddress) {
                        const response = await fetch('/api/certificate/collection', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                address: newCollectionAddress,
                                name: pendingData.name,
                                description: pendingData.description,
                                wallet: userAddress,
                            }),
                        });

                        if (!response.ok) {
                            const errorData = await response.json();
                            throw new Error(errorData.error || 'Failed to sync with database');
                        }
                    } else {
                        console.error("CertificateCreated event not found in transaction logs");
                        setApiError("Failed to retrieve new collection address from transaction");
                    }
                } catch (error: any) {
                    console.error("Error syncing to database:", error);
                    setApiError(error.message || "Error syncing to database");
                } finally {
                    setIsApiPending(false);
                    setPendingData(null); // Clear pending data to prevent re-execution
                }
            }
        };

        syncToDatabase();
    }, [isConfirmed, receipt, pendingData, userAddress]);

    return {
        createCertificateCollection,
        hash,
        isWritePending,
        isConfirming,
        isConfirmed,
        isApiPending,
        error: writeError || receiptError || (apiError ? new Error(apiError) : null)
    };
};

export const useGetAllCertificateCollection = (page = 1, limit = 10) => {
    const { address: userAddress } = useAccount();
    const [collections, setCollections] = useState<any[]>([]);
    const [pagination, setPagination] = useState<{ total: number; page: number; limit: number; totalPages: number } | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCollections = async () => {
            if (!userAddress) {
                setCollections([]);
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`/api/certificate/collection?wallet=${userAddress}&page=${page}&limit=${limit}`);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch collections');
                }

                const result = await response.json();

                // Handle new response structure { data, pagination }
                if (result.data && Array.isArray(result.data)) {
                    setCollections(result.data);
                    setPagination(result.pagination);
                } else {
                    setCollections([]);
                    setPagination(null);
                }
            } catch (err: any) {
                console.error("Error fetching collections:", err);
                setError(err.message || "Failed to fetch collections");
                setCollections([]); // Ensure collections is empty on error
            } finally {
                setIsLoading(false);
            }
        };

        fetchCollections();
    }, [userAddress, page, limit]);

    return {
        collections,
        pagination,
        isLoading,
        error
    };
};



export const useGetCollectionDetail = (collectionAddress: string) => {
    const [collection, setCollection] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCollection = async () => {
            if (!collectionAddress) {
                setCollection(null);
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`/api/certificate/collection/${collectionAddress}`);

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'Failed to fetch collection details');
                }

                const data = await response.json();
                setCollection(data);
            } catch (err: any) {
                console.error("Error fetching collection details:", err);
                setError(err.message || "Failed to fetch collection details");
                setCollection(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCollection();
    }, [collectionAddress]);

    return {
        collection,
        isLoading,
        error
    };
};
