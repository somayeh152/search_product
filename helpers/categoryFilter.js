const categoryFilter = (products, category) => {
  return products.filter((item) => item.category == category);
};

export default categoryFilter;
