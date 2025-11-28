'use client';

import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';

export default function WalletRedirect() {
    const { isConnected, isReconnecting } = useAccount();
    const router = useRouter();

    useEffect(() => {
        if (isConnected && !isReconnecting) {
            router.push('/dashboard');
        }
    }, [isConnected, isReconnecting, router]);

    return null;
}
