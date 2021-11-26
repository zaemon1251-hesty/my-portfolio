import { CmsType, BlogPost, Article, Product, tweetImgs } from "../types"
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

export const isTweetImgs = (data:any):data is tweetImgs => {
    try {
        const result:tweetImgs = {
            url: data["url"],
            height: data["height"],
            source: data["source"],
            max_id: data["max_id"]
        }
        return true;
    } catch(e) {
        console.log("fetch susseeded but type not matched")
        return false;
    }
}

// 型限定させた状態でのフェッチ。 今後全てのデータフェッチをこの形式にしたい
export async function fetchTypedValue<T>  (
    url: string,
    typeGuardFn: (obj: any) => obj is T
): Promise<T | undefined>  {
    const response = await fetch(url);
    const response_1 = await response.json();
    return typeGuardFn(response_1) ? response_1 : undefined;
}