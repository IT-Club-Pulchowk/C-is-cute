<template>
  <TheHeader :systemTheme="systemTheme" />
  <div class="content-wrapper">
    <br />
    <br />
    <br />
    <div class="container">
      <br />
      <form @submit.prevent class="w-400 mw-full">
        <div class="form-group">
          <label for="full-name">Filter by name</label>
          <input
            type="text"
            class="form-control"
            id="searchBox"
            v-model="queryName"
            autocomplete="off"
          />
        </div>
      </form>
    </div>
    <router-view
      :queryName="queryName"
      ref="statsAll"
      :systemTheme="systemTheme"
    />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  data() {
    return {
      showSpecific: 0,
      queryName: "",
      systemTheme: "light-theme",
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
  mounted() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      this.systemTheme = "dark-theme";
      document.querySelector("body").classList.add("dark-mode");
    } else {
      this.systemTheme = "light-theme";
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
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
