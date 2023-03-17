import { env } from "process";
import useSWR from "swr";
import { CmsType, Product, Article, BlogPost, newsRequestParams, tweetImgs } from "../../types";
import { CMS_URL, NEWS_URL } from "../../utils/constants";
import { any2array, preProcess, processArticles, processBlogPosts, processProducts, isTweetImgs, fetchTypedValue } from "../../utils/funcs";

export const getProducts = async () => {
    const cmstype:CmsType = "products";
    try {
        return await fetch(`${CMS_URL}/${cmstype}/`)
        .then((res) => res.json() || {})
        .then((datas) => processProducts(datas))
        .catch(() => null);
    } catch(e) {
        return null;
    }
}

export const getArticles = async () => {
    const cmstype:CmsType = "articles";
    console.log(`${CMS_URL}/${cmstype}/`)
    try {
        return await fetch(`${CMS_URL}/${cmstype}/`)
        .then((res) => res.json() || {})
        .then((datas) => processArticles(datas))
        .catch(() => null);
    } catch(e) {
        return null;
    }
}

export const getBlogPosts = async () => {
    const cmstype:CmsType = "blog_posts";
    try {
        return await fetch(`${CMS_URL}/${cmstype}/`)
        .then((res) => res.json() || {})
        .then((datas) => processBlogPosts(datas))
        .catch(() => null);
    } catch(e) {
        return null;
    }
}

export const getContents = async (type:CmsType) => {
    try {
        return await fetch(`${CMS_URL}/${type}/`)
        .then((res) => JSON.parse(JSON.stringify(res.json())) || {})
        .then((datas) => preProcess(datas, type))
        .catch(() => null);
    } catch(e) {
        return null;
    }
};

export const getNews = async () => {
    // NewsAPIのトップ記事の情報を取得
    const params:newsRequestParams = {
        "country" : "jp",
        "pageSize" : String(10),
        "apiKey" : env.NEWSAPI_KEY || null
    };
    const keys:(keyof newsRequestParams)[] = ["country", "pageSize", "apiKey"]
    const uri = new URL(NEWS_URL);
    keys.forEach((item) => {
        const k = item.toString();
        const v = params[item];
        if ( v !== null){
            uri.searchParams.append(k, v);
        }
    });
    try {
        return await fetch(uri.toString())
        .then((res) => res.json())
        .then((data) => data?.articles);
    } catch(e) {
        return null;
    }
}

export const getTweetImgs = async (screen_name: string, max_id?: string) =>  {
    let endpoint = `${process.env.REACT_APP_API_ENDPOINT_URL}/fav?name=${screen_name}`;
    if (max_id) endpoint += `&maxid=${max_id}`;
    console.log(endpoint, screen_name, max_id);
    // const { data, error } = useSWR(
    //     endpoint, 
    //     (url) => fetchTypedValue<tweetImgs>(url, isTweetImgs),
    //     {
    //         revalidateOnFocus: false,
    //         revalidateOnReconnect: false,
    //         refreshWhenHidden: true
    //     }
    // );
    // console.log(data);
    // return data ? data : null;
    return await fetch(endpoint)
            .then((res) => res.json())
            .then((data) => isTweetImgs(data) ? data : null)
            .catch(() => null)
}
