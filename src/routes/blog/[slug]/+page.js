export const load = async ({ params }) => {
    const post = await import(`../../../posts/${params.slug}.md`);
    const { title, date, category, lastEdited } = post.metadata;
    const content = post.default;

    return { content, title, date, category, lastEdited };
};