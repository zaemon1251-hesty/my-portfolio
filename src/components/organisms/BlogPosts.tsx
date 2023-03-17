import { BlogPost } from "../../types";
import { BlogPostSample } from "../../utils/sample";
import { BlogCard } from "../molecules/BlogCard";

type Props = {
    blogPosts: BlogPost[] | null,
}

export const BlogPosts: React.VFC<Props> = ({
    blogPosts
}) => {
    if (!blogPosts) {
        blogPosts = [BlogPostSample]
    }
    let i = 0;
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">My Blog</h2>

                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                        何かしらの参加エピソード、体験談、グルメレポ、旅行レポを纏めて管理したいと考えて作成しました。<br /> 
                        外部サイトで書いた記事のリンクもこちらに保存します。
                    </p>
                </div>
                <div className="flex justify-center flex-row flex-wrap gap-4 md:gap-6 xl:gap-8">
                    <ul>
                    {blogPosts.map((blog) => (
                        <li key={i++}>
                            <BlogCard blog={blog} />
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};