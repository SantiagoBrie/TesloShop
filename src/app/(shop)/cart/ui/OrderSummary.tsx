'use client'
import { useCartStore } from "@/store"
import { useEffect, useState } from "react"
import { currencyFormat } from '../../../../utils/currencyFormat';

export const OrderSummary = () => {
    const [loaded, setLoaded] = useState(false)
    const { itemsInCart, subTotal, tax, total } = useCartStore(state => state.getSummaryInformation())
    useEffect(() => {
        setLoaded(true)
    }, [])
    if (!loaded) return <p>Loading...</p>
    return (
        <div className="grid grid-cols-2">
            <span>No. Productos</span>
            <span className="text-right">{itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`}</span>

            <span>Subtotal</span>
            <span className="text-right">{currencyFormat(subTotal)}</span>

            <span>Impuestos (15%)</span>
            <span className="text-right">{currencyFormat(tax)}</span>

            <span className="text-2xl mt-5">Total:</span>
            <span className="text-2xl mt-5 text-right">{currencyFormat(total)}</span>
        </div>
    )
}
