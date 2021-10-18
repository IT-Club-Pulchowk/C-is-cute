<template>
  <div class="container p-5 table-responsive">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Roll</th>
          <th scope="col">Name</th>
          <th scope="col">Compilation</th>
          <th scope="col">Execution</th>
          <th scope="col">Output</th>
          <th scope="col">Correctness</th>
          <th scope="col">Runtime</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in json_out" :key="person.roll">
          <th scope="row">{{ person.roll }}</th>
          <td>{{ person.name }}</td>
          <td>{{ person.Compilation }}</td>
          <td>{{ person.Execution }}</td>
          <td>{{ person.Output }}</td>
          <td>{{ person.Correctness }}</td>
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
      json_out: {},
    };
  },
  methods: {
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
          this.json_out = output;

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
</style>
