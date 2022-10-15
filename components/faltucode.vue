<!-- <div class="drag" v-for="(el, index) in task" :key="index">
      <v-card>
        <div class="tName">
          <p id="tname">Task Name: {{ el.taskName }}</p>
        </div>

        <template>
          <div class="text-center">
            <v-dialog v-model="dialog1" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on">mdi-eye</v-icon>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  More Details
                </v-card-title>

                <v-card-text>

                  <div  v-for="(s, index) in stage" :key="index">
                    {{ s }}
                  </div>

                  <template>
                    <div>
                      <v-data-table
                        :headers="headers1"
                        :items="el.stageInfo"
                        class="elevation-1"
                      ></v-data-table>
                    </div>
                  </template>
                  <template>
                    <div>
                      <v-data-table
                        :headers="headers2"
                        :items="stage"
                        class="elevation-1"
                      ></v-data-table>
                    </div>
                  </template>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="closeTask()">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>

        <template>
          <div class="text-center">
            <v-dialog v-model="dialog2" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on">mdi-pencil</v-icon>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Edit Task
                </v-card-title>

                <v-card-text> </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="editTask()"> Edit </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </template>

        <template>
          <div class="expansion">
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Details</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p>Project Name: {{ el.assignProject }}</p>
                  <p>Description: {{ el.taskDescription }}</p>
                  <p>Assign To: {{ el.assignTask }}</p>
                  <p>Level: {{ el.importancy }}</p>
                  <p>Task Create Date: {{ el.startTime }}</p>
                  <p>Deadline: {{ el.endTime }}</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </template>

        <v-icon @click="deleteTask(index)">mdi-delete</v-icon>
      </v-card>
    </div> -->