import { CmsType, Product, Article, BlogPost } from "../../types";
import { CMS_URL } from "../../utils/constants";
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