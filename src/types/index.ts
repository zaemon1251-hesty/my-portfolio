export type Product = {
    title: string,
    description?: string,
    href?:string,
    src?:string,
}

export type Article = {
    title:string,
    eyecatch?:string,
    detail:string,
}

export type BlogPost = {
    id:string,
    title:string,
    eyecatch:string,
    description:string,
    detail:string,
    date:string,
}

export type CmsType = ("blog_posts"| "articles" | "products");
