import styled from "styled-components";

export const MyListCart = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;

  :hover {
    background-color: white;
  }

  img {
    width: 70px;
    background-color: var(--gray-20);
  }
  span {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  p {
    font-size: 12px;
    color: var(--gray-50);
  }
  h3 {
    font-size: 14px;
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  button {
    font-size: 12px;
    color: var(--gray-50);
  }
  @media (max-width: 700px) {
    span {
      width: 100%;
    }
    justify-content: center;
  }
`;
