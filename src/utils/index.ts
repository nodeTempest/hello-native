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

export const getPostsByAuthorId = (posts: IPost[], authorId: number) => {
  return posts.filter(post => post.userId === authorId);
};

export const getInitials = (name: string) =>
  name
    .split(" ")
    .map(str => str.charAt(0).toUpperCase())
    .join("");
