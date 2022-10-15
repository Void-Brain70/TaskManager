<template>
  <v-app>
    <div>
      <NavBar></NavBar>
    </div>

    <!-- dialog Start -->
    <div class="dialog">
      <!-- Create Project Dialog Start -->
      <div class="card">
        <template>
          <v-card-actions>
            <v-btn @click="dialog1 = true"
              >Create Project
              <v-icon right>mdi-plus-thick</v-icon>
            </v-btn>
          </v-card-actions>
        </template>
      </div>

      <template>
        <div class="text-center">
          <v-dialog v-model="dialog1" width="500">
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Create Project
              </v-card-title>

              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="projectName"
                      label="Project Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="projectDescription"
                      label="Project Description"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="addProject()" color="primary" text>
                  Create
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
      <!-- Create Project Dialog End -->

      <template>
        <v-container fluid>
          <v-row align="center">
            <v-col cols="12" sm="4" md="12">
              <v-autocomplete
                v-model="findbyProject"
                :items="findProject"
                item-text="projectName"
                label="Search by project"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid>
          <v-row align="center">
            <v-col cols="12" sm="4" md="12">
              <v-autocomplete
                v-model="findbyTask"
                :items="findTask"
                item-text="taskName"
                label="Search by task"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <!-- create task dialog start -->
      <div class="card">
        <template>
          <v-card-actions>
            <v-btn @click="dialog2 = true"
              >Create Task
              <v-icon right>mdi-plus-thick</v-icon>
            </v-btn>
          </v-card-actions>
        </template>
      </div>

      <template>
        <div class="text-center">
          <v-dialog v-model="dialog2" width="500">
            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Create Task
              </v-card-title>

              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="6" md="12">
                    <v-select
                      v-model="assignProject"
                      :items="findProject"
                      item-text="projectName"
                      label="Project Name"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="taskName"
                      label="Task Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-text-field
                      v-model="taskDescription"
                      label="Task Description"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-select
                      v-model="assignTask"
                      :items="users"
                      item-text="name"
                      label="Assign To"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-select
                      v-model="importancy"
                      :items="level"
                      label="Importancy"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <v-menu
                      v-model="menu1"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="computedDateFormatted"
                          persistent-hint
                          prepend-icon="mdi-calendar"
                          label="Deadline"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        no-title
                        @input="menu1 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="addTask()" color="primary" text> Create </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
      <!-- create task dialog end -->
    </div>
    <!-- dialog end -->

    <!-- show info start -->
    <div class="show">
      <!-- project details show start -->
      <div class="showProject">
        <div
          v-for="(el, index) in findProject"
          :key="index"
          class="projectItem"
        >
          <v-card>
            <div class="projectElement">
              <p>Project Name: {{ el.projectName }}</p>
              <p>Procet Create Date: {{ el.projectDeadline }}</p>
            </div>
          </v-card>
        </div>
        <div>
          <h3>Search Element</h3>
          <div v-for="(el, index) in checkProject" :key="index">
            <v-card>
              <div>
                <p>Project Name: {{ el.projectName }}</p>
                <p>Procet Create Date: {{ el.projectDeadline }}</p>
              </div>
            </v-card>
          </div>
          <div v-for="(el, index) in checkTask" :key="index">
            <v-card>
              <div>
                <p>Task Name: {{ el.taskName }}</p>
                <p>Assign To: {{ el.assignTask }}</p>
                <p>Level: {{ el.importancy }}</p>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </div>
    <div class="drag">
      <v-row>
        <v-col v-for="stage in stages" :key="stage.id" cols="12" md="3">
          <ShowTask :stage="stage"></ShowTask>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import draggable from 'vuedraggable'
import NavBar from '../components/NavBar.vue'
import ShowTask from '../components/ShowTask.vue'
export default {
  name: 'IndexPage',
  components: { NavBar, ShowTask, draggable },
  data(vm) {
    return {
      stages: [
        { id: 1, name: 'task' },
        { id: 2, name: 'progress' },
        { id: 3, name: 'test' },
        { id: 4, name: 'done' },
      ],
      findTask: [],
      dialog1: false,
      dialog2: false,

      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateFormatted: vm.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10)
      ),
      menu1: false,
      projectName: '',
      projectDescription: '',
      projectDeadline: '',
      projectId: 0,
      level: ['High', 'Medium', 'Low'],
      taskId: 0,
      taskName: '',
      taskDescription: '',
      assignTask: '',
      startTime: this.date,
      endTime: this.date,
      importancy: '',
      assignProject: '',
      removeAddedList: [],
      task: [],
      progress: [],
      test: [],
      done: [],
      changes: [],
      switchInfo: [],
      findbyProject: '',
      findbyTask: '',
      findbyDeveloper: '',
      checkProject: [],
      checkTask: [],
      checkDev: [],
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
    findProject() {
      return this.$store.state.project
    },
    users() {
      return this.$store.state.users
    },
    user() {
      return this.$store.state.user
    },
  },
  mounted() {
    this.findTask = [...this.$store.state.task]
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    },
    changes(val) {
      if (this.changes.length === 2) {
        this.switchInfo.push(
          `Stage ${this.changes[1]} to Stage ${this.changes[0]}`
        )
        this.changes = []
      }
    },
    findbyProject(val) {
      this.checkProject = this.findProject.filter((el) => {
        return el.projectName == this.findbyProject
      })
      console.log(this.check)
    },
    findbyTask(val) {
      this.checkTask = this.findTask.filter((el) => {
        return el.taskName == this.findbyTask
      })
      console.log(this.checkTask)
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    addProject() {
      let projectInfo = {
        projectName: this.projectName,
        projectDescription: this.projectDescription,
        projectDeadline: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substr(0, 10),
        projectId: this.projectId++,
      }
      this.$store.commit('addProject', projectInfo)
      ;(this.projectName = ''),
        (this.projectDeadline = ''),
        (this.projectDescription = ''),
        (this.projectId = ''),
        console.log(projectInfo)
    },
    addTask() {
      let d = new Date()

      let taskInfo = {
        taskName: this.taskName,
        taskDescription: this.taskDescription,
        assignTask: this.assignTask,
        startTime: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
        endTime: this.date,
        importancy: this.importancy,
        assignProject: this.assignProject,
        stage: 'task',
        taskId: d.getTime(),
        stageInfo: [],
        timeInfo: [],
      }
      console.log(taskInfo)
      this.$store.commit('addTask', taskInfo)
      this.taskName = ''
      this.taskDescription = ''
      this.taskId = ''
      this.startTime = ''
      this.endTime = ''
      this.importancy = ''
      this.dialog2 = false
    },
    // log(event, id) {
    //   this.changes.push(id)
    //   if (event.added) {
    //     if (id === 1) {
    //       let details = this.totalTask.find(
    //         (el) => el.taskId === event.added.element.taskId
    //       )
    //       details.stageInfo.push({ stage: 'Task', Developer: details.assignTask  })
    //       // console.log(details)
    //     }

    //     if (id === 2) {
    //       let details = this.progress.find(
    //         (el) => el.taskId === event.added.element.taskId
    //       )
    //       details.stageInfo.push({ stage: 'Inprogress',Developer: details.assignTask })
    //       // console.log(details)
    //     }

    //     if (id === 3) {
    //       let details = this.test.find(
    //         (el) => el.taskId === event.added.element.taskId
    //       )
    //       details.stageInfo.push({ stage: 'Testing',Developer: details.assignTask })
    //       // console.log(details)
    //     }

    //     if (id === 4) {
    //       let details = this.done.find(
    //         (el) => el.taskId === event.added.element.taskId
    //       )
    //       details.stageInfo.push({ stage: 'Done',Developer: details.assignTask })
    //       // console.log(details)
    //     }
    //   }
    // },
  },
}
</script>
<style scoped>
.card {
  height: 100px;
  width: 200px;
  padding: 5px;
  margin-left: 50px;
  display: flex;
}
.showProject {
  margin: 0px 10px;
  border-radius: 10px;
}
.showTask {
  margin: 0px 10px;
  height: 400px;
  width: 500px;
  border-radius: 10px;
}
.projectItem {
  margin: 5px 20px;
  background-color: skyblue;
  border-radius: 5px;
}
.taskItem {
  margin: 5px 20px;
  background-color: skyblue;
  border-radius: 5px;
}
.dialog {
  display: flex;
  justify-content: space-between;
}
.show {
  display: flex;
  justify-content: space-between;
}
.drag {
  margin: 0px 10px;
}
h3 {
  text-align: center;
}
.projectElement {
  margin: 10px 10px;
}
.show {
  display: flex;
}
</style>
