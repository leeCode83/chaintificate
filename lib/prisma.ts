import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../app/generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

if (!process.env.DATABASE_URL) {
    console.warn("Warning: DATABASE_URL is not defined in environment variables.");
}

// BigInt serialization fix
(BigInt.prototype as any).toJSON = function () {
    return this.toString();
};

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

export { prisma }