export const handleFilter = (currentGoods, currentFilter) => {
  let updatedGoods = currentGoods;

  if ('category' in currentFilter && currentFilter.category !== 'all') {
    console.log('category')
    updatedGoods = updatedGoods.filter(item => {
      return item.category === currentFilter.category;
    });
  }

  

  if ('rating' in currentFilter && currentFilter.rating !== 'all') {
    console.log('rating')
    updatedGoods = updatedGoods.filter(item => {
      return +item.rating.rate >= +currentFilter.rating;
    });
    
  }

  if ('search' in currentFilter && currentFilter.search !== '') {
    console.log('search')
    updatedGoods = updatedGoods.filter(item => {
      return item.title
        .toLowerCase()
        .includes(currentFilter.search);
    });
  }

  if ('min-price' in currentFilter && currentFilter['min-price'] > 0) {
    console.log('min-price')
    updatedGoods = updatedGoods.filter(item => {
      return item.price >= currentFilter['min-price'];
    });
  }

  if ('max-price' in currentFilter && currentFilter['min-price'] < 1000) {
    console.log('max-price')
    updatedGoods = updatedGoods.filter(item => {
      return item.price <= currentFilter['max-price'];
    });
  }

  return updatedGoods;
}