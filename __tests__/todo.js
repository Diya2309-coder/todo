/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater, today } =
  todoList();

describe("todolist test suite", () => {
  beforeAll(() => {
    add({
      title: "test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemCount + 1);
  });

  test("should mark as complet", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieval of overdue items", () => {
    let todo = overdue();
    expect(
      todo.every((items) => {
        return items.dueDate < today;
      })
    ).toBe(true);
  });

  test("retrieval of due today items", () => {
    let todo = dueToday();
    expect(
      todo.every((items) => {
        return items.dueDate === new Date().toLocaleDateString("en-CA");
      })
    ).toBe(true);
  });

  test("retrieval of due later items", () => {
    let todo = dueLater();
    expect(
      todo.every((items) => {
        return items.dueDate > today;
      })
    ).toBe(true);
  });
});
