import { getPosts } from '$lib/utils/posts';

export async function load() {
    return {
        posts: getPosts()
    };
}