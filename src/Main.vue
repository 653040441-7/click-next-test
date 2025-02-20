<template>
  <div class="flex items-center justify-center h-screen">
    <div>
      <h1 class="text-black mb-4 text-4xl font-bold mx-4">Stay organized,</h1>
      <h1 class="text-black mb-6 text-4xl font-bold">See the big picture</h1>
      <p class="text-black mb-3 text-l font-regular mx-10">
        start your first kanban board
      </p>
      <RouterLink to="//board">Go to About</RouterLink>
      <!-- Button part -->
      <div>
        <button
          @click="signup = true"
          class="bg-red-400 text-white text-2xl px-7 py-2 rounded-full mx-20"
        >
          sign up
        </button>
      </div>
      <div class="flex items-center">
        <div class="border-t border-1 border-gray-400 flex-grow w-[10px]"></div>
        <div class="px-3 text-gray-800 font-light text-l">OR</div>
        <div class="border-t border-1 border-gray-400 flex-grow w-[2px]"></div>
      </div>
      <div>
        <button
          @click="login = true"
          class="bg-gray-400 mx-[300px]  text-black text-2xl px-10 py-2 rounded-full mb-5 "
        >
          log in
        </button>
      </div>
      <p class="text-black mb-3 text-xl font-regular mx-[500px]">
        please open consloe to know is it log in success ?
      </p>
      <p class="flex text-black mb-4 text-l font-reg justify-center">If you log in success you can go see file name Board.vue sorry because I can't link it with this file T-T</p>

      <!-- Dialog Resgister Part -->
      <div
        v-if="signup"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div class="bg-white rounded-lg shadow-lg w-96 p-6">
          <div class="text-center mb-4">
            <h2 class="text-xl font-semibold">Sign up</h2>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div>
            <label class="block mb-2">Name</label>
            <input
              type="text"
              v-model="name_reg"
              class="w-full p-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
            <label class="block mb-2">Password</label>
            <input
              type="text"
              v-model="passw_reg"
              class="w-full p-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <!-- Confirm Resgister Part -->
          <div class="flex justify-between mt-4">
            <button
              @click="signup = false"
              class="bg-gray-500 text-white px-12 py-3 rounded-lg"
            >
              Cancel
            </button>
            <button
              @click="signupS"
              class="bg-green-500 text-white px-12 py-3 rounded-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <!-- Dialog Login Part -->
      <div
        v-if="login"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div class="bg-white rounded-lg shadow-lg w-96 p-6">
          <div class="text-center mb-4">
            <h2 class="text-xl font-semibold">Log In</h2>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div>
            <label class="block mb-2">Name</label>
            <input
              type="text"
              v-model="name_log"
              class="w-full p-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
            <label class="block mb-2">Password</label>
            <input
              type="text"
              v-model="passw_log"
              class="w-full p-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>

          <!-- Confirm Login Part -->
          <div class="flex justify-between mt-4">
            <button
              @click="login = false"
              class="bg-gray-500 text-white px-12 py-3 rounded-lg"
            >
              Cancel
            </button>
            <button
              @click="loginS"
              class="bg-green-500 text-white px-12 py-3 rounded-lg"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      signup: false,
      signupData: [],
      login: false,
      loginData: [],
    };
  },
  methods: {
    signupS() {
      this.signupData.push({ name: this.name_reg, password: this.passw_reg });
      console.log(this.signupData);
      this.name_reg = "";
      this.passw_reg = "";
      this.signup = false;
    },
    loginS() {
      this.loginData = [{ name: this.name_log, password: this.passw_log }];
      console.log(this.signupData);
      let where = this.signupData.findIndex(
        (board) =>
          board.name === this.loginData[0].name &&
          board.password === this.loginData[0].password
      );
      console.log(where);
      if (where >= 0) {
        console.log("success");
        this.login=false; 
      } else {
        console.log("failed");
        this.login=false
      }
    },
  },
};
</script>

<style scoped>
/* Tailwind classes are already applied in the template */
</style>
