import styled from "styled-components";

const Container = styled.div`
  /* width: 37.5rem;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

  width: 37.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  height: 100vh;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  >.title{
    display: flex;
    gap: 1.9rem;
    align-items: center;
    justify-content: center;
    margin-top: 5.2rem;

    h1{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: 'Roboto', sans-serif;
      font-size: 4.2rem;
    
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    gap: 8rem;
    
    >.title h1{
      width: 25rem;
    }
  }
`;

const Form = styled.form`
  /* width: 38.4rem; */
  width: 37.5rem;
  margin: 0 auto;
  height: 60rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 1rem;

  margin-top: 4.4rem;

  fieldset{
    width: 34.8rem;
    margin: 0 auto;
    border: 0;
  }

  h2{
    margin-top: 2.4rem;
    margin-bottom: 3.2rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
  }

  legend{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  button{
    width: 100%;
    margin-top: 1.6rem;
  }

  .name, .email, .password{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .email, .password{
    margin-top: 1.6rem;
  }

  @media (min-width: 1024px) {
    min-width: 47.6rem;

    margin: 14rem 0;
  }
`;

export { Container, Form }