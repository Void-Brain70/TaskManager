export const state  = () => ({
    users:[],
    user: {},
    project: [],
    task: [],
    editData: {},
})

export const mutations={
    setUser(state,data){
        state.user= data;    
    },
    logout(state){
        console.log('index');
        state.user= {};    
    },
    addSigndata(state,data){
        state.users.push(data);    
    },
    addProject(state,data){
        state.project.push(data)
    },
    addTask(state,data){
        state.task.push(data)
    },
    deleteTask(s,id){
        const targetedTask = s.task.find(t => t.id == id) 
        const index = s.task.indexOf(targetedTask);
        s.task.splice(index, 1)
    },
    setEditData(s,id){
        const targetedTask = s.task.find(t => t.taskId == id) 
        s.editData = targetedTask;
    },
    editTask(s,data){
        const targetedTask = s.task.find(t => t.taskId == data.taskId) 
        const index = s.task.indexOf(targetedTask);
        s.task[index] = data;
    },
    addTime(s,payload){
        const targetedTask = s.task.find(t => t.taskId == payload.id) 
        const index = s.task.indexOf(targetedTask);
        targetedTask.workTime_h = parseInt(payload.h);
        targetedTask.workTime_m = parseInt(payload.m);
        s.task[index] = targetedTask;
    },
    log(s, payload){
        const data = payload.data;
        data.lastStage = data.stage;
        data.stage = payload.stage;
    


    let d = new Date();
    //   let addedTodo = evt.added.element;
    //   let lastTime = addedTodo.updatedTime;
      let lastStage = data.lastStage;
      let lastWorkTime_hh = data.workTime_h ? data.workTime_h : 0;
      let lastWorkTime_mm = data.workTime_m ? data.workTime_m : 0;
      data.workTime_h = 0;
      data.workTime_m = 0;
      data.stageInfo.push({
        changeBy: payload.user,
        changeTime: d.toLocaleTimeString(),
        workTime_hh: lastWorkTime_hh,
        workTime_mm: lastWorkTime_mm,
        duration: lastWorkTime_hh + "h" + " " + lastWorkTime_mm + "m",
        fromStage: lastStage,
        toStage: payload.stage,
      })
      let totalHour = 0;
      let totalMin = 0;
      for(let ct of data.stageInfo){
           totalHour += parseInt(ct.workTime_hh);
           totalMin += parseInt(ct.workTime_mm);
      }

      data.totalWorkTime_hour = totalMin > 59 ? totalHour + Math.floor(totalMin/60): totalHour;
      data.totalWorkTime_min = totalMin > 59 ? totalMin % 60: totalMin;
        const targetedTask = s.task.find(t => t.taskId == data.taskId)
        const index = s.task.indexOf(targetedTask);
        s.task[index] = data;
    }
}