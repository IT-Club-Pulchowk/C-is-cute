<template>
  <div class="container p-5">
    <br />
    <ul class="list-group">
      <li class="list-group-item">Name: {{ name }}</li>
      <li class="list-group-item">Compilation: {{ Compilation }}</li>
      <li class="list-group-item">Execution: {{ Execution }}</li>
      <li class="list-group-item">Output: {{ Output }}</li>
      <li class="list-group-item">Correctness: {{ Correctness }}</li>
      <!-- <li class="list-group-item">Size: {{ size }}</li> -->
      <li class="list-group-item">Runtime: {{ time }}</li>
      <!-- <li class="list-group-item">Memory: {{ memory }}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "StatsSpecific",
  data() {
    return {
      roll: "0",
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
  props: {
    queryName: String,
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
          console.log(this.json_out);
          this.json_out.forEach((item) => {
            if (item.roll == this.queryName) {
              console.log(item.name);
              this.roll = item.roll;
              this.name = item.name;
              this.Compilation = item.Compilation;
              this.Execution = item.Execution;
              this.Output = item.Output;
              this.Correctness = item.Correctness;
              this.time = item["Compilation Time"];
            }
          });
        });
    },
  },
};
</script>

<style></style>
