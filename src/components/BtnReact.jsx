import { useState } from "react";

function Contador() {
  // Estado inicial del contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const incrementar = () => setCount(count + 1);

  // Función para decrementar el contador
  const decrementar = () => setCount(count - 1);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;
