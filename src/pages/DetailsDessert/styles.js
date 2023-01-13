import styled from 'styled-components';

const Container = styled.div`
  width: 37.5rem;
  height: 100vh;

  position: relative;
  top:8rem;

  .page{
    margin: 0 auto;
    width: 34.5rem;

    >.return{

      button{
        background-color: transparent;
        display: flex;
        align-items: center;

        font-family: 'Poppins',sans-serif;
        margin-top: 3.4rem;

        svg{
          font-size: 2rem;
          gap: 1.1rem;
        }
      }
    }

    main{
      height: 100vh;


      >.dish{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;

        img{
          width: 15rem;
          height: 15rem;

          margin-top: 1rem;

          border-radius: 50%;
        }

        
      }

      .infos{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;

          margin-top: 1rem;
          h1{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: 500;
            font-family: "Poppins", sans-serif;
            font-size: 2rem;
            text-align: center;
          }
          span{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: 400;
            width: 20rem;
            text-align: center;
            font-size: 1.4rem;
          }
        }

      .ingredientsTitle{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3.2rem;
        span{
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 1.6rem;
          font-family: "Poppins", sans-serif;
        }
      }

      .ingredients{
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        justify-content: center;

        margin-top: 1rem;

        
        
        label{
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 1.4rem;
        }

        >.ingredient{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;

          label{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.4rem;
          }

          
        }

        >.ingredient img{
          width: 5rem;
          height: 5rem;
          /* margin-top: 1rem; */
        }
      }

      .priceAndUnits, .units{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
      }

      .priceAndUnits{
        margin-top: 2rem;

        >span{
          color: ${({ theme }) => theme.COLORS.PRICE};
          font-size: 1.6rem;
          font-family: 'Roboto', sans-serif;
        }
      }

      .units{
        gap: 1rem;

        span{
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }

      .units button:nth-child(4){
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        align-items: center;
        margin-left: 1rem;
      }

      
    }

    
  }

  @media (min-width: 412px) {
      margin: 0 auto;
      width: 100%;
      height: 100vh;
    
      
    }

    @media (min-width: 1024px) {

      .page{
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        /* background-color: green; */

        >.return{
          margin-left: 12.2rem;

          button{
            width: 20rem;
            height: 3.4rem;
            font-size: 2rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            margin-top: 5rem;
            
            svg{             
              font-size: 3rem;
            }
          }
        }

        main{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 2rem;

          .ingredientsTitle{  
            justify-content: left;
            span{
              color: ${({ theme }) => theme.COLORS.WHITE};
              font-size: 2rem;
              font-family: "Poppins", sans-serif;
            }
          }

          .ingredients{
            margin-top: 0.8rem;
            label{
              font-size: 1.8rem;
              font-family: "Poppins", sans-serif;
              font-weight: normal;
            }
          }

          >.dish{
            img{
              /* background-color: red; */
              width: 32.9rem;
              height: 32.9rem ;

              margin-bottom: 18.5rem;
              margin-left: 12.2rem;
            }
            
          }

          >.dishesIngredientsAndPrices{
            /* background-color: red; */
            margin-bottom: 22rem;
            width: 60rem;
            /* background-color: red; */

            >.infos{
              align-items: flex-start;

              h1{
                font-size: 4rem;
                font-family: 'Poppins', sans-serif;
              }
              span{
                font-size: 1.6rem;
                text-align: left;
                width: 50rem;
                font-weight: 400;
                font-family: 'Poppins', sans-serif;
              }
            }

            >.ingredients, >.priceAndUnits{
              justify-content: flex-start;
            }

            >.priceAndUnits{
              gap: 5rem;

              .price{
                font-size: 3.2rem;
                font-weight: 400;
              }

              .units{
                span{
                  font-size: 2rem;
                }

                .decrement, .increment{
                  font-size: 2rem;
                }
              }
            }
            
          }

          
        }
    }
    
      
    }
`;

export { Container }