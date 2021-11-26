<template>
  <div class="container">
    <div class="row">
      <div v-for="assignment in data" :key="assignment.id">
        <AssignmentsCard :assignment="assignment" />
      </div>
    </div>
  </div>
</template>

<script>
import AssignmentsCard from "./AssignmentsCard.vue";

export default {
  name: "Assignments",
  components: {
    AssignmentsCard,
  },
  data() {
    return {
      data_url: "https://aabhusanaryal.github.io/fake-json/assignments",
      temp_data: [],
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      fetch(`${this.data_url}/${i}.md`).then((res) => {
        if (res.ok) {
          console.log(res);
          res.text().then((res) =>
            this.temp_data.push({
              id: i,
              text: res,
            })
          );
        }
      });
    }
  },
  computed: {
    data: function() {
      let temp_array = [...this.temp_data];
      return temp_array.sort((a, b) => b.id - a.id);
    },
  },
};
</script>

<style>
.container {
  -ms-overflow-style: none;
}
.container::-webkit-scrollbar {
  display: none;
}
</style>
