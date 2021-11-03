import { CmsType, BlogPost, Article, Product } from "../types"
import { AboutSample, BlogPostSample, ProductSample } from "./sample";

export const formatDate = (date:Date) =>{
    return date.toISOString().split('T')[0]
}

export const any2array = (data:any) => {
    if (!Array.isArray(data)) {
        return [data];
    } else {
        return data;
    }

}

export const preProcess = (datas:any, cmstype:CmsType) => {
    datas = any2array(datas);
    switch (cmstype) {
        case "blog_posts":
            return processBlogPosts(datas);
        case "articles":
            return processArticles(datas);
        case "products":
            return processProducts(datas);
    }
}

const res2BlogPost = (data:any) => {
    try {
        const result:BlogPost = {
            id:String(data["id"]),
            title:data["title"] || "",
            eyecatch:data["eyecatch"] || "#",
            description:data["description"] || "",
            detail:data["detail"] || "",
            date:data["updated_at"] || "",
        };
        return result;
    } catch(e) {
        return BlogPostSample;
    }
}

const res2Article = (data:any) => {
    try {
        const result:Article = {
            title:data["title"] || "",
            eyecatch:data["eyecatch"] || "",
            detail:data["detail"] || "",
        }
        return result;
    } catch(e) {
        return AboutSample;
    }
}

const res2Product = (data:any) => {
    try {
        const result:Product = {
            title:data["title"],
            src:data["eyecatch"],
            href:data["href"],
            description:data["description"]
        }
        return result;
    } catch(e) {
        return ProductSample;
    }
}

export const processBlogPosts = (datas:any[]) => {
    datas = any2array(datas);
    let results:BlogPost[] = [];
    datas.forEach((data) => {
        results.push(res2BlogPost(data))
    });
    return results;
}

export const processArticles = (datas:any[]) => {
    datas = any2array(datas);
    let results:Article[] = [];
    datas.forEach((data) => {
        results.push(res2Article(data))
    });
    return results;
}

export const processProducts = (datas:any[]) => {
    datas = any2array(datas);
    let results:Product[] = [];
    datas.forEach((data) => {
        results.push(res2Product(data))
    });
    return results;
}