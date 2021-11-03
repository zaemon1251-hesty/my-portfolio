import { GetStaticProps, NextPage } from "next";
import { IndexTemplate } from "../components/templates/IndexTemplate";
import { getContents, getProducts } from "../lib/api";
import { Product } from "../types";
import { ProductsSample } from "../utils/sample";

type StaticProps = {
  products?: Product[]
};

export const IndexPage: NextPage<StaticProps> = ({
  products
}) => {
  return <IndexTemplate products={products} />;
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const props:StaticProps = {
    products: await getProducts()
  };
  return { props };
};

export default IndexPage;