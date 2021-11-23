import { NextPage } from "next";
import { MainTable } from "../organisms/MainTable";

export const FavTemplate:React.VFC = () => {
    return (
        <div className="min-h-screen">
        <div className="container mx-auto">
            <div className="flex justify-center items-center text-3xl h-32 mx-5">
                ふぁぼした画像を並べるページ
            </div>
            <div className="flex justify-center">
                <MainTable />
            </div>
        </div>
        </div>
    );
}