import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8000/todos",
});

function addTodo(description) {
    return http
        .post("/", description)
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}

function editTodo(description, id) {
    return http
        .put(`/${id}`, description)
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        })
}

function deleteTodo(id) {
    return http
        .delete(`/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            throw error;
        });
}

const todoService = { addTodo: addTodo, editTodo: editTodo, deleteTodo: deleteTodo };

export default todoService;
