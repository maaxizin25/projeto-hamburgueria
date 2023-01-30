import { useState } from "react";
import { RenderList } from "./style";

export const ListProducts = ({ list, cartListProducts }) => {
  return list.map((e) => (
    <RenderList key={e.id}>
      <span className="cardImg">
        <img src={e.img} alt="" />
      </span>
      <span className="cardText">
        <h2>{e.name}</h2>
        <p>{e.category}</p>
        <p>R$ {e.price.toFixed(2)}</p>
        <button
          onClick={() => {
            cartListProducts(e.id);
          }}
          id={e.id}
        >
          Adicionar
        </button>
      </span>
    </RenderList>
  ));
};
