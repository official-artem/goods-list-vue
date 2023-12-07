export const handleFilter = (currentGoods, value, currentFilter) => {
  let updatedGoods = currentGoods;

  if ('category' in currentFilter && value !== 'all') {
    updatedGoods = updatedGoods.filter(item => {
      return item.category === currentFilter.category;
    });
  }

  if ('rating' in currentFilter && value !== 'all') {
    updatedGoods = updatedGoods.filter(item => {
      return +item.rating.rate >= +currentFilter.rating;
    });
  }

  if ('search' in currentFilter && value !== '') {
    updatedGoods = updatedGoods.filter(item => {
      return item.title
        .toLowerCase()
        .includes(currentFilter.search);
    });
  }

  if ('min-price' in currentFilter && value) {
    updatedGoods = updatedGoods.filter(item => {
      return item.price >= currentFilter['min-price'];
    });
  }

  if ('max-price' in currentFilter && value) {
    updatedGoods = updatedGoods.filter(item => {
      return item.price <= currentFilter['max-price'];
    });
  }

  return updatedGoods;
}