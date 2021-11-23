import React, { useEffect, useState } from "react";
import { tweetImgs, typeRaneItems } from "../../types";
import ImageList from "../molecules/ImageList";

type typeImageTableProps = {
    images?: tweetImgs;
};

export const ImageTable : React.VFC<typeImageTableProps> = (props) => {
    const [raneNum, setRaneNum] = useState(3);

    if (process.browser) {
        useEffect(
            () => {
                console.log("componentDidMount");
                let queue: NodeJS.Timeout;
                window.addEventListener("resize", () => {
                    clearTimeout(queue);
                    queue = setTimeout(() => {
                        const newRaneNum = window.innerWidth > 600 ? Math.floor(window.innerWidth / 300) : 2;
                        setRaneNum(newRaneNum);
                    }, 500);
                });
            }, 
            [props]
        );
    }
    
    return (
        <div className="flex m-1">
            {createRaneItems(raneNum, props.images).map((items: typeRaneItems[], index: number) => {
                return (
                    <div key={index}>
                        <ImageList raneItems={items} />
                    </div>
                );
            })}
        </div>
    );
}
export default ImageTable;

const createRaneItems = (rane_num: number, items?: tweetImgs): typeRaneItems[][] => {
    const RaneItems: typeRaneItems[][] = Array(rane_num).fill([]).map(_i=>([]));
    if (!items||!items.url) return RaneItems;
    const RaneHeights: number[] = Array(rane_num).fill(0);
    items.url.forEach((item: string, index: number) => {
        const minHeightIndex = searchMinHeightIndex(RaneHeights);
        RaneHeights[minHeightIndex] += items.height[index];
        RaneItems[minHeightIndex].push({ url: item, source: items.source[index] });
    });
    return RaneItems;
}

const searchMinHeightIndex = (RaneHeights: number[]) => {
    return RaneHeights.indexOf(Math.min(...RaneHeights))
}