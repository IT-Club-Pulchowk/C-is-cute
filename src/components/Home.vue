<template>
  <div class="container">
    <h2># Advanced C Workshop</h2>
    <hr />
    <br />
    Advanced C Workshop is a sequel to the previous session of C workshop
    conducted by IT Club. The aim of this workshop is to engage in more advanced
    concepts and techniques useful for performance programming. The workshop
    uses C programming language (C11) to demonstrate the concepts, but the
    intent is to be a presentation of topics that are language agnostic. While
    the workshop looks seemingly geared towards low level programming, the
    concepts presented here carry over and be significant in high level
    programming as well. <br /><br />
    <strong>Venue: Pulchowk Campus<br />Time: 7:30 am</strong> <br /><br />
    <h4>## Objectives of the workshop:</h4>
    <li>
      To teach programming concepts and techniques that are either glossed over
      or completely skipped in seemingly effective college syllabus and are a
      challenge to self-study from the internet.
      <span v-show="false"
        >[the teachers probably don't know and the course itself focuses on a
        lot of theory instead of programming, so it’s rather bad]</span
      >
    </li>
    <li>
      To increase the interest in juniors to take up a greater challenge for
      their projects which are not only refined but also efficient.
    </li>
    <div class="text-center">
      <a
        href="#register"
        class="btn btn-primary register-button disabled"
        role="button"
        style="font-family:'Lucida Console', monospace;"
        disabled="disabled"
        >Registrations Closed</a
      >
    </div>
    <br />
    <h4>## Scope of the project:</h4>
    <li>Stack and Pointer Lifetime</li>
    <li>Process Memory Segmentation</li>
    <li>Endianess</li>
    <li>Alignment, Padding and Heap Allocation</li>
    <li>Structure reordering</li>
    <li>
      Data structure and algorithms (Array, Hash Table, Linked List, Binary
      tree, Merge sort, Time and Space Complexity)
    </li>
    <li>Multiprocessing System</li>
    <li>Virtual Memory</li>
    <li>Translation Lookaside Buffer</li>
    <li>Cache (Instruction and Data)</li>
    <li>SOA vs AOS</li>
    <li>Multiprocessor, Threads, Thread Pool, and Context Switching</li>
    <li>Allocators and Scratchpad</li>
    <li>Volatile and Atomic operations</li>
    <li>Memory barriers</li>
    <li>Mutex and Semaphores</li>
    <em>
      <a
        href="https://cdn.discordapp.com/attachments/851114438869123114/910866875985039420/C-Advanced-Syllabus.pdf"
        >Click here</a
      >
      to download the full scope of the workshop.<br /><br />
    </em>
    <h4>## Schedule:</h4>

    <!-- Schedule Table Start -->

    <table class="table">
      <thead>
        <tr>
          <th class="text-center">Lecture</th>
          <th class="text-center">Name</th>
          <th class="text-center">Lecturer</th>
          <th class="text-center">Date</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th class="text-center">0</th>
          <td class="text-center name-cell">
            Alignment, Padding and Heap Allocation
          </td>
          <td class="text-center lecturer-cell">Pramish Aryal & Sulav Deo</td>
          <td class="text-center">2078-8-10</td>
        </tr>
        <tr>
          <th class="text-center">1</th>
          <td class="text-center name-cell">Data Structures and Algorithms</td>
          <td class="text-center lecturer-cell">
            Srijan Poudel & Rujal Acharya
          </td>
          <td class="text-center">2078-8-13</td>
        </tr>
        <tr>
          <th class="text-center">2</th>
          <td class="text-center name-cell">
            Overview of Computer Architecture
          </td>
          <td class="text-center lecturer-cell">
            Samip Poudel & Pranjal Pokharel
          </td>
          <td class="text-center">2078-8-18</td>
        </tr>
        <tr>
          <th class="text-center">3</th>
          <td class="text-center name-cell">
            Virtual Page Allocation, Allocators and Scratchpad
          </td>
          <td class="text-center lecturer-cell">
            Asim Maharjan & Madhav Aryal
          </td>
          <td class="text-center">2078-8-19</td>
        </tr>
        <tr>
          <th class="text-center">4</th>
          <td class="text-center name-cell">Multithreading I</td>
          <td class="text-center lecturer-cell">
            Tilak Chad & Ashish Bhattrai
          </td>
          <td class="text-center">2078-8-22</td>
        </tr>
        <tr>
          <th class="text-center">5</th>
          <td class="text-center name-cell">Multithreading II</td>
          <td class="text-center lecturer-cell">
            Bibek Panthi & Safal Thapaliya
          </td>
          <td class="text-center">2078-8-25</td>
        </tr>
        <tr>
          <th class="text-center">6</th>
          <td class="text-center name-cell">Neat C Techniques</td>
          <td class="text-center lecturer-cell">
            Aayush Acharya & Kanchan Poudel
          </td>
          <td class="text-center">2078-8-28</td>
        </tr>
      </tbody>
    </table>
    <!-- Schedule Table End -->

    <!-- Contact -->
    <h4>## Contact</h4>
    If you have any questions regarding the workshop, feel free to reach out to
    us on our
    <a href="https://discord.gg/dvV6RrjjmS">Discord server.</a> <br />
    We look forward to actively supporting projects this workshop may bring
    about and extend a helping hand if need be. Happy coding.
  </div>
</template>
<script>
export default {
  data() {
    return {
      formSubmission: null,
    };
  },
  mounted() {
    const form = document.querySelector(".pageclip-form");
    window.Pageclip.form(form, {
      onResponse: function(error, response) {
        if (error) {
          this.formSubmission = false;
        }
        if (response) {
          this.formSubmission = true;
          console.log(this.formSubmission);
        }
      },
      successTemplate: `<div class="alert alert-success" role="alert" style="opacity: 1">Thank you for registering!</div>`,
    });
  },
};
</script>

<style scoped>
@import url("http://fonts.cdnfonts.com/css/lucida-console");
.container h1,
.container h2,
.container h3,
.container h4 {
  font-family: "Lucida Console", sans-serif;
}
@media (min-width: 1200px) {
  .container {
    max-width: 970px;
  }
}

.lecturer-cell {
  max-width: 200px;
}
.name-cell {
  max-width: 300px;
}
strong {
  font-size: 1.4rem;
}
</style>
<style>
.container {
  padding: 0 20px 0 30px;
  margin-bottom: 30px;
  font-size: 18px;
}

.pageclip-form__success {
  background-color: var(--dm-modal-content-bg-color);
  opacity: 0.9;
}
</style>
