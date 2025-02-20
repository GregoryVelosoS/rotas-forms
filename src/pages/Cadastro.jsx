import styles from "./css/Cadastro.module.css";

import { useState, useRef } from "react";

const Cadastro = () => {
  // Criação de estado para os inputs do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [desc, setDesc] = useState("");
  const [arquivo, setArquivo] = useState(null);
  const [arquivoNome, setArquivoNome] = useState(""); 
  const [tipoUsuario, setTipoUsuario] = useState("aluno");

  // Referência para o input de arquivo
  const arquivoRef = useRef(null);

  // Função para lidar com a mudança de valor do input de nome
  const handleNameChange = (e) => {
    setNome(e.target.value);
    console.log(nome);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
   
    // Exibindo os valores dos inputs no console
    console.log("Formulario enviado");
    console.log("Nome: ", nome);
    console.log("Email: ", email);
    console.log("Senha: ", senha);
    console.log("Idade: ", idade);
    console.log("Data de Nascimento: ", dataNasc);
    console.log("Descrição: ", desc);
    console.log("Arquivo: ", arquivo);
    console.log("Nome do Arquivo: ", arquivoNome);
    console.log("Tipo de Usuário: ", tipoUsuario);
    
    // Zerando os valores dos inputs
    setNome("");
    setEmail("");
    setSenha("");
    setIdade("");
    setDataNasc("");
    setDesc("");
    setArquivo(null);
    arquivoRef.current.value = "";
    setArquivoNome("");
    setTipoUsuario("aluno");
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        {/* Label fora do input, com htmlFor */}
        {/* Caixinhe de nome */}
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          placeholder="Digite seu nome ..."
          onChange={handleNameChange}
        />
        {/* Label dentro do input */}
        {/* Caixinha de email */}
        <label>
          <span>Email: </span>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Digite seu email ..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        {/* Caixinha de senha */}
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="senha"
            value={senha}
            placeholder="Digite sua senha ..."
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
        </label>
        {/* Caixinha de idade */}
        <label>
          <span>Idade: </span>
          <input
            type="number"
            name="idade"
            value={idade}
            placeholder="Digite sua idade ..."
            onChange={(e) => {
              setIdade(e.target.value);
            }}
          />
        </label>
        {/* Caixinha de data de nascimento */}
        <label>
          <span>Data de Nascimento: </span>
          <input
            type="date"
            name="dataNasc"
            value={dataNasc}
            onChange={(e) => {
              setDataNasc(e.target.value);
            }}
          />
        </label>
        {/* Caixinha de descrição */}
        <label>
          <span>Descrição: </span>
          <textarea
            name="desc"
            value={desc}
            placeholder="Digite uma descrição ..."
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </label>
        {/* Caixinha de arquivo */}
        <label>
          <span>Arquivo: </span>
          <input
            type="file"
            name="arquivo"
            ref={arquivoRef}
            onChange={(e) => {
              setArquivo(e.target.files[0]);
              console.log(e.target.files[0]);
              setArquivoNome(e.target.files[0].name);
            }}
          />
        </label> 
        {/* Caixinha de tipo de usuário */}
        <label>
          <span>Tipo de Usuário: </span>
          <select
            name="tipoUsuario"
            defaultValue={tipoUsuario}
            value={tipoUsuario}
            onChange={(e) => {
              setTipoUsuario(e.target.value);
            }}
          >
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
            <option value="admin">Admin</option>
          </select> 
        </label>  
        {/* Botao pra enviar o formulario */}
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default Cadastro;
