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

export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map(str => str.charAt(0).toUpperCase())
    .join("");
};

export const findAuthorsBySearch = (authors: IAuthor[], input: string) => {
  return authors.filter(author =>
    [author.email, author.name]
      .map(s => s.toLowerCase())
      .some(s => s.includes(input.toLowerCase()))
  );
};

export const findPostsBySearch = (posts: IPost[], input: string) => {
  return posts.filter(post =>
    [post.title, post.body]
      .map(s => s.toLowerCase())
      .some(s => s.includes(input.toLowerCase()))
  );
};
