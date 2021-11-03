import { BlogPost } from "../../types"
import { HOST } from "../../utils/constants"
import { BlogPosts } from "../organisms/BlogPosts"
import { MyHeader } from "../organisms/MyHeader"
import { MyMeta } from "../organisms/MyMeta"

type Props = {
    blogPosts?:BlogPost[]
} 

export const BlogPostsTemplate:React.VFC<Props> = ({
    blogPosts
}) => {
    return (
        <>
            <MyMeta title={HOST + " / " + "Blog"} />
            <MyHeader />
            <main>
                <BlogPosts blogPosts={blogPosts} />
            </main>
        </>
    )
}