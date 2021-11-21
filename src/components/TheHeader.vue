<template>
  <header>
    <div class="page-wrapper with-navbar">
      <!-- Navbar (immediate child of the page wrapper) -->

      <nav class="navbar">
        <router-link to="/" class="navbar-brand ml-10 ml-sm-15">
          Advanced C Workshop
        </router-link>
        <!-- Old style nav links to various days -->
        <!-- <ul class="navbar-nav hidden-sm-and-down">
          <li
            class="nav-item"
            :class="$route.params.day == i ? 'active' : ''"
            v-for="i in maxDays"
            :key="i"
          >
            <router-link class="nav-link" :to="`/${i}`"
              >Day {{ i }}</router-link
            >
          </li>
        </ul> -->

        <div class="navbar-content ml-auto">
          <li class="nav-item dropdown with-arrow" v-show="false">
            <a
              class="nav-link"
              data-toggle="dropdown"
              id="nav-link-dropdown-toggle"
            >
              Results
              <i class="fa fa-angle-down ml-5" aria-hidden="true"></i>
              <!-- ml-5= margin-left: 0.5rem (5px) -->
            </a>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="nav-link-dropdown-toggle"
            >
              <span v-for="i in maxDays" :key="i">
                <router-link class="dropdown-item" :to="`/${i}`"
                  >Day {{ i
                  }}<strong
                    v-if="i == maxDays"
                    class="badge badge-success float-right"
                    >New</strong
                  ></router-link
                >
              </span>

              <!-- <div class="dropdown-divider"></div>
              <div class="dropdown-content">
                <a href="#" class="btn btn-block" role="button">
                  See all products
                  <i class="fa fa-angle-right ml-5" aria-hidden="true"></i>
                  
                </a>
              </div> -->
            </div>
          </li>
          <!-- Remove v-show="false" to show Assignments link in navbar -->
          <router-link class="nav-link" to="/assignments" v-show="false">
            Assignments</router-link
          >
          <button
            class="btn btn-action mr-5"
            type="button"
            onclick="halfmoon.toggleDarkMode()"
            aria-label="Toggle dark mode"
          >
            <i class="fa fa-moon-o" aria-hidden="true"></i>
          </button>

          <!-- <div class="dropdown with-arrow hidden-md-and-up">
            <button
              class="btn navbar-menu-btn"
              data-toggle="dropdown"
              type="button"
              id="navbar-dropdown-toggle-btn"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="text">Menu</span>
              <i class="fa fa-angle-down" aria-hidden="true"></i>
            </button>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbar-dropdown-toggle-btn"
            >
              <router-link
                class="dropdown-item"
                :class="$route.params.day == i ? 'active' : ''"
                v-for="i in maxDays"
                :key="i"
                :to="`/${i}`"
                >Day {{ i }}</router-link
              >
            </div>
          </div> -->
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
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
  height: 50px;
  width: 100%;
}
#spacer {
  padding-left: 20px;
}
</style>
