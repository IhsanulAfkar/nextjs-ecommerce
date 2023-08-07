import prisma from "@utils/db"
import { NextResponse } from "next/server"

export const GET = async (request) => {
    try {
        const products = await prisma.product.findMany()
        return NextResponse.json({ products })
    } catch (error) {
        return NextResponse.json({ error: "Error" }, { status: 500 })
    }
}