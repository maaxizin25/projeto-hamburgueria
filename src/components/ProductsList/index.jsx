import { ListProducts } from "./RenderProductsListr";
import { ContainerUlList } from "./style";

export const UlList = ({ burguerList, cartListProducts }) => {
  return (
    <ContainerUlList>
      <ListProducts list={burguerList} cartListProducts={cartListProducts} />
    </ContainerUlList>
  );
};
