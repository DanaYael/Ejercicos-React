import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <>
      <main>
        <div className="text-center">
          <h1>Bienvenido</h1>
          <h2>Lista de Tareas</h2>
        </div>
        <Formulario></Formulario>
      </main>
    </>
  );
}

export default App;
