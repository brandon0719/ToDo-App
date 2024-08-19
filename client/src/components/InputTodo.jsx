import React, { Fragment, useState } from "react";
import todoService from "../services/todoService";

const InputTodo = () => {
    const [description, setDescription] = useState("");
    console.log(description);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            /*
            await fetch("http://localhost:8000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            this is what axios does */ 
            const response = todoService.addTodo(body);
            window.location = "/";
            console.log(response)
        } catch (error) {
            console.error(error.message);
        }
    };
    return (
        <Fragment>
            <h1 className="text-center my-5">Input Todo</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    placeholder="add todo"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
