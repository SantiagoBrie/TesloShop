export const revalidate = 60

import { notFound, redirect } from "next/navigation";
import { Gender } from "@prisma/client";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";


interface Props {
    params: {
        gender: string
    },
    searchParams: {
        page?: string
    }
}
export default async function CategoryPage({ params, searchParams }: Props) {
    const { gender } = params
    const page = searchParams.page ? parseInt(searchParams.page) : 1
    const { products, currentPage, totalPages } = await getPaginatedProductsWithImages({ page, gender: gender as Gender })

    if (products.length === 0) {
        redirect(`/gender/${gender}`)
    }

    const labels: Record<string, string> = {
        'men': 'para Hombres',
        'women': 'para Mujeres',
        'kid': 'para Niños',
        'unisex': 'para todos'
    }
    // if (id === 'kids'){
    //     notFound()
    // }
    return (
        <>
            <Title
                title={`Artículos ${labels[gender]}`}
                subtitle="Todos los productos"
                className="mb-2"
            />
            <ProductGrid products={products} />
            <Pagination totalPages={totalPages} />
        </>
    );
}