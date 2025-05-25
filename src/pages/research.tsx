import { GetStaticProps, NextPage } from "next";
import { Article } from "../types";
import { MyMeta } from "../components/organisms/MyMeta";
import { MyHeader } from "../components/organisms/MyHeader";
import { HOST } from '../utils/constants';


export const ResearchPage:NextPage<Article> = () => {
    const sectionTitle = "About Research";

    return (
        <>
            <MyMeta title={HOST + " / " + sectionTitle} />
            <MyHeader />
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 p-5 text-center">{sectionTitle}</h2>
                <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                    <div className="container mx-auto flex px-5 py-10 items-center justify-center flex-col">
                        <div className="w-full">
                            <div id="markdown-area">
                                <div className="container">
                                    <div className="sub-container">
                                        <h3><b>興味のある分野</b></h3>
                                        <div>
                                            <ul>
                                                <li>NLP
                                                    <ol>
                                                        <li>Vision & Language</li>
                                                        <li>Video Understanding</li>
                                                        <li>(Dense) Video Captioning</li>
                                                        <li>Commentary Generation</li>
                                                    </ol>
                                                </li>
                                            </ul>
                                        </div>
                                        <h3><b>発表論文 (Publication)</b></h3> <br />
                                        <h4><b>国際会議 (International Conference)</b></h4>
                                        <ul>
                                            <li>
                                            <b>Yuichiro Mori</b>, Chikara Tanaka, Aru Maekawa, Satoshi Kosugi, Tatsuya Ishigaki, Kotaro Funakoshi, Hiroya Takamura, Manabu Okumura <br />
                                            <strong>Live Football Commentary System Providing Background Information</strong> <br />
                                            <i>ACL 2025 System Demonstration Track, 2025.</i>
                                            </li>
                                        </ul>
                                        <h4><b>国内会議 (Domestic Conference) </b></h4>
                                        <ul>
                                            <li> <b>森雄一郎</b>，田中智可良，前川在，小杉哲，石垣達也，船越孝太郎，高村大也，奥村学<br />
                                            <strong>サッカー実況中継における付加的情報の提供システムの構築</strong><br />
                                            <i>第263回自然言語処理研究会 (NL263)</i>, 2025.
                                            </li>
                                            <li> <b>森雄一郎</b>，前川在，小杉哲，船越孝太郎，高村大也，奥村学<br />
                                            <strong>サッカー実況中継を付加的情報の提供という側面から見る</strong><br />
                                            <i>言語処理学会第30回年次大会 (NLP2024)</i>, 2024. (委員特別賞)
                                            </li>
                                            <li> <b>森雄一郎</b>，前川在，小杉哲，船越孝太郎，高村大也，奥村学<br />
                                            <strong>知識の提供という側面から見たスポーツ実況中継の分析</strong><br />
                                            <i>NLP若手の会 (YANS) 第18回シンポジウム</i>, 2023. (サイバーエージェント賞)
                                            </li>
                                        </ul>
                                        <h3><b>受賞</b></h3>
                                        <ul>
                                            <li>言語処理学会第30回年次大会 (NLP2024) 委員特別賞</li>
                                            <li>NLP若手の会第18回シンポジウム (YANS2023) サイバーエージェント賞</li>
                                        </ul>
                                        <h3>その他資料</h3>
                                        <ul>
                                            <li>
                                                <a href="https://speakerdeck.com/zaemon1251hesty/emnlp-2023-incorporating-structured-representations-into-pretrained-vision-and-language-models-using-scene-graphs"> <b>輪読ゼミ発表</b>【EMNLP 2023】Incorporating Structured Representations into Pretrained Vision & Language Models Using Scene Graphs</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
)
}

export const getStaticProps: GetStaticProps<{}> = async (context) => {
    return {
        props: {}
    }
}

export default ResearchPage;