<template>
  <!-- Card with no padding with multiple content containers nested inside of it -->
  <div class="w-600 mw-full" :id="assignment.id">
    <!-- w-600 = width: 60rem (600px), mw-full = max-width: 100% -->
    <div class="card p-0">
      <!-- p-0 = padding: 0 -->
      <img src="" class="img-fluid rounded-top" alt="" />
      <!-- rounded-top = rounded corners on the top -->
      <!-- First content container nested inside card -->
      <div class="content">
        <h2 class="content-title">
          {{ assignment.id }}. {{ assignment.title }}
        </h2>
        <div>
          <span class="text-muted">
            <i class="fa fa-clock-o mr-5" aria-hidden="true"></i
            >{{ assignment.timestamp }}
            <!-- mr-5 = margin-right: 0.5rem (5px) -->
          </span>
        </div>
      </div>
      <hr />
      <!-- Second content container nested inside card (comments) -->
      <div class="content">
        <h2 class="content-title">
          Description
        </h2>
        <div v-html="assignmentDescription"></div>
        <div v-highlight>
          <pre class="language-clike">
                <code>
{{assignment.code}}
                </code>
            </pre>
        </div>
        <div class="text-center mt-20">
          <!-- text-center = text-align: center, mt-20 = margin-top: 2rem (20px) -->
          <a class="btn btn-sm" :href="assignment.link" target="_blank">
            Submit Assignment {{ assignment.id }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
export default {
  name: "AssignmentsCard",
  props: {
    assignment: Object,
  },
  computed: {
    assignmentDescription() {
      return marked.parse(this.assignment.description);
    },
  },
};
</script>

<style></style>
