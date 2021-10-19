<template>
  <TheHeader />
  <br />
  <div class="container">
    <h3>
      Filter by name.
    </h3>
    <br />
    <form @submit.prevent>
      <input
        @keyup="submitForm"
        type="text"
        id="searchBox"
        v-model="queryName"
        autocomplete="off"
      />
    </form>
  </div>

  <StatsSpecific v-show="0" ref="statsSpecific" :queryName="queryName" />
  <!-- <StatsAll v-show="!showSpecific" /> -->
  <StatsAll :queryName="queryName" ref="statsAll" />
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
      queryName: "",
    };
  },
  methods: {
    submitForm() {
      if (this.queryName != "") {
        this.showSpecific = 1;
      } else this.showSpecific = 0;
      // this.$refs.statsSpecific.fetchData();
      this.$refs.statsAll.filterByName();
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
