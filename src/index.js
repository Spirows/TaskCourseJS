
import './styles.css';

import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);


//data persistente _> solo permitido en web
//Local storage y sesion storage

//Sesion borra todo al cerrar el navegador, a diferencia
//del local que aguanta un reinicio

/**
 * localStorage.setItem('value',10);
sessionStorage.setItem('value',10);

setTimeout(()=>{
    localStorage.removeItem('value');
},1500);
 */