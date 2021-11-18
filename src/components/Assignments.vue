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
      data_url: "https://aabhusanaryal.github.io/fake-json/assignments.json",
      data_url_temp:
        "https://aabhusanaryal.github.io/fake-json/assignments/1.md",
      data: {},
    };
  },
  mounted() {
    fetch(this.data_url_temp)
      .then((res) => res.text())
      .then((res) => {
        this.data[0] = res;
      });
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
