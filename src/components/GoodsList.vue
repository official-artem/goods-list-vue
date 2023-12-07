<script>
export default {
  props: {
    goods: Array,
    item: Number
  },
}
</script>

<template>
  <div class="wrapper px-10">
    <TransitionGroup name="list" tag="div" class="goods--list--container place-items-center">
      <div 
        v-for="good of this.goods" 
        :key="good.id" 
        class="card border-[1rem] rounded-2xl	" 
        style="width: 18rem;"
      >

        <img :src="good.image" class="w-full h-[15rem] object-contain" alt="{{ good.title }}">

        <div class="card-body">
          <h5 class="card-title mb-4 text-xl font-bold card__title">{{ good.title }}</h5>

          <p class="card-text">{{ good.description }}</p>

          <p class="text-lg mb-3 underline">{{ good.price }}$</p>
          <div class="rating__wrapper flex justify-between">
            <span>Rating: {{ good.rating.rate }}</span>
            <span>Count: {{ good.rating.rate }}</span>
          </div>
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

.card__title {
  height: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-text {
  max-width: 1fr;
  height: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>