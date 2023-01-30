import { CartAdd } from "./CartAdd";
import { TotalValue } from "./style";

export const Cart = ({ listCart, cartTotal, removeProduct, removeAll }) => {
  return (
    <TotalValue>
      <h2>Carrinho de compras</h2>
      <ul className="ulCart">
        {listCart.length === 0 && (
          <div className="not-list-cart">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </div>
        )}
        <CartAdd removeProduct={removeProduct} listCart={listCart} />
      </ul>
      {listCart.length !== 0 && (
        <div className="boxTotalValue">
          <span className="totalValue">
            <h3>Total</h3>
            <p>R$ {cartTotal}</p>
          </span>
          <button onClick={removeAll} className="removeAll">
            Remover Todos
          </button>
        </div>
      )}
    </TotalValue>
  );
};
