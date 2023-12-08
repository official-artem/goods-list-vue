<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      search: '',
      category: '',
      price: {
        min: 0,
        max: 1000
      }
    }
  },
  computed: mapGetters(['allCategories', 'allFilteredGoods']),
  methods: {
    handleFilterGoods(event) {
      const { name, value } = event.target
      this.$store.commit('updateSelectedFilters', { name, value })
      this.$store.commit('handleFilterGoods')
    }
  }
}
</script>

<template>
  <article class="filters">
    <form @submit.prevent="SubmitEvent" @change="handleFilterGoods" class="filters__form">
      <div class="top--wrapper flex justify-between">
        <select name="category" class="border-1 border-black">
          <option value="" disabled selected>Category</option>
          <option value="all">All</option>
          <option v-for="(category, id) of allCategories" :key="id" :value="category">
            {{ category }}
          </option>
        </select>

        <select name="rating" class="form-select filters__select select--rating">
          <option value="" disabled selected>Rating</option>
          <option value="all">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input
          name="search"
          v-model="search"
          type="text"
          placeholder="Search a good"
          class="form-control filters__select"
        />
      </div>

      <div class="flex justify-between gap-4">
        <label for="min-price" class="w-[7rem]"> Min Price: {{ price.min }} </label>

        <input
          name="min-price"
          min="0"
          max="1000"
          v-model="price.min"
          type="range"
          class="form-range input-range"
          id="min-price"
        />

        <label for="max-price" class="price-range w-[8rem]"> Max Price: {{ price.max }} </label>

        <input
          name="max-price"
          min="0"
          max="1000"
          v-model="price.max"
          type="range"
          class="form-range"
          id="max-price"
        />
      </div>
    </form>
  </article>
</template>

<style scoped>
.filters {
  padding: 1rem 0;
  margin: 0 auto;
  width: 40rem;
}

.filters__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.filters__select {
  width: max-content;
  display: inline;
}

.price-range {
  text-align: center;
}
</style>
