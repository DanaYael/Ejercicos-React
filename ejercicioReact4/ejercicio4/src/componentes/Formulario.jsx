import Form from "react-bootstrap/Form";
import { FormText } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

const Formulario = () => {
  const [tareas, setTareas] = useState([]); // Lista de todas las tareas.

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Agrega la tarea a la lista y limpia el formulario
    setTareas([...tareas, data.tarea.trim()]);
    reset(); // Limpia el input
  };

  const handleKeyDown = (e, onSubmitHandler) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita el comportamiento por defecto del Enter.
      onSubmitHandler(); // Llama al método para agregar la tarea.
    }
  };

  return (
    <>
      <Form
        className="mb-3 d-flex container"
        onSubmit={handleSubmit(onSubmit)} // Maneja el submit del formulario
      >
        <Form.Group controlId="formTarea" className="w-100">
          <Form.Control
            type="text"
            placeholder="Escribe tu nueva tarea"
            {...register("tarea", {
              required: "La tarea es obligatoria",
              minLength: {
                value: 3,
                message: "La tarea debe tener 3 caracteres como mínimo",
              },
              maxLength: {
                value: 25,
                message: "La tarea debe tener 25 caracteres como máximo",
              },
            })}
            onKeyDown={(e) => handleKeyDown(e, handleSubmit(onSubmit))}
          />
          <FormText className="text-danger">{errors.tarea?.message}</FormText>
        </Form.Group>
        <Button type="submit">Add </Button>
      </Form>
      <ListaTareas tareas={tareas} /> {/* Pasa las tareas a la lista */}
    </>
  );
};

export default Formulario;
