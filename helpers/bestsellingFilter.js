const bestsellingFilter = (products) => {
  return products.sort(
    (a, b) => parseInt(b.sold_count) - parseInt(a.sold_count)
  );
};

export default bestsellingFilter;
