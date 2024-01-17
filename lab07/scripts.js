document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");    // อ้างอิงถึง <ul> ที่มี id="todo-list"
    const todoInput = document.getElementById("todo-input");  // อ้างอิงถึง <input> ที่มี id="todo-input"
    const addButton = document.getElementById("add-button");  // อ้างอิงถึง <button> ที่มี id="add-button"  
    // อาร์เรย์สำหรับเก็บรายการ Todo
    let todos = [];
    // เพิ่มรายการ Todo
    function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
    const todoItem = {
    
    text: todoText,
    completed: false,
    };
    todos.push(todoItem);
    renderTodoList();
    todoInput.value = "";
    }
    }

    // ลบรายการ Todo
    function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodoList();
    }

    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodoList();
    }

    // แสดงรายการ Todo บนหน้าเว็บ
function renderTodoList() {
    console.log(todos);
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
    const todoItem = todos[i];
    const listItem = document.createElement("li");
    listItem.textContent = todoItem.text;
    if (todoItem.completed) {
    listItem.classList.add("completed");
    }
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "ลบ";
    deleteButton.addEventListener("click", () => deleteTodo(i));
    const completeButton = document.createElement("button");
    completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
    completeButton.addEventListener("click", () => toggleComplete(i));
    listItem.appendChild(completeButton); // เพิ่ม completeButton เข้าไปใน listItem
    listItem.appendChild(deleteButton);  // เพิ่ม deleteButton เข้าไปใน listItem
    todoList.appendChild(listItem);   // เพิ่ม listItem เข้าไปใน todoList
    }
    }
    // การกดปุ่ ม "เพิ่ม"
    addButton.addEventListener("click", addTodo); // เพิ่ม event listener สำหรับการกดปุ่ม "เพิ่ม"
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {     // ตรวจสอบว่ากดปุ่ม Enter
    addTodo();          // เรียกใช้ฟังก์ชัน addTodo() เมื่อกดปุ่ม Enter
    }
    });
    
    // แสดงรายการ Todo คร้ังแรก
    renderTodoList(); // เรียกใช้ฟังก์ชัน renderTodoList() เพื่อแสดงรายการ Todo ครั้งแรก
    });