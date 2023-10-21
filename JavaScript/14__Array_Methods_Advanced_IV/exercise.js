// OPTION 1: printing results in console

function uncompletedNotes(notes) {
  notes.forEach(el => {
    el.todos.forEach (tarea => {
      if (tarea.done === false) {
        console.log("In the id: " +el.id+ ", the todo id: " +tarea.id+ ", with the name: " +tarea.name+ " is not completed.")
      }
    })
  });
  return;
}

//OPTION 2: creating an array of uncompleted todos

// function uncompletedNotes(notes) {
//   let completeTodos = [];
//   for(note of notes){
//     note.todos.forEach(el => 
//         completeTodos.push(el));
//   }
//   let notCompletedTodos = completeTodos.filter(cond => cond.done === false);
//   return console.log(notCompletedTodos);
// };

const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

uncompletedNotes(notes);
