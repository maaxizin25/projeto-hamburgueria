import logo from "./logo.svg";
import "./App.css";
import { MyHeader } from "./components/Header";
import { UlList } from "./components/ProductsList";
import { Container } from "./styles/container";
import { Cart } from "./components/Cart";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { ToastContainer } from "react-toastify";
import { error, sucess } from "./services/toast";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState();
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [inputText, setInputText] = useState("");

  function showProducts(product) {
    setFilteredProducts(
      products.filter((e) =>
        e.name.toLowerCase().includes(product.toLowerCase())
      )
    );
  }
  function cartListProducts(id) {
    const findProduct = products.find((e) => e.id === id);

    const alreadyProduct = currentSale.filter((e) => e.id === id);

    alreadyProduct.length === 0
      ? setCurrentSale([...currentSale, findProduct])
      : error("Você já adicionou esse produto!");
  }
  function removeProduct(id) {
    sucess("Items removido do carrinho");
    setCurrentSale(currentSale.filter((e) => e.id !== id));
  }
  function removeAll() {
    setCurrentSale([]);
    sucess("Todos os itens foram removidos");
  }

  useEffect(() => {
    const sumAllValue = (itens) => {
      const arraySum = itens.map((e) => e.price);
      const totalSum = arraySum.reduce(
        (first, last) => (first = first + last),
        0
      );
      setCartTotal(totalSum.toFixed(2));
    };
    sumAllValue(currentSale);
  }, [currentSale]);

  const filter = !filteredProducts ? products : filteredProducts;

  useEffect(() => {
    async function burguerList() {
      try {
        const burguerList = await api.get();
        setProducts(burguerList.data);
      } catch (error) {
        console.error(error);
      }
    }
    burguerList();
  }, []);

  return (
    <div>
      <MyHeader setInputText={setInputText} showProducts={showProducts} />
      {inputText && (
        <Container>
          <h2>
            Resultados para: <span className="input-result">{inputText}</span>
          </h2>
        </Container>
      )}
      <Container>
        <UlList
          inputText={inputText}
          burguerList={filter}
          cartListProducts={cartListProducts}
        />
        <Cart
          removeProduct={removeProduct}
          cartTotal={cartTotal}
          listCart={currentSale}
          removeAll={removeAll}
        />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
