<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary"
      :class="systemTheme == 'dark-theme' ? 'bg-dark' : ''"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">IT Club</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- webhook test -->
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" v-for="i in maxDays" :key="i">
              <router-link
                class="nav-link"
                :class="$route.params.day == i ? 'active' : ''"
                :to="`/${i}`"
                >Day {{ i }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  components: {
    // HelloWorld,
  },
  props: {
    systemTheme: String,
  },
  data() {
    return {
      maxDays: 0,
    };
  },
  mounted() {
    fetch("https://aabhusanaryal.github.io/fake-json/maxDays.json")
      .then((res) => res.json())
      .then((res) => {
        this.maxDays = res[0];
      });
  },
};
</script>

<style>
header {
  background-color: red;
  height: 50px;
  width: 100%;
}
#spacer {
  padding-left: 20px;
}
</style>
