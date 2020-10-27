export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map(str => str.charAt(0).toUpperCase())
    .join("");
};
