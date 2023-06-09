import { Button } from "@mui/material";
// import propTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import Navbar from "../navbar/navbar";
import TodoItem from "../Todo/todo";
import AddTodo from "../addTodo/addTodo";
import { useEffect, useState } from "react";
import axios from "axios";
import EditTodo from "../editTodo/editTodo";

const Main=() => {

    const user_id=localStorage.getItem("id");
    const URL="https://todo-app-v2-server.onrender.com/todos";

    const [hidden,setHidden]=useState(true);
    const [hidden1,setHidden1]=useState(true);
    const [todos,setTodos]=useState([]);

    useEffect(() => {
        getTodos();
        // console.log(todos);
    //   eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setTodosHelper=(newtodos) => {
        // const t=[];
        setTodos(newtodos);
        // newtodos.forEach(handleAdd);
    }

    const getTodos=async () => {
        try {
            const response=await axios.get(URL+"/"+user_id);
            setTodosHelper(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleDone=async (id) => {
        try {
            // console.log(id);
            const response=await axios.post(URL+"/toggledone/", {id});
            getTodos();

        } catch (error) {
            console.log(error);
        }
    };

    const deleteTodo=async (id) => {
        try {
            // console.log("not made yet");
            const response=await axios.delete(URL+"/delete/"+id);
            getTodos();
            
        } catch (error) {
            console.log(error);
        }

    };

    const editTodo=async (id) => {
        // setCurrentEditId(id);
        // console.log("edit attempt", currentEditId);
        try {
            const response=await axios.post(URL+"/edit", {id});
            // console.log(response);

        } catch (error) {
            console.log(error);
        }
        toggleEditDialog();
    };

    const handleEdit=(id) => {
        localStorage.setItem("curId", id);
        // console.log(localStorage.getItem("curId"));
        toggleEditDialog();
    };

    const toggleAddDialog=() => {
        if (hidden1===false) toggleEditDialog();
        setHidden(!hidden);
        getTodos();
    };

    const toggleEditDialog=() => {
        if (hidden===false) toggleAddDialog();
        setHidden1(!hidden1);
        getTodos();
    };

    return (
      <div>
        <Navbar />
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "5rem auto",
              // width:"50%",
              alignItems:"center",
              justifyContent:"center",
            }}
          >
            {todos.map((todo) => {
              return (
                <TodoItem
                  key={todo._id}
                  title={todo.title}
                  description={todo.description}
                  isDone={todo.isDone}
                  todo_id={todo._id}
                  toggleDone={toggleDone}
                  deleteTodo={deleteTodo}
                  handleEdit={handleEdit}
                />
              );
            })}
          </div>
        <AddTodo
          showState={{ hidden, toggleAddDialog, getTodos, setTodosHelper }}
        />
        <EditTodo
          showState={{
            hidden1,
            toggleEditDialog,
            getTodos,
            editTodo,
            setTodosHelper,
          }}
        />

        <Button
          variant="contained"
          onClick={toggleAddDialog}
          sx={{
            display: "flex",
            borderRadius: "50%",
            height: "70px",
            width: "70px",
            position: "fixed",
            bottom: "0",
            right: "0",
            margin: "25px"
          }}
        >
          <AddIcon
            fontSize="large"
            sx={{ color: "white", margin: "auto", scale: "1.3" }}
          />
        </Button>

        
          <svg
            id="visual"
            viewBox="0 286 960 255"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
            style={{
              position:"fixed",
              bottom:"0",
              zIndex:"-50",
              opacity:"0.9"
            }}
          >
            <path
              d="M0 353L22.8 351.8C45.7 350.7 91.3 348.3 137 352.3C182.7 356.3 228.3 366.7 274 361.5C319.7 356.3 365.3 335.7 411.2 337.3C457 339 503 363 548.8 366.8C594.7 370.7 640.3 354.3 686 339.2C731.7 324 777.3 310 823 301.3C868.7 292.7 914.3 289.3 937.2 287.7L960 286L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
              fill="#00d4ff"
            ></path>
            <path
              d="M0 363L22.8 355.8C45.7 348.7 91.3 334.3 137 337.2C182.7 340 228.3 360 274 367.3C319.7 374.7 365.3 369.3 411.2 370.8C457 372.3 503 380.7 548.8 378C594.7 375.3 640.3 361.7 686 360.3C731.7 359 777.3 370 823 374.8C868.7 379.7 914.3 378.3 937.2 377.7L960 377L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
              fill="#00a5ed"
            ></path>
            <path
              d="M0 382L22.8 391.2C45.7 400.3 91.3 418.7 137 418.3C182.7 418 228.3 399 274 400.2C319.7 401.3 365.3 422.7 411.2 421C457 419.3 503 394.7 548.8 380.7C594.7 366.7 640.3 363.3 686 370.7C731.7 378 777.3 396 823 410.7C868.7 425.3 914.3 436.7 937.2 442.3L960 448L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
              fill="#0074cf"
            ></path>
            <path
              d="M0 447L22.8 444.5C45.7 442 91.3 437 137 435.7C182.7 434.3 228.3 436.7 274 437.5C319.7 438.3 365.3 437.7 411.2 444.8C457 452 503 467 548.8 473C594.7 479 640.3 476 686 475.2C731.7 474.3 777.3 475.7 823 473.2C868.7 470.7 914.3 464.3 937.2 461.2L960 458L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
              fill="#0042a7"
            ></path>
            <path
              d="M0 485L22.8 486.5C45.7 488 91.3 491 137 487.3C182.7 483.7 228.3 473.3 274 475C319.7 476.7 365.3 490.3 411.2 489.8C457 489.3 503 474.7 548.8 468.5C594.7 462.3 640.3 464.7 686 463.7C731.7 462.7 777.3 458.3 823 459.8C868.7 461.3 914.3 468.7 937.2 472.3L960 476L960 541L937.2 541C914.3 541 868.7 541 823 541C777.3 541 731.7 541 686 541C640.3 541 594.7 541 548.8 541C503 541 457 541 411.2 541C365.3 541 319.7 541 274 541C228.3 541 182.7 541 137 541C91.3 541 45.7 541 22.8 541L0 541Z"
              fill="#090979"
            ></path>
          </svg>
      </div>
    );
};

export default Main;