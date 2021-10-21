//TODO: Fix empty entry while sorting

<template>
  <div class="container-fluid p-5">
    <div class="alert alert-danger" role="alert" v-if="error">
      Data not found!
    </div>
    <table
      v-if="!error"
      class="table table-striped"
      :class="systemTheme == 'dark-theme' ? 'table-dark' : ''"
    >
      <thead>
        <tr>
          <th class="sticky-header" scope="col">
            Roll <i @click="sortByRoll" class="fa fa-fw fa-sort"></i>
          </th>
          <th scope="col">
            Name <i @click="sortByName" class="fa fa-fw fa-sort"></i>
          </th>
          <th scope="col">Compilation</th>
          <th scope="col">Execution</th>
          <th scope="col">Output</th>
          <th scope="col">Correctness</th>
          <th scope="col">
            Runtime <i @click="sortByTime" class="fa fa-fw fa-sort"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in sorted_out" :key="person.roll">
          <th scope="row" v-if="person.roll != undefined">{{ person.roll }}</th>
          <td>{{ person.name }}</td>
          <td>{{ person.Compilation == "true" ? "✔️" : "❌" }}</td>
          <td>{{ person.Execution == "true" ? "✔️" : "❌" }}</td>
          <td>{{ person.Output == "true" ? "✔️" : "❌" }}</td>
          <td>{{ person.Correctness == "true" ? "✔️" : "❌" }}</td>
          <td>{{ person["Compilation Time"] }}</td>
        </tr>
        <!-- <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "StatsAll",
  data() {
    return {
      roll: 0,
      name: "Unknown",
      Compilation: "NA",
      Execution: "NA",
      Correctness: "NA",
      Output: "NA",
      time: "NA",
      day: 0,
      data_url_base: "https://aabhusanaryal.github.io/fake-json/MOCK_DATA",
      data_url: "",
      json_out: [],
      sorted_out: [],
      sortOrder: 0, //0 or 1, ascending or descending
      error: 0,
      errorMsg: "",
    };
  },
  props: {
    queryName: String,
    systemTheme: String,
  },

  methods: {
    sortByTime() {
      this.sorted_out.sort((el1, el2) => {
        let d = el1["Compilation Time"] - el2["Compilation Time"];
        if (this.sortOrder) {
          return d;
        } else {
          return -d;
        }
      });
      this.sortOrder = !this.sortOrder;
    },
    sortByName() {
      this.sorted_out.sort((el1, el2) => {
        let d = el1.name > el2.name;
        if (this.sortOrder) {
          return d ? 1 : -1;
        } else {
          return d ? -1 : 1;
        }
      });
      this.sortOrder = !this.sortOrder;
    },
    sortByRoll() {
      this.sorted_out.sort((el1, el2) => {
        let d = el1.roll - el2.roll;
        if (this.sortOrder) {
          return d;
        } else {
          return -d;
        }
      });
      this.sortOrder = !this.sortOrder;
    },
    fetchData() {
      // Fetching CSV and converting to JSON
      fetch(this.data_url)
        .then((res) => {
          if (!res.ok) this.error = 1;
          return res.text();
        })
        .then((input) => {
          const lines = input.split("\n");
          const header = lines[0].split(",");
          let output = lines.slice(1).map((line) => {
            const fields = line.split(",");
            return Object.fromEntries(header.map((h, i) => [h, fields[i]]));
          });
          this.json_out = Object.values(output); // this is an array
          this.json_out.pop(); // Removes the last (useless) entry
          this.sorted_out = this.json_out;
        });
    },
    filterByName() {
      console.log("filter");
      this.sorted_out = this.json_out.filter((el) => {
        return el.name.toLowerCase().startsWith(this.queryName.toLowerCase());
      });

      console.log(this.queryName);
    },
  },
  beforeMount() {
    console.log(this.$route.query.day);
  },
  mounted() {
    console.log(this.data_url);
    const urlParams = new URLSearchParams(window.location.search);
    this.day = urlParams.get("day");
    this.data_url = `${this.data_url_base}_DAY${this.day}.csv`;
    // console.log(this.systemTheme);
    this.fetchData();
  },
};
</script>

<style>
#searchBox {
  width: 300px;
  height: 50px;
  padding-left: 5px;
}

i {
  cursor: pointer;
}
.container {
  overflow: auto !important;
}

table thead {
  background-color: white;
  position: sticky;
  inset-block-start: 0; /* "top" */
}

.custom-container {
  padding-right: 0;
  padding-left: 0;
  width: 50%;
}

@media (min-width: 568px) {
  .container-fluid {
    width: 550px;
  }
}
@media (min-width: 992px) {
  .container-fluid {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container-fluid {
    width: 1170px;
  }
}
</style>
