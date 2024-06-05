'use server'

import prisma from "@/lib/prisma"

export const deleteUSerAddress = async (userId: string) => {
    try {
        const address = await prisma.userAddress.findUnique({
            where: { userId }
        })

        if (address) {
            await prisma.userAddress.delete({
                where: {
                    userId
                }
            })
            return {
                ok: true,
            }
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            message: 'no se pudo borrar la dirección'
        }
    }
}
