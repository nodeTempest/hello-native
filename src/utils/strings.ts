export const getInitials = (name: string) => {
  return name
    .split(" ")
    .map(str => str.charAt(0).toUpperCase())
    .join("");
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
