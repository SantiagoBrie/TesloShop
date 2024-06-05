'use client'
import { useState } from "react"
import { QuantitySelector, SizeSelector } from "@/components"
import { CartProduct, Product, Size } from "@/interfaces"
import { useCartStore } from "@/store"

interface Props {
    product: Product
}

export const AddToCart = ({ product }: Props) => {
    const addProductToCart = useCartStore(state => state.addProductToCart)
    const [size, setSize] = useState<Size | undefined>()
    const [quantity, setQuantity] = useState<number>(1)
    const [posted, setPosted] = useState(false)

    const addToCart = () => {
        setPosted(true)
        if (!size) return

        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            quantity: quantity,
            size: size,
            image: product.images[0]
        }
        addProductToCart(cartProduct)
        setPosted(false)
        setQuantity(1)
        setSize(undefined)
    }
    return (
        <>
            {posted && !size && (
                <p className="mb-2 text-red-500 fade-in">Debe seleccionar una talla*</p>
            )}

            {/* Selector de tallas */}
            <SizeSelector
                selectedSize={size}
                availableSize={product.sizes}
                //onSizeChanged={(size) => setSize(size)}  //* Son dos formas de escribir lo mismo
                onSizeChanged={setSize}
            />
            {/* Selector de cantidad */}
            <QuantitySelector
                quantity={quantity}
                onQuantityChanged={setQuantity}
            />
            {/* Botón */}
            <button
                onClick={addToCart}
                className="btn-primary my-2"
            >Agregar al carrito</button>

        </>
    )
}
