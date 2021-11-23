import React from "react";
import { typeRaneItems } from "../../types";


type typeImageListProps = {
    raneItems: typeRaneItems[];
};

export const ImageList : React.VFC<typeImageListProps> = (props) => {
    const ListItem = (props: typeRaneItems) => {
        return (
            <a href={props.source} target="_blank" rel="noopener noreferrer">
                <img src={props.url} alt="" />
            </a>
        );
    }
    return (
        <div className="flex flex-col">
            {props.raneItems.map((item: typeRaneItems, index: number) => {
                return (
                    <div key={index}>
                        <div className="m-1 max-w-xs">
                            <ListItem url={item.url} source={item.source} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default ImageList