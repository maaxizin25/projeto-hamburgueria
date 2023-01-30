import styled from "styled-components";

export const TotalValue = styled.div`
  height: 158px;
  min-width: 365px;
  border-radius: 4px;
  background-color: var(--gray-0);

  h2 {
    height: 65px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 18px;
    padding: 10px;
  }
  ul {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-bottom: 3px solid var(--gray-20);
    margin-bottom: 10px;
    background-color: var(--gray-0);
  }
  .boxTotalValue {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
  }
  .totalValue {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .removeAll {
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: var(--gray-50);
    background-color: var(--gray-20);
    font-weight: 600;
  }
  .not-list-cart {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  span > p {
    font-weight: 700;
    color: var(--gray-50);
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    min-width: 0;
    padding: 10px;
  }
`;
