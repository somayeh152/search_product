const newestFilter = (products) => {
  return products.sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateA < dateB ? 1 : -1;
  });
};

export default newestFilter;
