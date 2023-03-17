import { getArticles, getBlogPosts, getProducts } from "../src/lib/api/index";

test("non empty articles", async () => {
    const result = await getArticles();
    return await expect(result).resolves.not.toBeNull();
});


test("non empty blog_posts", async () => {
    const result = await getBlogPosts();
    return await expect(result).resolves.not.toBeNull();
});

test("non empty products", async () => {
    const result = await getProducts();
    return await expect(result).resolves.not.toBeNull();
});