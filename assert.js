let toggleTodoCompletedStatus = (todoItem) =>{
    todoItem.completed = !todoItem.completed;
    return todoItem;
};
 
let testToggleCompletion = () =>{
    let item={
        title: 'buy chocolate',
        completed: false,
    }
    item = toggleTodoCompletedStatus(item);
    // console.assert(item.completed === true, 'Todo item should be completed');
}
testToggleCompletion();