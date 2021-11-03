import { GetStaticProps, NextPage } from "next";
import { AboutTemplate } from "../components/templates/AboutTemplate";
import { getArticles } from "../lib/api";
import { Article } from "../types";
import { AboutSample } from "../utils/sample";


export const AboutPage:NextPage<Article> = ({
    eyecatch,
    title,
    detail
}) => {
    return (
        <AboutTemplate eyecatch={eyecatch} title={title} detail={detail} />
    )
}

export const getStaticProps: GetStaticProps<Article> = async (context) => {
    const artilcles = await getArticles();
    const props = artilcles ? artilcles[0] : AboutSample;
    return { props }
}

export default AboutPage;