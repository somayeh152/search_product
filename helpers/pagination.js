const pagination = (products = [], options = { page: 1, perPage: 8 }) => {
  const { page, perPage } = options;
  return products.slice(0, page * perPage);
};

export default pagination;
