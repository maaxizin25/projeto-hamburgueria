import { useState } from "react";
import logo from "../../assets/logo.svg";
import { Container } from "../../styles/container";
import { Header } from "./style";

export const MyHeader = ({ showProducts, setInputText }) => {
  const [inputText, setInputTexto] = useState([]);

  const filterItens = () => {
    showProducts(inputText.trim());
    setInputText(inputText);
  };

  return (
    <Header>
      <Container className="section-logo">
        <img src={logo} alt="" />
        <div className="input-container">
          <input
            onChange={(e) => setInputTexto(e.target.value)}
            placeholder="Pesquisar"
            type="text"
          />
          <button onClick={filterItens}>Pesquisar</button>
        </div>
      </Container>
    </Header>
  );
};
