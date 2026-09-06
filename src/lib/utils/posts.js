export const fetchPosts = async () => {
    const allPostFiles = import.meta.glob('/src/posts/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const slug = path.split('/').pop().slice(0, -3);
            return { ...metadata, slug };
        })
    );

    return allPosts.sort((a, b) => new Date(b.lastEdited) - new Date(a.lastEdited));
};