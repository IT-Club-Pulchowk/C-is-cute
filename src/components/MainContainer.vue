<template>
  <div class="container p-5">
    <h3>
      Enter your roll number to view details.
    </h3>
    <br />
    <form @submit.prevent="fetchData">
      <input type="text" id="searchBox" v-model="queryName" />
    </form>
    <br />
    <ul class="list-group">
      <li class="list-group-item">Name: {{ name }}</li>
      <li class="list-group-item">Compilation: {{ compilation }}</li>
      <li class="list-group-item">Execution: {{ execution }}</li>
      <li class="list-group-item">Correctness: {{ correctness }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainContainer",
  data() {
    return {
      queryName: "",
      name: "Unknown",
      compilation: "NA",
      execution: "NA",
      correctness: "NA",
      data_url: "https://aabhusanaryal.github.io/fake-json/MOCK_DATA.json",
    };
  },
  methods: {
    fetchData() {
      fetch(this.data_url)
        .then((response) => response.json())
        .then((data) => {
          data.forEach((item) => {
            if (item.name == this.queryName) {
              console.log(item.name);
              this.name = item.name;
              this.compilation = item.compilation;
              this.execution = item.execution;
              this.correctness = item.correctness;
            }
          });
        });
    },
  },
};
</script>

<style>
#searchBox {
  width: 300px;
  height: 50px;
  padding-left: 5px;
}
</style>
