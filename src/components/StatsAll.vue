//TODO: Fix empty entry while sorting

<template>
  <div class="container-fluid p-5">
    <table class="table table-striped">
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
      queryRoll: "",
      roll: 0,
      name: "Unknown",
      Compilation: "NA",
      Execution: "NA",
      Correctness: "NA",
      Output: "NA",
      time: "NA",
      data_url: "https://aabhusanaryal.github.io/fake-json/MOCK_DATA.csv",
      json_out: [],
      sorted_out: [],
      sortOrder: 0, //0 or 1, ascending or descending
    };
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
        .then((res) => res.text())
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
          // Displaying Data
          // this.json_out.forEach((item) => {
          //   if (item.roll == this.queryRoll) {
          //     console.log(item.name);
          //     this.roll = item.roll;
          //     this.name = item.name;
          //     this.Compilation = item.Compilation;
          //     this.Execution = item.Execution;
          //     this.Output = item.Output;
          //     this.Correctness = item.Correctness;
          //     this.time = item["Compilation Time"];
          //   }
          // });
        });
    },
  },
  beforeMount() {
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
