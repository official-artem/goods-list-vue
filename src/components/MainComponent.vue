<script>
import FilterComponent from './FilterComponent.vue'
import GoodsList from './GoodsList.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    FilterComponent: FilterComponent,
    GoodsList: GoodsList
  },
  async mounted() {
    this.fetchGoods()
  },

  methods: mapActions(['fetchGoods'])
}
</script>

<template>
  <main class="main">
    <section class="main__section">
      <h1 class="text-5xl text-center font-bold mb-8">Goods</h1>

      <FilterComponent />

      <GoodsList />
    </section>
  </main>
</template>

<style scoped>
.main {
  padding: 2rem 0;
}
</style>
