<template>
  <div class="grid grid-cols-2 gap-5 mx-10 my-10">
    <!-- <div class="flex flex-col items-start mx-5 my-5"> -->
    <div>
      <div>
        <h1 class="text-black mb-3 text-4xl font-semibold">Kanban Boards</h1>
      </div>
      <div>
        <button
          @click="dialog = true"
          class="bg-teal-500 text-white px-10 py-3 rounded-lg mb-4 mx-7"
        >
          new
        </button>
      </div>
      <!-- สร้างกล่อง column -->
      <h3 class="flex items-center w-full">
        <span class="flex-grow bg-gray-200 rounded h-0.5"></span>
      </h3>
      <div>
        <button
          class="relative flex flex-col my-2 px-3 bg-white shadow-sm border border-black rounded-lg w-60 mx-7"
          v-for="(board, index) in boards"
          :key="index"
        >
          <div class="p-4">
            <h5 class="text-black text-xl font-semibold mb-[5px]">
              {{ board.name }}
            </h5>
            <button
              @click="where(index)"
              class="bg-green-500 text-white px-2 py-1 rounded-lg text-l mx-[1px]"
            >
              show
            </button>
            <button
              @click="deletee(index)"
              class="bg-red-500 text-white px-2 py-1 rounded-lg text-l mx-[1px] mb-1"
            >
              delete
            </button>
            <div>
              <input
                type="text"
                v-model="newname"
                class="w-full p-2 mb-2 border border-gray-300 rounded-md"
                placeholder="Enter name"
              />
            </div>
            <button
              @click="renamE(index)"
              class="bg-gray-500 text-white px-4 py-1 rounded-lg text-l mx-[1px]"
            >
              rename
            </button>
          </div>
        </button>
      </div>
      <!-- Make Board -->
      <div
        v-if="dialog"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div class="bg-white rounded-lg shadow-lg w-96 p-6">
          <div class="text-center mb-4">
            <h2 class="text-xl font-semibold">Create New Kanban Board</h2>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div>
            <label class="block mb-2">Kanban's Name</label>
            <input
              type="text"
              v-model="board"
              class="w-full p-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter board name"
            />
            <!-- Rename Part -->
            <label class="block mb-2">Kanban's Column</label>
            <input
              type="text"
              v-model="column"
              class="w-full p-2 mb-4 border border-gray-300 rounded-md"
              placeholder="Enter column name"
            />
          </div>
          <div class="flex justify-between mt-4">
            <button
              @click="dialog = false"
              class="bg-gray-500 text-white px-12 py-3 rounded-lg"
            >
              Close
            </button>
            <button
              @click="submit"
              class="bg-green-500 text-white px-12 py-3 rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ส่วนแบ่งหน้า -->
    <!-- แสดงผล Kanban Board -->
    <div class="flex justify-center min-h-screen">
      <div v-for="(newboard, index) in newboards" :key="index">
        <h1 class="text-black text-xl font-light mb-[10px]">
          Show Kanban Board
        </h1>
        <h3
          class="flex mb-[10px] text-black text-2xl font-semibold justify-center"
        >
          {{ newboard.name }}
        </h3>
        <!-- เพิ่มลด column -->
        <button
          @click="count++"
          class="bg-green-300 text-black px-2 py-1 rounded-lg text-l"
        >
          +
        </button>
        <h1 class="text-black px-2 py-1 rounded-lg text-l">
          column : {{ count }}
        </h1>
        <button
          @click="count--"
          class="bg-red-300 text-black px-2 py-1 rounded-lg text-l"
        >
          -
        </button>
        <!-- วนสร้าง column -->
        <div v-for="index in count" :key="index">
          <div
            class="w-[200px] h-[300px] rounded overflow-hidden bg-red-200 my-5 justify-start"
          >
            <div class="px-6 py-3">
              <div class="flex font-reg text-xl mb-[1px] justify-center">
                {{ newboard.column }}
              </div>
              <hr
                class="h-px my-[10px] bg-gray-800 border-0 dark:bg-gray-700"
              />
              <p class="flex text-navy text-base justify-center">
                emtry task
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopAlert",
  data() {
    return {
      kanban_visible: false,
      dialog: false,
      boards: [],
      newboards: [],
      num: 19,
      count: 1,
      rename: false,
      posi_re: -1,
    };
  },
  methods: {
    submit() {
      console.log("Board Name:", this.board);
      console.log("Column Name:", this.column);
      this.boards.push({ name: this.board, column: this.column });
      console.log(this.boards);
      this.board = "";
      this.column = "";
      this.dialog = false;
    },
    deletee(index) {
      this.boards.splice(index, 1);
    },
    where(index) {
      this.num = index;
      console.log(this.num);
      // this.newboards = this.boards[this.num]
      this.newboards = [
        {
          name: this.boards[this.num].name,
          column: this.boards[this.num].column,
        },
      ];
    },
    renamE(index) {
      this.boards[index].name = this.newname;
      this.newname = "";
    },
  },
};
</script>

<style scoped>
/* Tailwind classes are already applied in the template */
</style>
