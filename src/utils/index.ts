import { IAuthor, IPost } from "../state";

export const calculatePostsForOneAuthor = (author: IAuthor, posts: IPost[]) => {
  return posts.filter(post => post.userId === author.id).length;
};

export const calculatePostsForEachAuthor = (
  authors: IAuthor[],
  posts: IPost[]
) => {
  return authors.map(author => {
    const numberOfPosts = calculatePostsForOneAuthor(author, posts);
    return {
      ...author,
      numberOfPosts,
    };
  });
};

export const getPostsForAuthor = (posts: IPost[], author: IAuthor) => {
  return posts.filter(post => post.userId === author.id);
};
