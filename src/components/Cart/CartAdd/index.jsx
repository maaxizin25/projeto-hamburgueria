import { MyListCart } from "./style";

export const CartAdd = ({ listCart, removeProduct }) => {
  return listCart.map((e) => (
    <MyListCart key={e.id}>
      <img src={e.img} alt={e.name} />
      <span>
        <h3>{e.name}</h3>
        <p>{e.category}</p>
      </span>
      <button onClick={() => removeProduct(e.id)}>Remover</button>
    </MyListCart>
  ));
};
