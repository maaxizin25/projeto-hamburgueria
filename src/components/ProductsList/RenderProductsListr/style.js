import styled from "styled-components";

export const RenderList = styled.li`
  min-width: 300px;
  max-height: 346px;
  border: 4px solid var(--gray-20);

  .cardImg {
    background-color: var(--gray-0);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cardImg > img {
    width: 158px;
  }
  .cardText {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 20px;
  }
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 12px;
  }
  p + p {
    font-size: 14px;
    color: var(--color-primary);
    font-weight: 600;
  }
  button {
    background-color: var(--color-primary);
    width: 107px;
    height: 40px;
    border: 2px solid #27ae60;
    border-radius: 8px;
    color: white;
  }
`;
