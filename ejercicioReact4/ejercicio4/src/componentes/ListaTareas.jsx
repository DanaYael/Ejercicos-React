import React from "react";
import { ListGroup } from "react-bootstrap";
import Tarea from "./Tarea";

const ListaTareas = ({ tareas }) => {
  return (
    <ListGroup>
      {tareas.map((tarea) => (
        <Tarea key={tarea} tarea={tarea}></Tarea>
      ))}
    </ListGroup>
  );
};

export default ListaTareas;
