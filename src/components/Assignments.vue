<template>
  <div class="container">
      <div class="row">
        <div class="col-sm-6" v-for="assignment in data" :key="assignment.id">
            <div class="card bg-dark text-white">
            <div class="card-body">
                <h5 class="card-title">{{ assignment.id }}: {{ assignment.title }}</h5>
                <p class="card-text">
                {{ assignment.description }}
                <br><strong>Specs:</strong><br>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="(spec, index) in assignment.specs" :key="index">{{spec}}</li>
                    </ul>
                </p>
                <a href="#" class="btn btn-primary">Submit</a>
            </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Assignments",
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

<style></style>
