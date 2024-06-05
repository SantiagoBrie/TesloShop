'use server'
import prisma from "@/lib/prisma"


export const getStockBySlug = async (slug: string) : Promise<number>=> {
    try {
        const stock = await prisma.product.findUnique({
            where: {slug},
            select: {inStock: true},
        })

        return stock?.inStock ?? 0
    } catch (error) {
        throw new Error('Error al obtener stock por slug')
    }
}