import { Product } from "../../types";
import Link from 'next/link';
import { NOIMAGE } from "../../utils/constants";

type Props = {
    product: Product
}

export const ProductCard: React.VFC<Props> = ({
    product
}) => {
    const title = product.title;
    const description = product.description;
    const src = product.src ? product.src : NOIMAGE;
    const href = product.href ? product.href : "#";
    return (
        <Link href={href}>  
            <a>
                <span className="group h-96 block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 lg:mb-3">
                    <img src={src} loading="lazy" alt="Photo by Austin Wade" className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200" />
                </span>
                <div className="flex flex-col">
                    <span className="text-gray-500">{title}</span>
                    <span className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">{description}</span>
                </div>
            </a> 
        </Link>
    );
};