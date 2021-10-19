<template>
  <TheHeader />
  <br />
  <div class="container">
    <h3>
      Enter your roll number to view details.
    </h3>
    <br />
    <form @submit.prevent>
      <input
        @keyup="submitForm"
        type="text"
        id="searchBox"
        v-model="queryRoll"
        autocomplete="off"
      />
    </form>
  </div>

  <StatsSpecific
    v-show="showSpecific"
    ref="statsSpecific"
    :queryRoll="queryRoll"
  />
  <StatsAll v-show="!showSpecific" />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import StatsSpecific from "./components/StatsSpecific.vue";
import StatsAll from "./components/StatsAll.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    StatsSpecific,
    StatsAll,
  },
  data() {
    return {
      showSpecific: 0,
      queryRoll: "",
    };
  },
  methods: {
    submitForm() {
      if (this.queryRoll != "") {
        this.showSpecific = 1;
      } else this.showSpecific = 0;
      this.$refs.statsSpecific.fetchData();
    },
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
#searchBox {
  width: 300px;
  height: 50px;
  padding-left: 5px;
}
table thead,
table tfoot {
  position: sticky;
}
table thead {
  inset-block-start: 0; /* "top" */
}
table tfoot {
  inset-block-end: 0; /* "bottom" */
}
</style>
