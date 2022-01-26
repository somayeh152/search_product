const pagination = (products = [], options = { page: 1, perPage: 8 }) => {
  const { page, perPage } = options;
  return products.slice((page - 1) * perPage, page * perPage);
};

export default pagination;
