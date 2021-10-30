import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BlogIndexTemplate } from "../../../components/templates/BlogIndexTemplate";
import { BlogPost } from "../../../types";
import { BlogPostSample, BlogPostsSample } from "../../../utils/sample";

export const BlogIndexPage:NextPage<BlogPost> = ({
    id,
    title,
    eyecatch,
    description,
    detail,
    date,
}) => {
    return (
        <BlogIndexTemplate title={title} eyecatch={eyecatch} detail={detail} date={date} />
    );
};

export const getStaticPaths: GetStaticPaths = () => {
    const paths = BlogPostsSample.map((BlogPost) => `/blog/${BlogPost.id}`)
    return { paths, fallback:false }
}

export const getStaticProps: GetStaticProps<BlogPost> = (context) => {
    const id = context.params?.id
    const props = BlogPostSample
    return { props };
}

export default BlogIndexPage;