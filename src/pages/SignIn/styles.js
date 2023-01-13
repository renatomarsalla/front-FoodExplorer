import styled from "styled-components";

const Container = styled.div`
  /* responsividade */

  /* width: 38.4rem; */
  width: 37.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  height: 100vh;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  .title{
    
    display: flex;
    gap: 1.9rem;
    justify-content: center;
    align-items: center;
    margin-top: 5.2rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto';

    h1{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: 'Roboto', sans-serif;
      font-size: 4.2rem;
    
    }
    
  }

  
  
  
  @media (min-width: 1024px){
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 5rem;

    
    
    >.title h1{
      width: 25rem;
      /* margin-left: 22.3rem; */
    }
  }
  
`


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  
  height: 54rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 1rem;

  /* responsividade */
  /* width: 38.4rem; */
  width: 37.5rem;
  margin-top: 7.1rem;


  
  h2{
    font-size: 3.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-top: 6.4rem;
    margin-bottom: 3.2rem;

    font-family: 'Poppins', sans-serif;

  }

  
  legend{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.6rem;
    
    font-family: 'Roboto', sans-serif;
  }
  
  
  fieldset{
    border: 0;
  }
  
  .form{
    /* width: 34.8rem; */

    /* responsividade */
    width: 34.8rem;
    height: 54rem;
    margin: 0 auto;
  }
  
  .btnEnter button{
    padding: 1.2rem 15.3rem;
    margin-top: 1.6rem;

    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 1.4rem;
  }

  .email{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: flex-start;
    margin-bottom:3.2rem ;
  }

  .password{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: flex-start;
    margin-bottom:1.6rem ;
  }

  button{
    margin-top: 3.2rem;
  }


  @media (min-width: 1024px){
    min-width: 47.6rem;

    /* margin-right: 5.8rem; */
    margin-top: 14rem;
    margin-bottom: 14rem;

    .btnEnter button{
      width: 100%;
  }
  }  

`;





export { Container, Form };

