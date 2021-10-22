<template>
  <TheHeader :systemTheme="systemTheme" />
  <br />
  <div class="container">
    <h3>
      Filter by name.
    </h3>
    <br />
    <form @submit.prevent>
      <input
        type="text"
        id="searchBox"
        v-model="queryName"
        autocomplete="off"
      />
    </form>
  </div>
  <router-view
    :queryName="queryName"
    ref="statsAll"
    :systemTheme="systemTheme"
  />
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
      document.querySelector("html").classList.add("dark-theme");
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
/* Define styles for the default root window element */
html {
  --background-color-primary: #fafafa;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
html.dark-theme {
  --background-color-primary: #212121;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

body {
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
}
</style>
