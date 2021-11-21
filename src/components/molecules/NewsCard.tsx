import moment from "moment";
import { newsArticle } from "../../types";

type Props = {
    i:number,
    article:newsArticle
}

export const NewsCard: React.VFC<Props> = ({
    i,
    article
}) => {
    const time = moment(article.publishedAt || moment.now())
                .fromNow()
                .slice(0, 1);
    return (
        <div className="xl:w-1/3 md:w-1/2 p-4">
            <a href={article.url} key={i} target="_blank" rel="noopener">
                <article className="border border-gray-200 p-6 rounded-lg">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    {article.urlToImage && (
                                <img 
                                key={i}
                                src={article.urlToImage}
                                className="object-contain w-full rounded max-h-24 mr-2.5 flex-1"
                                alt={`${article.title} image`}
                                />
                            )}
                    </div>
                    <h3 className="text-lg text-gray-900 font-medium title-font mb-2">{article.title}</h3>
                    <p className="leading-relaxed text-base opacity-50">{time}時間前</p>
                </article>
            </a>
        </div>
    );
}
