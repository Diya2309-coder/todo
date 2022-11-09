/* eslint-disable no-undef */
const db = require("../models");

// const { all, markAsComplete, add, overdue, dueToday, dueLater, today } =
//   todoList();

describe("todolist test suite", () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  test("should add new todo", async () => {
    const todoItemsCount = await db.Todo.count();
    await db.Todo.addTask({
      title: "Test todo",
      completed: false,
      dueDate: new Date(),
    });
    const newTodoItemsCount = await db.Todo.count();
    expect(newTodoItemsCount).toBe(todoItemsCount + 1);
  });
});
