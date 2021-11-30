<template>
  <!-- Card with no padding with multiple content containers nested inside of it -->
  <div class="mw-full" :id="assignment.id">
    <!-- w-600 = width: 60rem (600px), mw-full = max-width: 100% -->
    <div class="card p-0">
      <!-- p-0 = padding: 0 -->
      <img src="" class="img-fluid rounded-top" alt="" />
      <!-- rounded-top = rounded corners on the top -->
      <!-- First content container nested inside card -->
      <!-- Heading section below -->
      <!-- <div class="content">
        <h2 class="content-title">Assignment {{ assignment.id }}</h2>
        <div>
          <span class="text-muted">
            <i class="fa fa-clock-o mr-5" aria-hidden="true"></i
            >{{ assignment.timestamp }}
          </span>
        </div>
      </div>
      <hr /> -->
      <!-- Second content container nested inside card (comments) -->
      <div class="content">
        <div v-html="assignmentDescription"></div>
        <div class="text-center mt-20">
          <!-- text-center = text-align: center, mt-20 = margin-top: 2rem (20px) -->
          <a class="btn btn-sm" :href="submitLink" target="_blank">
            Submit Assignment {{ assignment.id }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
const renderer = {
  code(code) {
    return `<div v-highlight>
          <pre class="language-clike">
                <code class="language-clike">
${code}
                </code>
            </pre>
        </div>`;
  },
  table(header, body) {
    return `
    <table class="table">
      <thead>${header}</thead>
      <body>${body}</body>
    </table>
    `;
  },
};

marked.use({ renderer });
export default {
  name: "AssignmentsCard",
  props: {
    assignment: Object,
  },
  computed: {
    assignmentDescription() {
      return marked.parse(this.assignment.text);
    },
    submitLink() {
      return `https://github.com/IT-Club-Pulchowk/Advance-C-Workshop/tree/main/Day${this.assignment.id}`;
    },
  },
};
</script>

<style></style>
