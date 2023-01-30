import styled from "styled-components";

export const Container = styled.div`
  width: 1600px;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0px;
  }
`;
