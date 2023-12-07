<script>
import { handleFilter } from '../utils/handleFilter';
import { getGoods } from '../api/todos';
import FilterComponent from './FilterComponent.vue';
import GoodsList from './GoodsList.vue';

export default {
  data() {
    return {
      goods: [],
      filteredGoods: [],
      categories: [],
      selectedFilters: {},
    }
  },
  components: {
    'FilterComponent': FilterComponent,
    'GoodsList': GoodsList
  },
  mounted() {
    getGoods()
      .then(({ data }) => {
        this.goods = data;
        this.filteredGoods = data;

        this.categories = data.reduce((arr, item) => {
         if (!arr.includes(item.category)) {
          arr.push(item.category);
         }

         return arr;
        },[])
      });
  },
  methods: {
    filterGoods(event) {
      const { name, value } = event.target;

      this.selectedFilters[name] = value;

      this.filteredGoods = handleFilter([...this.goods], value, this.selectedFilters);
    },
    handleResetFilter() {
      this.filteredGoods = this.goods;
    }
  },
}
</script>

<template>
  <main class="main">
    <section class="main__section">
      <h1 class="main__title">Goods</h1>

      <FilterComponent 
        @change="filterGoods($event)"
        :categories="categories" 
      />
      <GoodsList 
        :goods="filteredGoods" 
      />
    </section>
  </main>
</template>

<style scoped>
.main {
  padding: 2rem 0;
}

.main__title {
  text-align: center;
}
</style>