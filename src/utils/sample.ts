import { Article, BlogPost, Product } from "../types";
import { STATIC_IMAGE } from "./constants";
import { formatDate } from "./funcs";

export const AboutSample:Article = {
    title: "",
    eyecatch: "",
    detail: ``,
};

export const ProductSample:Product = {
    title: "",
    description: "",
    href: "",
    src: ""
};

export const ProductsSample:Product[] = [
    ProductSample
];

export const BlogPostSample:BlogPost = {
    id:"1000",
    title:"",
    description:"",
    eyecatch:"",
    date:formatDate(new Date()),
    detail:``
};

export const BlogPostsSample:BlogPost[] = [
    BlogPostSample
];