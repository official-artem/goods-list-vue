import { createStore } from 'vuex'
import { getGoods } from './api/todos'

const store = createStore({
  state: {
    goods: [],
    filteredGoods: [],
    categories: [],
    selectedFilters: {}
  },
  getters: {
    allGoods(state) {
      return state.goods
    },

    allFilteredGoods(state) {
      return state.filteredGoods
    },

    allCategories(state) {
      return state.categories
    },

    selectedFilters(state) {
      return state.selectedFilters
    }
  },
  mutations: {
    handleFilterGoods(state) {
      let updatedGoods = state.goods
      const currentFilter = state.selectedFilters

      if ('category' in currentFilter && currentFilter.category !== 'all') {
        console.log('category')
        updatedGoods = updatedGoods.filter((item) => {
          return item.category === currentFilter.category
        })
      }

      if ('rating' in currentFilter && currentFilter.rating !== 'all') {
        console.log('rating')
        updatedGoods = updatedGoods.filter((item) => {
          return +item.rating.rate >= +currentFilter.rating
        })
      }

      if ('search' in currentFilter && currentFilter.search !== '') {
        console.log('search')
        updatedGoods = updatedGoods.filter((item) => {
          return item.title.toLowerCase().includes(currentFilter.search)
        })
      }

      if ('min-price' in currentFilter && currentFilter['min-price'] > 0) {
        console.log('min-price')
        updatedGoods = updatedGoods.filter((item) => {
          return item.price >= currentFilter['min-price']
        })
      }

      if ('max-price' in currentFilter && currentFilter['min-price'] < 1000) {
        console.log('max-price')
        updatedGoods = updatedGoods.filter((item) => {
          return item.price <= currentFilter['max-price']
        })
      }

      state.filteredGoods = updatedGoods
    },

    updateSelectedFilters(state, { name, value }) {
      state.selectedFilters[name] = value
    },

    updateGoods(state, goods) {
      state.goods = goods
      state.filteredGoods = goods

      state.categories = goods.reduce((arr, item) => {
        if (!arr.includes(item.category)) {
          arr.push(item.category)
        }

        return arr
      }, [])
    }
  },
  actions: {
    async fetchGoods({ commit }) {
      const goods = await getGoods()

      commit('updateGoods', goods.data)
    }
  }
})

export default store
