import styled from 'styled-components'

const Container = styled.div`

/* ul li{
    list-style: none;
    justify-content: space-between;
    
  } */
    width: 15rem;
    height: 50rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};

    /* background-color: blue; */

    /* margin-top: 1.5rem; */
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap:0.8rem;

    margin-left: 0.55rem;
   
    position: relative;

    .card{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      .favorite{
        display: flex;
        gap: 10rem;
        /* background-color: blue; */
        margin-top:0 ;

        .btnFavorites{
          /* background-color: red; */
          /* width: 3rem; */
          cursor: pointer;
        }
      }
      img{
        width: 12.6rem;
        height: 12.6rem;

        margin-top: 1rem;
        margin-bottom: 2rem;

        border-radius: 50%;

        cursor: pointer;

        
      }

      /* h2,p{
        text-align: center;
        margin-bottom: 2rem;
      } */

      h2{
        font-family: 'Poppins',sans-serif;
        /* background-color: red; */
        text-align: center;
        margin-bottom: 2rem;
      }

      p{
        font-size: 1.4rem;
        font-family: 'Roboto',sans-serif;
        font-weight: 400;
        height: 7rem;
        text-align: center;
        /* background-color: red; */

      }

      .price{
        color: ${({ theme }) => theme.COLORS.PRICE};
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
        display: flex;
        flex-direction: column;
        gap: 5rem;
      }

      .unitsAndInsert{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        /* background-color: red; */
        /* margin-bottom: 1rem; */

        position: absolute;
        bottom:1rem;

        button,span{
          font-size: 2rem;
          /* color: red; */
        }

        span{

        }

        button.insert{
          font-size: 1rem;
        }

        .units{
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;

          .insert{
            /* color: red; */
            font-size: 1.2rem;
            height: auto;
          }
        }
      }

      /* .noFavorite{
        display: block;
      } */

      .yesFavorite{
        display: block;
        /* background-color: red; */
      }

      .hide{
        display: none;
      }

      /* position: relative; */
    }

    @media (min-width:412px){
      width: 16rem;
    }

    @media (min-width: 1024px) {
      width: 30rem;
      
      .card{
        align-items: center;
        justify-content: center;
        .favorite{
          margin-top: -13rem;
          gap: 20rem;
        }


        .unitsAndInsert{
          bottom: -0.5rem;
          .price{
            height: auto;
            font-size: 2.5rem;
          }

          .units{
            margin-bottom:0rem;

            .insert{
              font-size: 1.4rem;
            }
          }
        }
      }
    }
    //////////////////////////////

    
`

export { Container }