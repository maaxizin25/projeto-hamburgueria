import styled from "styled-components";

export const ContainerUlList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 700px) {
    flex-wrap: nowrap;
    overflow-y: hidden;
    margin-bottom: 20px;
    width: 100vw;
    padding: 10px;
  }
`;
