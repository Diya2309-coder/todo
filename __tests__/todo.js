/* eslint-disable no-undef */
const todoList = require('../todo');

const { all, markAsComplete, add } = todoList();

describe("todolist test suite", () => {
    beforeAll(() => {

        add(
            {
                title: "test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
    })

    test("should add new todo", () => {
        const todoItemCount = all.length;
        add(
            {
                title: "test todo",
                completed: false,
                dueDate: new Date().toLocaleDateString("en-CA")
            }
        );
        expect(all.length).toBe(todoItemCount+1);
    });

    test("should mark as complet", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
})