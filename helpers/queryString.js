const queryString = (string = "") => {
  if (!string) return {};
  return JSON.parse(
    '{"' + decodeURI(string.replace(/&/g, '","').replace(/=/g, '":"')) + '"}'
  );
};

export default queryString;
