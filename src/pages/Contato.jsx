import {useEffect, useState} from "react";


const urlCursos = "http://localhost:5000/cursos";

const Contato = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    async function fetchCursos() {
      // Busca os cursos na API
      const res = await fetch(urlCursos);
      // Converte a resposta para JSON
      const data = await res.json();
      // Atualiza a variavel de estado cursos com os dados da API
      setCursos(data);
    }
    fetchCursos()
  }, []);

  console.log(cursos);

  return (
    <div>
      <h1>Contato</h1>
    </div>
  );
};

export default Contato;
