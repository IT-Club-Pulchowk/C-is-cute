<template>
  <!-- First comes the modal -->
  <div class="modal" id="modal-2" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <a href="#" class="btn close" role="button" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </a>
        <h5 class="modal-title">Register for the workshop</h5>
        <form
          action="https://send.pageclip.co/8FK0jzAfhqmOC9uuqHwR8zrAkCp21KEW/adv-c"
          method="post"
          class="pageclip-form"
        >
          <div class="form-group">
            <label for="name" class="required">Full Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="Ben Dover"
              required="required"
            />
          </div>
          <div class="form-group">
            <label for="email" class="required">Campus Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="069BCT036.ben@pcampus.edu.np"
              required="required"
            />
          </div>
          <div class="form-group">
            <select
              class="form-control"
              id="attended-beginner"
              required="required"
            >
              <option value="" selected="selected" disabled="disabled"
                >Did you attend the beginner's workshop?</option
              >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <button
            type="submit"
            class="pageclip-form__submit btn btn-primary btn-block"
          >
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- Page wrapper -->
  <div class="page-wrapper"></div>

  <div class="container">
    <h2># Advance C Workshop</h2>
    <hr />
    <br />
    Advanced C Workshop is sequeal to the previous season of C workshop for
    begineers. In this season, we shall learn about more advanced concepts and
    techniques that is useful for performance programming. While the workshop
    itself uses C programming language to demonstrate it's concepts, the large
    number of concepts that shall be shown in the workshop will be language
    agnostic. People might have the idea of this being low level programming,
    while we go deep into how each programming technique works in the hardware,
    all the concepts shown are useful for both high level and low level
    programming.<br /><br />
    <h4>## Objectives of the workshop:</h4>
    <li>
      To teach programming concepts and techniques that are either not taught or
      not taught properly in college and hard to learn from the internet.
    </li>
    <li>
      To encourage juniors to conduct more useful programs via the Pulchowk IT
      Club benifiting everyone in the club and the college.
    </li>
    <br />
    <h4>## Scope of the project:</h4>
    <li>Stack and Pointer Lifetime</li>
    <li>Process Memory</li>
    <li>Segmentation</li>
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
    <li>Multiprocessor, Threads, Thread</li>
    <li>Pool, and Context Switching</li>
    <li>Allocators and Scratchpad</li>
    <li>Volatile and</li>
    <li>Atomic operations</li>
    <li>Memory barriers</li>
    <li>Mutex and Semaphores</li>
    Click here to download the full scope of the workshop<br /><br />
    <h4>## Schedule:</h4>
    The time mentioned are exact, thus so as to not delay the start of the
    program, all the participants are expected to arrive at the workshop at
    least 5 minutes earlier. The details and results of the assignment will be
    posted during the workshop day [links to assignments page] You can ask
    further questions and queries about the workshop and during the workshop in
    our official discord server [links below button] [Registration form button]
    [Discord server link]
    <a href="#modal-2" class="btn btn-primary" role="button">Register Now</a>
  </div>
</template>
<script>
export default {};
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
}
</style>
