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
      data: [],
    };
  },
  mounted() {
    for (let i = 1; i < 10; i++) {
      fetch(`${this.data_url}/${i}.md`).then((res) => {
        if (res.ok) {
          res.text().then((res) =>
            this.data.push({
              id: i,
              text: res,
            })
          );
        } else this.data.sort((f, s) => s.id - f.id); // Sort the array once you encounter a 404
      });
    }
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
