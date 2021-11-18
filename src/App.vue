<template>
  <div
    class="modal modal-full ie-scroll-fix"
    id="modal-1"
    tabindex="-1"
    role="dialog"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <a href="#" class="close" role="button" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </a>
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div v-highlight>
                <pre class="language-javascript">
                    <code>
                    console.log(hello);
                    console.log(hello);
                    console.log(hello);
                    console.log(hello);
                    console.log(hello);
                    console.log(hello);
                    </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TheHeader :systemTheme="systemTheme" />
  <div class="content-wrapper">
    <br />
    <br />
    <br />

    <router-view
      :queryName="queryName"
      ref="statsAll"
      :systemTheme="systemTheme"
    />
    <footer class="bg-very-dark font-size-12">
      <div class="text-center">
        Event organised by
        <a href="https://github.com/IT-Club-Pulchowk/">IT Club, Pulchowk</a>
        <br />
        <span>
          Site designed and maintained by
          <a href="https://github.com/aabhusanaryal">@aabhusanaryal</a></span
        >
      </div>
    </footer>
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

footer {
  padding-top: 20px;
  max-height: 9vh;
  min-height: 80px;
  color: rgba(255, 255, 255, 0.8);
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
