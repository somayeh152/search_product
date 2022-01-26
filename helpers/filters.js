import newestFilter from "./newestFilter";
import bestsellingFilter from "./bestsellingFilter";
import categoryFilter from "./categoryFilter";

const filter = (
  products = [],
  options = { sort: "newest", category: "all" }
) => {
  let productsData = [...products];
  const { sort, category } = options;

  switch (sort) {
    case "newest":
      productsData = newestFilter(productsData);
      break;
    case "bestselling":
      productsData = bestsellingFilter(productsData);
      break;
  }

  if (category && category != "all") {
    productsData = categoryFilter(productsData, category);
  }

  return productsData;
};

export default filter;
