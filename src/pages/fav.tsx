import { GetStaticProps, NextPage } from "next";
import { FavTemplate } from "../components/templates/FavTemplate";

export const FavePage: NextPage = () => {
  return <FavTemplate />;
};

export default FavePage;