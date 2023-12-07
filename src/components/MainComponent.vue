<script>
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