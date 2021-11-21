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
        <li key={i} className="xl:w-1/4 md:w-1/2 p-4 list-none">
            <a href={article.url} target="_blank" rel="noopener">
                <article className="bg-gray-100 p-6 rounded-lg">
                    {article.urlToImage && (
                                <img 
                                key={i}
                                src={article.urlToImage}
                                className="h-40 rounded w-full object-cover object-center mb-6"
                                alt={`${article.title} image`}
                                />
                            )}
                    <div>
                        <h3 className="text-lg text-gray-900 font-medium title-font mb-4">{article.title}</h3>
                        <p className="leading-relaxed text-base opacity-50">{time}時間前</p>
                    </div>
                </article>
            </a>
        </li>
    );
}