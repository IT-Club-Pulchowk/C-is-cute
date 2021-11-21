<template>
  <!-- Registration form modal -->
  <div class="modal" id="register" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <a href="#" class="btn close" role="button" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </a>
        <h5 class="modal-title">Register for the workshop</h5>
        <!-- Form element start -->
        <div class="alert" role="alert" v-if="formSubmission">
          <h4 class="alert-heading">Default alert</h4>
          This is a default alert with some content and
          <a href="#" class="alert-link">a link</a>.
        </div>
        <form
          action="https://send.pageclip.co/hAf4RUcDPZO09Dy184yDBwPFVp9PkvoU"
          method="post"
          class="pageclip-form"
        >
          <!-- Full Name Input Start -->
          <div class="form-group">
            <label for="name" class="required">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Ben Dover"
              required="required"
            />
          </div>
          <!-- Full Name Input End -->

          <!-- Email Input Start -->
          <div class="form-group">
            <label for="email" class="required">Campus Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              placeholder="069BCT036.ben@pcampus.edu.np"
              required="required"
            />
          </div>
          <!-- Email Input End -->

          <!-- Familarity with C Input Start -->
          <div class="form-group">
            <label class="required">Rate your familarity with C</label>
            <div class="custom-radio">
              <input
                type="radio"
                name="familarity-with-c"
                id="who-is-c"
                value="0"
                required="required"
              />
              <label for="who-is-c">Who is C?</label>
            </div>
            <div class="custom-radio">
              <input
                type="radio"
                name="familarity-with-c"
                id="i-have-worked-with-c"
                value="1"
                required="required"
              />
              <label for="i-have-worked-with-c"
                >I've worked with C before</label
              >
            </div>
            <div class="custom-radio">
              <input
                type="radio"
                name="familarity-with-c"
                id="i-have-made-a-project-with-c"
                value="2"
                required="required"
              />
              <label for="i-have-made-a-project-with-c"
                >I've made some projects with C</label
              >
            </div>
            <div class="custom-radio">
              <input
                type="radio"
                name="familarity-with-c"
                id="i-am-dennis-ritchie"
                value="3"
                required="required"
              />
              <label for="i-am-dennis-ritchie">I'm Dennis Ritchie!</label>
            </div>
          </div>
          <!-- Familarity with C Input End -->

          <!-- Beginner Workshop Input Start -->
          <div class="form-group">
            <div class="custom-checkbox">
              <input
                type="checkbox"
                id="attended-beginner-workshop"
                name="attended-beginner"
              />
              <label for="attended-beginner-workshop"
                >I've attended the beginner's workshop on C by IT Club (not
                required)
              </label>
            </div>
          </div>
          <!-- Beginner Workshop Input End -->

          <!-- Submit Button Start -->
          <button
            class="button pageclip-form__submit btn btn-primary btn-block"
            type="submit"
          >
            <span>Submit</span>
          </button>

          <!-- Submit Button End -->
        </form>

        <!-- Form End -->
      </div>
    </div>
  </div>
  <div class="page-wrapper">
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
      <footer class="bg-very-dark font-size-12 ">
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
  max-height: 10vh;
  min-height: 90px;
  color: rgba(255, 255, 255, 0.8);
  /* position: absolute;
  bottom: 0;
  width: 100%; */
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
