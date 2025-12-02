import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ address: string }> }
) {
    try {
        const { address } = await params;

        if (!address) {
            return NextResponse.json(
                { error: "Address is required" },
                { status: 400 }
            );
        }

        const collection = await prisma.certificateCollection.findUnique({
            where: {
                address: address,
            },
            include: {
                certificates: true,
            },
        });

        if (!collection) {
            return NextResponse.json(
                { error: "Certificate collection not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(collection, { status: 200 });
    } catch (error) {
        console.error("Error fetching certificate collection:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
