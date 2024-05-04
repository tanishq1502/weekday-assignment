export const getHeightWidth = (size) => {
  if (size === "default") return { height: "5rem", width: "5rem" };
  if (size === "sm") return { height: "3rem", width: "3rem" };
  if (size === "md") return { height: "6rem", width: "6rem" };
  if (size === "lg") return { height: "7rem", width: "7rem" };
};
