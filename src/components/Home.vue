<template>
  <!-- Registration form modal -->
  <div class="modal" id="register" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <a href="#" class="btn close" role="button" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </a>
        <h5 class="modal-title">Register for the workshop</h5>
        <!-- Form element start -->
        <div class="alert" role="alert" v-if="formSubmission">
          <h4 class="alert-heading">Default alert</h4>
          This is a default alert with some content and
          <a href="#" class="alert-link">a link</a>.
        </div>
        <form
          action="https://send.pageclip.co/hAf4RUcDPZO09Dy184yDBwPFVp9PkvoU"
          method="post"
          class="pageclip-form"
        >
          <!-- Full Name Input Start -->
          <div class="form-group">
            <label for="name" class="required">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              placeholder="Ben Dover"
              required="required"
            />
          </div>
          <!-- Full Name Input End -->

          <!-- Email Input Start -->
          <div class="form-group">
            <label for="email" class="required">Campus Email</label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              placeholder="069BCT036.ben@pcampus.edu.np"
              required="required"
            />
          </div>
          <!-- Email Input End -->

          <!-- Familarity with C Input Start -->
          <div class="form-group">
            <label class="required">Rate your familarity with C</label>
            <div class="custom-radio">
              <input
                type="radio"
                name="familarity-with-c"
                id="who-is-c"
                value="0"
                required="required"
              />
              <label for="who-is-c">Who is C?</label>
            </div>
            <div class="custom-radio">
              <input
                type="radio"
                name="familarity-with-c"
                id="i-have-worked-with-c"
                value="1"
                required="required"
              />
              <label for="i-have-worked-with-c"
                >I've worked with C before</label
              >
            </div>
            <div class="custom-radio">
              <input
                type="radio"
                name="familarity-with-c"
                id="i-have-made-a-project-with-c"
                value="2"
                required="required"
              />
              <label for="i-have-made-a-project-with-c"
                >I've made some projects with C</label
              >
            </div>
            <div class="custom-radio">
              <input
                type="radio"
                name="familarity-with-c"
                id="i-am-dennis-ritchie"
                value="3"
                required="required"
              />
              <label for="i-am-dennis-ritchie">I'm Dennis Ritchie!</label>
            </div>
          </div>
          <!-- Familarity with C Input End -->

          <!-- Beginner Workshop Input Start -->
          <div class="form-group">
            <div class="custom-checkbox">
              <input
                type="checkbox"
                id="attended-beginner-workshop"
                name="attended-beginner"
              />
              <label for="attended-beginner-workshop"
                >I've attended the beginner's workshop on C by IT Club (not
                required)
              </label>
            </div>
          </div>
          <!-- Beginner Workshop Input End -->

          <!-- Submit Button Start -->
          <button
            class="button pageclip-form__submit btn btn-primary btn-block"
            type="submit"
          >
            <span>Submit</span>
          </button>

          <!-- Submit Button End -->
        </form>

        <!-- Form End -->
      </div>
    </div>
  </div>

  <div class="container">
    <h2># Advance C Workshop</h2>
    <hr />
    <br />
    Advanced C Workshop is sequel to the previous session of C workshop for
    beginners. In this session we shall learn about more advanced concepts and
    techniques that is useful for performance programming. While the workshop
    itself uses C programming language (C11) to demonstrate its concepts, the
    large number of concepts that shall be shown in the workshop will be
    language agnostic. People might think that this program is about low-level
    programming. While we will go deep into how each programming technique works
    in the hardware, all the concepts shown are useful for both high level and
    low-level programming.<br /><br />
    <h4>## Objectives of the workshop:</h4>
    <li>
      To teach programming concepts and techniques that are either not taught at
      all or not taught properly in college and comparatively harder to learn
      from the internet.
      <span v-show="false"
        >[the teachers probably don't know and the course itself focuses on a
        lot of theory instead of programming, so it’s rather bad]</span
      >
    </li>
    <li>
      To encourage juniors to conduct more useful programs via the Pulchowk IT
      Club benefiting everyone in the club and the college.
    </li>
    <div class="text-center">
      <a href="#register" class="btn btn-primary" role="button">Register Now</a>
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
    us on our <a href="https://discord.gg/dvV6RrjjmS">Discord server.</a>
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
      successTemplate: `<div class="alert alert-success" role="alert">Thank you for registering!</div>`,
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
.container {
  padding: 0 20px 0 30px;
  margin-bottom: 30px;
  font-size: 18px;
}
.lecturer-cell {
  max-width: 200px;
}
.name-cell {
  max-width: 300px;
}
</style>
