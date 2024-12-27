const shortenText = (text) => {
  return text.split(" ").slice(0, 15).join("");
};

export { shortenText };
