export default (c, maxLength) => {
  if (!c || c.length < maxLength) return c;
  return `${c.slice(0, Math.floor(maxLength / 2))}…${c.slice(c.length - Math.floor(maxLength / 2))}`;
};
