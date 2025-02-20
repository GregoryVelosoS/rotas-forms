import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" />
        <br></br>
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" />
        <br></br>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
