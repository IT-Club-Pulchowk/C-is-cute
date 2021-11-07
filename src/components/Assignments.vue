<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6" v-for="assignment in data" :key="assignment.id">
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
      data: {},
    };
  },
  mounted() {
    fetch(this.data_url)
      .then((res) => res.json())
      .then((res) => {
        this.data = res;
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
