import { newsArticle, Product } from "../../types";
import { HOST } from "../../utils/constants";
import { MyHeader } from "../organisms/MyHeader";
import { MyMeta } from "../organisms/MyMeta";
import { ProductsCollection } from "../organisms/ProductsCollection";
import { ProfileCard } from "../organisms/ProfileCard";

type Props = {
    products?:Product[]
    newsSet?:newsArticle[]
}


export const IndexTemplate:React.VFC<Props> = ({
    products,
    newsSet,
}) => {
    return (
        <>
            <MyMeta title={HOST} />
            <MyHeader />
            <main className="max-w-3xl px-4 mx-auto my-10 sm:px-6 xl:max-w-5xl xl:px-0">
                <div className="flex flex-wrap -m-4">
                    <ProfileCard />
                    
                </div>
                <ProductsCollection products={products}/>
            </main>
        </>
    );
};