import { IAuthor, IPost } from "../state";

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
