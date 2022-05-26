import { MyHeader } from '../organisms/MyHeader';
import { AboutSection } from '../organisms/AboutSection';
import { Article } from '../../types';
import { MyMeta } from '../organisms/MyMeta';
import { HOST, LIGHT_IMAGE, NOIMAGE } from '../../utils/constants';


export const AboutTemplate: React.VFC<Article> = ({
    title,
    eyecatch,
    detail
}) => {
    const src = eyecatch ? eyecatch : NOIMAGE;

    return (
        <>
            <MyMeta title={HOST + " / " + title} />
            <MyHeader />
            <AboutSection src={src} title={"ABOUT ME"}>
                <div dangerouslySetInnerHTML={{ __html: detail }}>
                </div>
            </AboutSection>
        </>
    )
}