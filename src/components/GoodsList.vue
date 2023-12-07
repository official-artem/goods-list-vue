<script>
export default {
  props: {
    goods: Array,
    item: Number
  },
}
</script>

<template>
  <div class="container text-center">
    <TransitionGroup name="list" tag="div" class="goods--list--container">
      <div 
        v-for="good of this.goods" 
        :key="good.id" 
        class="card col-3" 
        style="width: 18rem;"
      >
        <img :src="good.image" class="card-img-top" alt="{{ good.title }}">

        <div class="card-body">
          <h5 class="card-title">{{ good.title }}</h5>

          <p class="card-text">{{ good.description }}</p>

          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </TransitionGroup>
  </div>
  
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.goods--list--container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.card {
  padding: 1rem;
}

.card-text {
  max-width: 1fr;
  height: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>