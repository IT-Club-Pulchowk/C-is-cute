<template>
  <TheHeader />
  <MainContainer />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import MainContainer from "./components/MainContainer.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    MainContainer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
}
</style>
