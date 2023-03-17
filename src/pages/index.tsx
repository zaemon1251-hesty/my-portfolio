import { GetStaticProps, NextPage } from "next";
import { IndexTemplate } from "../components/templates/IndexTemplate";
import { getContents, getNews, getProducts } from "../lib/api";
import { newsArticle, Product } from "../types";
import { newsArticlesSample, ProductsSample, tweetImgsSample } from "../utils/sample";

type StaticProps = {
  products: Product[] | null,
  newsArticles :newsArticle[] | null
};

export const IndexPage: NextPage<StaticProps> = ({
  products,
  newsArticles
}) => {
  return <IndexTemplate products={products} newsSet={newsArticles}/>;
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const props:StaticProps = {
    products: await getProducts() || ProductsSample,
    newsArticles: await getNews() || newsArticlesSample,
  };
  return { 
    props,
    revalidate: 60 * 10,
  };
};

export default IndexPage;