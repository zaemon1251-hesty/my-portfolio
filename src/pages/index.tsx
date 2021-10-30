import { GetStaticProps, NextPage } from "next";
import { IndexTemplate } from "../components/templates/IndexTemplate";
import { Product } from "../types";
import { ProductsSample } from "../utils/sample";

type StaticProps = {
  products: Product[]
};

export const IndexPage: NextPage<StaticProps> = ({
  products
}) => {
  return <IndexTemplate products={products} />;
};

export const getStaticProps: GetStaticProps<StaticProps> = (context) => {
  const props:StaticProps = {
    products: ProductsSample
  };
  return { props };
};

export default IndexPage;