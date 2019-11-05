//Business Logic for To Do List------
function ToDo() {
  this.tasks = [],
  this.currentId = 0

}

ToDo.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

ToDo.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ToDo.prototype.deleteTask = function(id) {
  for (var i=0; i<this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id){
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}


//Business Logic for Tasks---------
function Tasks (chore) {
  this.chore = chore;
}
Tasks.prototype.choreList = function() {
  return this.chore;
}


// User Logic-----------

$(document).ready(function(){
  $("#toDoList").submit(function(event){
    event.preventDefault();
    console.log(chore.val());
    $("#output").prepend(chore.val());
  })
});
