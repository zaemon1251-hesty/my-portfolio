import { GetStaticProps, NextPage } from "next";
import { FavTemplate } from "../components/templates/FavTemplate";

export const IndexPage: NextPage = () => {
  return <FavTemplate />;
};

export default IndexPage;