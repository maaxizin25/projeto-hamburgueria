import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  max-width: 100%;
  height: 80px;
  background-color: var(--gray-0);
  display: flex;
  align-items: center;

  .section-logo {
    width: 1600px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .input-container {
    border: 2px solid var(--gray-20);
    background-color: white;
    border-radius: 4px;
    padding: 2px 0px;
    width: 365px;
    height: 60px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .input-container > input {
    width: 100%;
    border: none;
    height: 100%;
    padding: 5px;
  }
  button {
    background-color: var(--color-primary);
    width: 107px;
    height: 40px;
    border: 2px solid #27ae60;
    border-radius: 8px;
    color: white;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 139px;
    display: flex;
    .section-logo {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    img {
      width: 158px;
    }
    .input-container {
      width: auto;
    }
  }
`;
