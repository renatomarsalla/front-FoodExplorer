import styled from 'styled-components'

const Container = styled.section`
  width: 38.4rem;
  /* height: 38rem; */

  margin: 0 auto;

  /* background-color: red; */
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  >h2{
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color:${({ theme }) => theme.COLORS.WHITE_HOME};

    display: flex;
    justify-content: space-around;
  }

  @media (min-width: 1024px){
    >h2{
      font-size:3.2rem;
      font-weight: 500;
      margin-bottom: 3.9rem;
    }
  }

  
`;

export { Container }