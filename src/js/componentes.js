

import { Todo} from "../classes/index";
import { todoList } from "../index";

const  divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');

const ulFilter = document.querySelector('.filters');
const anchorFilter = document.querySelectorAll('.filtro');



export const crearTodoHtml = (todo)=>{
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado)? 'checked':''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
	</li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;

}


txtInput.addEventListener('keyup',(event)=>{
    

    if(event.keyCode ===13 && txtInput.value.length > 0){
        console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value='';
    }
});


divTodoList.addEventListener('click',(event)=>{
  

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }else if(nombreElemento.includes('button')){
        todoList.eliminar(todoId);
        divTodoList.removeChild(todoElemento);
    }


});

btnBorrar.addEventListener('click',(event)=>{
    todoList.eliminarCompletados();
    for( let i = divTodoList.children.length-1;i>=0;i--){
        const elemento = divTodoList.children[i];
        console.log(elemento);
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});


ulFilter.addEventListener('click',(event)=>{
    const filterTarget = event.target.text;
    if(!filterTarget){return;}


    anchorFilter.forEach( element => element.classList.remove('selected'));
    event.target.classList.add('selected');

    for(const element of divTodoList.children){
        console.log(element);

        element.classList.remove('hidden');
        const completado = element.classList.contains('completed');

        switch(filterTarget){

            case 'Pendientes':
                if(completado){element.classList.add('hidden');}
            break;

            case 'Completados':
                if(!completado){element.classList.add('hidden');}
            break;


        }


    }
});