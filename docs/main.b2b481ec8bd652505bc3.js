/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ todoList)
});

;// CONCATENATED MODULE: ./src/classes/todo.class.js
class Todo{static crearTodo({id:a,tarea:b,completado:c,creado:d}){const e=new Todo(b);return e.id=a,e.completado=c,e.creado=d,e}constructor(a){this.tarea=a,this.id=new Date().getTime(),this.completado=!1,this.creado=new Date}}
;// CONCATENATED MODULE: ./src/classes/todo-list.class.js
class TodoList{constructor(){//this.todos =[];
this.cargarLocalStorage()}nuevoTodo(a){this.todos.push(a),this.guardarLocalStorage()}eliminar(a){this.todos=this.todos.filter(b=>b.id!=a),this.guardarLocalStorage()}marcarCompletado(a){for(const b of this.todos)if(b.id==a){b.completado=!b.completado,this.guardarLocalStorage();break}}eliminarCompletados(){this.todos=this.todos.filter(a=>!a.completado)}guardarLocalStorage(){localStorage.setItem("todo",JSON.stringify(this.todos))}cargarLocalStorage(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],console.log(this.todos),this.todos=this.todos.map(a=>Todo.crearTodo(a))}}
;// CONCATENATED MODULE: ./src/js/componentes.js
const divTodoList=document.querySelector(".todo-list"),txtInput=document.querySelector(".new-todo"),btnBorrar=document.querySelector(".clear-completed"),ulFilter=document.querySelector(".filters"),anchorFilter=document.querySelectorAll(".filtro");const crearTodoHtml=a=>{const b=`
    <li class="${a.completado?"completed":""}" data-id="${a.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${a.completado?"checked":""}>
							<label>${a.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
	</li>
    `,c=document.createElement("div");return c.innerHTML=b,divTodoList.append(c.firstElementChild),c.firstElementChild};txtInput.addEventListener("keyup",a=>{if(13===a.keyCode&&0<txtInput.value.length){console.log(txtInput.value);const a=new Todo(txtInput.value);todoList.nuevoTodo(a),crearTodoHtml(a),txtInput.value=""}}),divTodoList.addEventListener("click",a=>{const b=a.target.localName,c=a.target.parentElement.parentElement,d=c.getAttribute("data-id");b.includes("input")?(todoList.marcarCompletado(d),c.classList.toggle("completed")):b.includes("button")&&(todoList.eliminar(d),divTodoList.removeChild(c))}),btnBorrar.addEventListener("click",()=>{todoList.eliminarCompletados();for(let a=divTodoList.children.length-1;0<=a;a--){const b=divTodoList.children[a];console.log(b),b.classList.contains("completed")&&divTodoList.removeChild(b)}}),ulFilter.addEventListener("click",a=>{const b=a.target.text;if(b){anchorFilter.forEach(a=>a.classList.remove("selected")),a.target.classList.add("selected");for(const a of divTodoList.children){console.log(a),a.classList.remove("hidden");const c=a.classList.contains("completed");"Pendientes"===b?c&&a.classList.add("hidden"):"Completados"===b?c||a.classList.add("hidden"):void 0}}});
;// CONCATENATED MODULE: ./src/index.js
const todoList=new TodoList;todoList.todos.forEach(crearTodoHtml);
/******/ })()
;