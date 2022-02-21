import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { AreaLogin } from "./styled";

import { BtnDefautIcons, BtnDefaut } from "../../components/Styled";

import FacebookIcon from "@mui/icons-material/Facebook";

import GoogleIcon from "@mui/icons-material/Google";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registrar"></Route>
       <AreaLogin>
       <h1>Crie sua Conta</h1>
       </AreaLogin>
        <Route path="*">
          <AreaLogin>
            <BtnDefautIcons>
              <FacebookIcon />
              <div className="center"> Fazer login com o Facebook </div>
            </BtnDefautIcons>

            <BtnDefautIcons>
              <GoogleIcon />
              <div className="center"> Fazer login com o Google </div>
            </BtnDefautIcons>

            <p>ou</p>

            <form>
              <div className="form--imput">
                <label>E-mail</label>
                <input type="email" />
              </div>

              <div className="form--imput">
                <label>Senha</label>
                <input type="password" />
              </div>
              <BtnDefaut>Entrar</BtnDefaut>

              <div className="footerLogin">
                Não tem uma conta?
                <Link to="/registrar"> Registre-se </Link>
              </div>
            </form>
          </AreaLogin>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
