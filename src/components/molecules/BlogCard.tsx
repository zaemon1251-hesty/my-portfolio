import { BlogPost } from "../../types";
import Link from "next/link"
import { formatDate } from "../../utils/funcs";

type Props = {
    blog: BlogPost
};

export const BlogCard: React.VFC<Props> = ({
    blog
}) => {
    return (
        <li>
            <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden">
                <Link href={`/blog/post/${blog.id}`} >
                <a className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start flex-shrink-0 bg-gray-100 overflow-hidden relative">
                    <img src={blog.eyecatch} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-200" />
                </a>
                </Link>
                <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-gray-400 text-sm">{formatDate(blog.date)}</span>

                <h2 className="text-gray-800 text-xl font-bold">
                    <Link href={`/blog/post/${blog.id}`} >
                    <a className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{blog.title}</a>
                    </Link>
                </h2>

                <p className="text-gray-500 overflow-ellipsis">{blog.description}</p>

                <div>
                    <Link href={`/blog/post/${blog.id}`} >
                    <a className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">Read more</a>
                    </Link>
                </div>
                </div>
            </div>
        </li>
    );
};