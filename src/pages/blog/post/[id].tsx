import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { BlogIndexTemplate } from "../../../components/templates/BlogIndexTemplate";
import { getBlogPosts } from "../../../lib/api";
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

export const getStaticPaths: GetStaticPaths = async () => {
    const datas = await getBlogPosts();
    let paths = BlogPostsSample.map((BlogPost) => `/blog/post/${BlogPost.id}`)
    if (datas) {
        paths = datas.map((BlogPost) => `/blog/post/${BlogPost.id}`)
    }
    return { paths, fallback:false }

}

export const getStaticProps: GetStaticProps<BlogPost> = async (context) => {
    const id = context.params?.id;
    const datas = await getBlogPosts();
    let props:BlogPost = BlogPostSample;
    if (datas) {
        const tmp = datas.find((blogPost) => blogPost.id == id);
        props = tmp ? tmp : props;
    }
    return { props };
    
}

export default BlogIndexPage;