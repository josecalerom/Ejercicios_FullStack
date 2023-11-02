# Array Methods Advanced

Create a function called `uncompletedNotes` that returns only not completed todos.

**Suggestion**

Use the forEach and filter arrays methods.


**Another possible solution: José**

function uncompletedNotes(notes){
    const resultado = notes.map((note) => {
        const uncompletedTodos = note.todos.filter((todo) => !todo.done)
        console.log(uncompletedTodos);
    })
    return resultado;
}
