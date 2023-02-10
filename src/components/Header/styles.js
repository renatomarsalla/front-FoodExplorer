

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 10.4rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  position: fixed;
  top:0;
  z-index: 10;
  
  .title{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    h3{
      cursor: pointer;
    }
  }
  .hide{
    display: none;
  }
  .show{
    display: block;
  }
  
  
  @media (min-width: 1024px) {
    .hide{
    display: block;
  }
    .show{
      display: none;
    }
    .title{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      >svg{
        margin-left: 4rem;
        /* margin-left: 12.3rem; */
      }
      >h3{
        width: 17rem;
        height: 2.9rem;
        font-size: 2.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
      }
      
    }
    .btnFavorites, .btnNewItem{
      /* width: 27rem;*/
      width: 70rem;
      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      line-height: 2.56rem;
      
    }
    /* button{
      width: 50rem;
      margin-left: 3.7rem;
    } */
    
   .logout{
    /* margin-right: 6rem; */
    /* margin-right: 12.8rem; */
   }
   .myOrder{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;
    /* background-color: pink; */
    width: 50rem;
    margin-left: 3.2rem;
    >svg{
      font-size: 2rem;
    }
   }
  }


`;

const Favorites = styled.button`
  border: none;
  background: none;
  >svg{
    color: gray;
    font-size: 3rem;
    margin: 0 2rem;
  }
`;

const Buy = styled.button`
  border: none;
  background: none;
  margin-left: 1.2rem;
  position: relative;
  
  >span{
    position: absolute;
    left: 5.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  
  >svg{
    color: gray;
    font-size: 3rem;
    margin: 0 2rem;

  }
  
`;

const Logout = styled.button`
  border: none;
  background: none;
  margin-right: 1.2rem;
  
  >svg{
    color: gray;
    font-size: 3rem;
    margin: 0 2rem;
  }
`;

export { Container, Favorites, Buy, Logout };