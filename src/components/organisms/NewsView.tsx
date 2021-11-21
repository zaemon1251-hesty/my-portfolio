import { newsArticle } from "../../types";
import { NewsCard } from "../molecules/NewsCard";

type Props = {
    newsSets?: newsArticle[],
}

export const NewsView: React.VFC<Props> = ({
    newsSets
}) => {
    if (!newsSets) {
        newsSets = []
    }
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {newsSets.map((article, index) => (
                        <NewsCard article={article} i={index} />
                    )) }
                </div>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
        </section>
    );
};

