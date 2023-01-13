import styled from "styled-components";

export const Container = styled.button`
  background:transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  
  /* margin-top: 3.2rem; */

  cursor: pointer;

  font-size: 1.6rem;

  font-family: 'Poppins', sans-serif;

  text-align: center;

`;