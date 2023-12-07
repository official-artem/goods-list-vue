<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  components: {
    'HeaderComponent': HeaderComponent,
    'MainComponent': MainComponent
  }
}
</script>

<template>
  <HeaderComponent />
  <MainComponent />
</template>
