<script>

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
  props: {
    categories: Array
  },
  emits: [
    'handleFilter',
  ]
}
</script>

<template>
  <article class="filters">
    <form 
      @submit.prevent="handleSubmit" 
      @change="$emit('handleFilter')" 
      class="filters__form"
    >
      <div class="top--wrapper">
      <select name="category" class="form-select filters__select">
        <option value="" disabled selected>Category</option>
        <option value="all">All</option>
        <option 
          v-for="category, id of this.categories" 
          :key="id" 
          :value="category"
        >{{ category }}</option>
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

      <button @click="$emit('handleFilter', 'reset')" type="reset" class="btn btn-primary">Reset</button>
    </div>

    <div>
      <label for="min-price" class="form-label">
        Min Price: {{ price.min }}
      </label>

      <input
        name="min-price"
        min="0" 
        max="1000" 
        v-model="price.min" 
        type="range" 
        class="form-range input-range" 
        id="min-price"
      >

      <label for="max-price" class="form-label price-range">
        Max Price: {{ price.max }}
      </label>

      <input
        name="max-price"
        min="0" 
        max="1000" 
        v-model="price.max" 
        type="range" 
        class="form-range" 
        id="max-price"
      >
    </div>
    </form>
  </article>
</template>

<style scoped>

.filters {
  padding: 1rem 0;
  margin: 0 auto;
  width: fit-content;
}

.filters__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.select--rating::after {
  position: absolute;
  content: '⭐';
}

.filters__select {
  width: max-content;
  display: inline;
}

.price-range {
  text-align: center;
}

.top--wrapper {
  display: flex;
  gap: 1rem;
}

</style>