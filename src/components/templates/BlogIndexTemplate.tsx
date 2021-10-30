import { HOST } from "../../utils/constants";
import { BlogSection } from "../organisms/BlogSection";
import { MyHeader } from "../organisms/MyHeader";
import { MyMeta } from "../organisms/MyMeta";

type Props = {
    title:string,
    eyecatch:string,
    detail:string,
    date:string,
};

export const BlogIndexTemplate: React.VFC<Props> = ({
    title,
    eyecatch,
    detail,
    date,
}) => {
    return (
        <>
            <MyMeta title={HOST + " / " + title}/>
            <MyHeader />
            <main>
                <BlogSection title={title} src={eyecatch} date={date}>
                    <div className="overflow-hidden" dangerouslySetInnerHTML={{__html:detail}}></div>
                </BlogSection>
            </main>
        </>
    );
};