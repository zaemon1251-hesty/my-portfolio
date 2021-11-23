import React, { useEffect, useState } from "react";
import { getTweetImgs } from "../../lib/api";
import { tweetImgs } from "../../types";
import { MESSAGES } from "../../utils/constants";
import { tweetImgsInit } from "../../utils/sample";
import { InputForm } from "../molecules/InputForm";
import ImageTable from "./ImageTable";

export const MainTable: React.VFC = () => {
    const [message, setMessage] = useState(MESSAGES.init);

    const [images, setImages] = useState(tweetImgsInit)

    const [screenName, setScreenName] = useState("");

    if (process.browser) {
        useEffect(
            () => {
                console.log("componentDidMount");
                let queue: NodeJS.Timeout;
                window.addEventListener("scroll", () => {
                    clearTimeout(queue);
                    queue = setTimeout(() => {
                        const scroll_Y = document.documentElement.scrollTop + window.innerHeight;
                        const offsetHeight = document.documentElement.offsetHeight;
                        if (
                            offsetHeight - scroll_Y <= 1000 &&
                            message !== MESSAGES.load &&
                            offsetHeight > 1500
                        ) {
                            setMessage(MESSAGES.load);
                            addIine(screenName);
                        }
                    }, 500);
                });
            }, 
            [setMessage]
        );
    }

    const handleSubmit = (screen_name: string) => {
        // 名前が変更されたらimages初期化
        if (screen_name !== screenName) {
            setImages(tweetImgsInit)
        }
        setMessage(MESSAGES.load);
        // ImageTableの情報をMainTableでも保持する
        setScreenName(screen_name);
        getTweetImgs(screen_name, images.max_id)
        .then((res) => {
            setIineImages(res);
        })
        .catch(() => {
            setMessage(MESSAGES.error);
        });
    }

    const addIine = (screen_name: string) => {
        getTweetImgs(screen_name, images.max_id)
        .then((res) => {
            setIineImages(res);
        })
        .catch(() => {
            setMessage(MESSAGES.error);
        });
    }

    const setIineImages = (results?:tweetImgs) => {
        // 現在のimagesに追加
        if (!results) return;
        setImages({
            url: images.url.concat(results.url),
            height: images.height.concat(results.height),
            source: images.source.concat(results.source),
            max_id: String(results.max_id)
        });
        if (results.url.length == 0) {
            setMessage(MESSAGES.nofav);
        } else {
            setMessage(MESSAGES.init);
        }
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
