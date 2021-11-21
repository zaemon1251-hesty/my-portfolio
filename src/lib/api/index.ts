import { env } from "process";
import { CmsType, Product, Article, BlogPost, newsRequestParams } from "../../types";
import { CMS_URL, NEWS_URL } from "../../utils/constants";
import { any2array, preProcess, processArticles, processBlogPosts, processProducts } from "../../utils/funcs";

export const getProducts = async () => {
    const cmstype:CmsType = "products";
    try {
        return await fetch(`${CMS_URL}/${cmstype}`)
        .then((res) => res.json())
        .then((datas) => processProducts(datas))
        .catch(() => undefined);
    } catch(e) {
        return undefined;
    }
}

export const getArticles = async () => {
    const cmstype:CmsType = "articles";
    try {
        return await fetch(`${CMS_URL}/${cmstype}`)
        .then((res) => res.json())
        .then((datas) => processArticles(datas))
        .catch(() => undefined);
    } catch(e) {
        return undefined;
    }
}

export const getBlogPosts = async () => {
    const cmstype:CmsType = "blog_posts";
    try {
        return await fetch(`${CMS_URL}/${cmstype}`)
        .then((res) => res.json())
        .then((datas) => processBlogPosts(datas))
        .catch(() => undefined);
    } catch(e) {
        return undefined;
    }
}

export const getContents = async (type:CmsType) => {
    try {
        return await fetch(`${CMS_URL}/${type}`)
        .then((res) => JSON.parse(JSON.stringify(res.json())))
        .then((datas) => preProcess(datas, type))
        .catch(() => undefined);
    } catch(e) {
        return undefined;
    }
};

export const getNews = async () => {
    // NewsAPIのトップ記事の情報を取得
    const params:newsRequestParams = {
        "country" : "jp",
        "pageSize" : String(10),
        "apiKey" : env.NEWSAPI_KEY
    };
    const keys:(keyof newsRequestParams)[] = ["country", "pageSize", "apiKey"]
    const uri = new URL(NEWS_URL);
    keys.forEach((item) => {
        const k = item.toString();
        const v = params[item];
        if (typeof v !== 'undefined'){
            uri.searchParams.append(k, v);
        }
    });
    try {
        return await fetch(uri.toString())
        .then((res) => res.json())
        .then((data) => data?.articles);
    } catch(e) {
        return undefined;
    }
}