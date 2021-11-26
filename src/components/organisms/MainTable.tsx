import React, { useEffect, useState } from "react";
import { getTweetImgs } from "../../lib/api";
import { tweetImgs } from "../../types";
import { MESSAGES } from "../../utils/constants";
import { tweetImgsInit } from "../../utils/sample";
import { InputForm } from "../molecules/InputForm";
import ImageTable from "./ImageTable";


export const MainTable: React.VFC = (props) => {
    const [message, setMessage] = useState(MESSAGES.init);

    const [images, setImages] = useState(tweetImgsInit);

    const [screenName, setScreenName] = useState("");

    useEffect(
        () => {
            console.log("like-componentDidMount");
            let queue: NodeJS.Timeout;
            if (process.browser) {
                const loadMore = () => {
                    clearTimeout(queue);
                    queue = setTimeout(() => {
                        const scroll_Y = document.documentElement.scrollTop + window.innerHeight;
                        const offsetHeight = document.documentElement.offsetHeight;
                        if (
                            offsetHeight - scroll_Y <= 1000 && // スクロールして下端近くまで達した
                            message !== MESSAGES.load && // 既にロード中じゃない
                            offsetHeight > 1500 // レンダー直後に未完全な状態だと、offsetHeight がちいさくて、offsetHeight - scroll_Y <= 1000 が常に正になってしまうかも
                        ) {
                            setMessage(MESSAGES.load);
                            // imagesをフックとすることで、常に最新のimagesを使ってsetImagesできる
                            // screenNameをフックとしないと、そもそも正しい名前でデータを取ることができない
                            setViewImgData(images, screenName);
                        }
                    }, 500);
                }
                // イベント追加
                window.addEventListener("scroll", loadMore);
                return () => {
                    // イベント削除
                    window.removeEventListener("scroll", loadMore);
                }
            };
        }, 
        [screenName, message, images]
    );

    const handleSubmit = (screen_name: string) => {
        setMessage(MESSAGES.load)
        changeScreenNameByForm(screen_name) // 名前が変更されたらimages初期化
        .then((changed) => setViewImgData(changed ? tweetImgsInit : images, screen_name)) // 画像の取得 (screen_nameが変更されたとき対策で、色々くふうしている)
        .then(() => setScreenName(screen_name))  // ImageTableの情報をMainTableでも保持する
        .catch((e) => console.log(e));
    }

    const setViewImgData = (currentImages : tweetImgs , screen_name: string) => {
        getTweetImgs(screen_name, currentImages.max_id)
        .then((res) => {
            setIineImages(currentImages, res);
        })
        .catch(() => {
            setMessage(MESSAGES.error);
        });
    }

    const setIineImages = (currentImages:tweetImgs, results?:tweetImgs) => {
        // 現在のimagesに追加
        if (!results) return;
        setImages({
            url: currentImages.url.concat(results.url),
            height: currentImages.height.concat(results.height),
            source: currentImages.source.concat(results.source),
            max_id: String(results.max_id)
        });
        if (results.url.length == 0) {
            setMessage(MESSAGES.nofav);
        } else {
            setMessage(MESSAGES.init);
        }
    }

    // 現在の仕様上、非同期である必要はないが、promiseを使ったメソッドチェーンが綺麗なので残す
    const changeScreenNameByForm = async (screen_name:string) => {
        if (screen_name !== screenName) {
            return true
        }
        return false
    }

    return (
        <div>
            <InputForm onSubmit={(screen_name: string) => handleSubmit(screen_name)}/>
            <ImageTable images={images} />
            <div className="box h-64 text-center m-5 p-4">
                {message}
            </div>
        </div>
    );
}
