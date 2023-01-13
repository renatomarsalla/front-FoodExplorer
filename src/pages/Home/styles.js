import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  /* width: 38.4rem; */
  width: 37.5rem;
  /* width: 37.5rem; */

  position: relative;
  top:10.2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  .imgAndTitle{   
    width: 100vw;
    /* width: 33.5rem; */
    height: 12rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 3.2rem;

    
  }

  .foodExplorer{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;

    h1{
      font-size: 3rem;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    svg{
      font-size: 4rem;
    }

  }

  .titles{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
    h3{
      font-size: 2rem;
      font-family: 'Poppins',sans-serif;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    h4{
      font-size: 1.2rem;
      font-family: 'Poppins', sans-serif;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    
  }

  .subtitles{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hide{
    display: none;
  }

  main{
    width: 100vw;
    
  }

  main section{
    margin-bottom: 2rem;

    ul{
      width: 34.5rem;
      margin: 0 auto;
      /* background-color: red; */
      margin-top: 2rem;

      display: flex;
      gap: 2.7rem;
      overflow-y: auto;

    }

    ul li{
      color: white;
      list-style: none;

      
      
    }
  }

  button.arrowDishesLeft{
    position: absolute;
    top:32rem;
    right: 30rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 4rem;
    }
  }

  button.arrowDessertsLeft{
    position: absolute;
    top:92rem;
    right: 30rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 4rem;
    }
  }

  button.arrowDrinksLeft{
    position: absolute;
    top:147rem;
    right: 30rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 4rem;
    }
  }

  button.arrowDishesRight{
    position: absolute;
    top:32rem;
    right:0.2rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 4rem;
    }
  }
  button.arrowDessertsRight{
    position: absolute;
    top:92rem;
    right: 0.2rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 4rem;
    }
  }

  button.arrowDrinksRight{
    position: absolute;
    top:147rem;
    right: 0.2rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 4rem;
    }
  }

  .newProduct{
    width: 20rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    .newRegister{
      background-color: black;
      font-family: 'Poppins',sans-serif;
    }
  }

  main section ul::-webkit-scrollbar{
        display: none;
  }
  
  @media (min-width: 412px){
    ul .arrowDishesLeft{
    top:42rem;
    right: 33.5rem;   
  }

  ul .arrowDessertsLeft{
    top:82rem;
    right: 33.5rem;
  }

  ul .arrowDrinksLeft{
    top:127rem;
    right: 33.5rem;
  } 

  ul .arrowDishesRight{   
    top:42rem;
    right:1rem;    
  }
  ul .arrowDessertsRight{  
    top:82rem;
    right: 1rem;
  }

  ul .arrowDrinksRight{
    
    top:127rem;
    right: 1rem;
    
  }

  }


  
    
  

  

 
  @media (min-width: 412px){
    button.arrowDishesLeft{
    top:42rem;
    right: 30rem;   
  }

  button.arrowDessertsLeft{
    top:100rem;
    right: 30rem;
  }

  button.arrowDrinksLeft{
    top:157rem;
    right: 30rem;
  } 

  button.arrowDishesRight{   
    top:42rem;
    right:-5rem;    
  }
  button.arrowDessertsRight{  
    top:100rem;
    right: -5rem;
  }

  button.arrowDrinksRight{
    
    top:157rem;
    right: -5rem;
    
  }

  }

  
  


  @media (min-width: 1024px) {
    width: 100%;
    
    
      .imgAndTitle{
        flex-direction: row;
        width: 92rem;
        height: 26rem;
        margin-top: 16.4rem;
        margin-bottom: 6.2rem;
        margin-left: auto;
        margin-right: auto;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
       
       
      }

      .titles{      
        display: flex;
        flex-direction: row;
               
        .subtitles{
          display: flex;
          flex-direction: column;       
          align-items: flex-start;         
          
          width: 48rem;

          h3{
            font-size: 4rem;
            color: ${({ theme }) => theme.COLORS.WHITE_HOME};
            font-weight: 500;
          }

          h4{
            color: ${({ theme }) => theme.COLORS.WHITE_HOME};
            font-weight: 400;
          }
        }
      }

      .titles img{
          width: 43rem;
          height: 40rem;
          margin-top: -15rem;
          margin-left: -4rem;
          
        }

      .show{
        display: none;
      }

      .hide{
        display: block;
      }



      main section{
        min-width:92rem;
        margin-bottom: 4rem;



      }

      main section h2{
        justify-content: left;
      }

      main section ul{
        gap: 2.7rem;
        overflow-y: auto;
        width: 85rem;


      }

      main section ul::-webkit-scrollbar{
        display: none;
      }


      main section ul li .card{
        width: 30rem;
        height: 60rem;
        
        >h2{
          font-size: 2.4rem;
          font-family: 'Poppins', sans-serif;
        }

        >p{
          font-size: 1.4rem;
          font-family: 'Roboto', sans-serif;
          width: 22rem;
        }

        >span{
          font-size: 3.2rem;
          font-family: 'Roboto', sans-serif;
          margin: 1.6rem 0;
          
        }
      }

      main section ul li .card .unitsAndInsert{
        margin-bottom: 3.6rem;
        gap: 1.7rem;
      }

      ul li div.unitsAndInsert span{
        font-size: 3rem;
      }

      ul li div.unitsAndInsert:last-child button{
        font-size: 2rem;
      }

      ul li div.unitsAndInsert button:nth-child(-n+3){
        font-size: 3rem;
      }


      main section ul li .card .favorite{
        >button svg{
          font-size: 2.8rem;
        }
      }


      
      button.arrowDishesLeft{
    position: absolute;
    
    top: 60rem;
    left: 3rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 6rem;
    }
  }

  button.arrowDessertsLeft{
    position: absolute;
    
    top: 120rem;
    left: 3rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 6rem;
    }
  }

  button.arrowDrinksLeft{
    position: absolute;
    
    top: 185rem;
    left: 3rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 6rem;
    }
  }

  button.arrowDishesRight{
    position: absolute;
    
    top: 60rem;
    right: 2rem;
    background-color: transparent;
    svg{
      /* color: gray; */
      font-size: 6rem;
    }
  }
  button.arrowDessertsRight{
    position: absolute;
    
    top: 120rem;
    right: 2rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 6rem;
    }
  }

  button.arrowDrinksRight{
    position: absolute;
    
    top: 185rem;
    right: 2rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 6rem;
    }
  }

  ul li div.favorite{
    gap: 22rem;
  }
  
  .newProduct{
    width: 20rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    .newRegister{
      width: 100%;
      background-color: black;

      font-family: 'Poppins',sans-serif;
    }
    
  }
      
}

@media (min-width:1440px ) {
  button.arrowDishesLeft{
    position: absolute;
    
    top: 60rem;
    left: 25rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 6rem;
    }
  }
  button.arrowDessertsLeft{
    position: absolute;
    
    top: 120rem;
    left: 25rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 6rem;
    }
  }

  button.arrowDrinksLeft{
    position: absolute;
    
    top: 185rem;
    left: 25rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 6rem;
    }
  }

  button.arrowDishesRight{
    position: absolute;
    
    top: 60rem;
    right: 23rem;
    background-color: transparent;
    svg{
      /* color: gray; */
      font-size: 6rem;
    }
  }
  button.arrowDessertsRight{
    position: absolute;
    
    top: 120rem;
    right: 23rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 6rem;
    }
  }

  button.arrowDrinksRight{
    position: absolute;
    
    top: 185rem;
    right: 23rem;
    background-color: transparent;
    svg{
      color: gray;
      font-size: 6rem;
    }
  }
}



`;



export { Container }