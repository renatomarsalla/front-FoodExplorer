import styled from "styled-components";

const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 4.8rem;
  border:0;
  padding: 1.2rem;
  border-radius: 1rem;
  font-weight: 500;


  @media (min-width: 1024px){
    width: 9.2rem;
    
  }
`;

export { Container }