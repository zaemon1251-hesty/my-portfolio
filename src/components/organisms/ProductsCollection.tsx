import { Product } from "../../types";
import { ProductCard } from "../molecules/ProductCard";
import Link from "next/link";


type Props = {
    products?:Product[]
}

export const ProductsCollection: React.VFC<Props> = ({
    products
}) => {
    if (!products) {
        return (
            <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="flex justify-between items-end gap-4 mb-6">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Products</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
                    <p>No Porduct</p>
                </div>
            </div>
        </div>

    )} else {
        let i = 0;
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="flex justify-between items-end gap-4 mb-6">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Products</h2>
                    <Link href="/products" >
                    <a className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3">Show more</a>
                    </Link>         
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
                <ul>
                    
                    {products.map((product) => (
                        <li key={i++}>
                            <ProductCard product={product} />
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    );}
};