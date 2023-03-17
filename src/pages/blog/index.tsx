import { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import { BlogPostsTemplate } from "../../components/templates/BlogPostsTemplate";
import { getBlogPosts } from "../../lib/api";
import { BlogPost } from "../../types";

type StaticProps = {
    blogPosts :BlogPost[] | null
}

export const BlogPostsPage:NextPage<StaticProps> = ({
    blogPosts
}) =>{
    useEffect(() => {
        console.log(blogPosts);
    });
    return (
        <BlogPostsTemplate blogPosts={blogPosts} />
    );
};

export const getStaticProps:GetStaticProps<StaticProps> = async (context) => {
    const datas = await getBlogPosts();
    let props:StaticProps = {
        blogPosts:datas
    }
    return { props }
}


export default BlogPostsPage;