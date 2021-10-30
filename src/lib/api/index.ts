export const getPage = async () => {
    try {
        return await fetch("https://example.com")
        .then((res) => res.json)
        .catch(() => null);
    } catch(e) {
        return null;
    }
};