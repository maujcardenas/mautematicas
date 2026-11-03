import { getPosts } from '$lib/utils/posts';

export async function load() {
    const posts = getPosts();

    return {
        recentPosts: posts.slice(0, 10) // Solo los 10 más recientes para la tabla de inicio
    };
}