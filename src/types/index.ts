export type Product = {
    title: string,
    description?: string,
    href?:string,
    src?:string,
}

export type Article = {
    title:string,
    eyecatch?:string,
    detail:string, // has html-formated-string rendered from markdown-formated-string
}

export type BlogPost = {
    id:string,
    title:string,
    eyecatch:string,
    description:string,
    detail:string, // has html-formated-string rendered from markdown-formated-string
    date:string,
}

export type CmsType = ("blog_posts"| "articles" | "products");

export type newsArticle = {
    author: string;
    title: string;
    publishedAt: string;
    url: string;
    urlToImage: string;
}

export type newsRequestParams = {
    [key :string] : string | undefined,
    "country"? : string,
    "pageSize"? : string,
    "apiKey"? : string
};

export type tweetImgs = {
    url: string[];
    height: number[];
    source: string[];
    max_id?: string;
}

export type typeRaneItems = {
    url: string;
    source: string;
};