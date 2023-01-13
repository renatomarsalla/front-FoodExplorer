import styled from 'styled-components';

const Container = styled.div`
  width: 37.5rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  position: relative;
  top:12.2rem;

  /* display: flex; */
  /* flex-direction: column; */
  

  main{
    >.page{

      button.back{
        background-color: blue;
        width: 10rem;
        display: flex;
        align-items: center;

        font-size: 1.6rem;

        background: transparent;

        font-family: "Poppins",sans-serif;


        svg{
          font-size: 2rem;
          gap: 1.1rem;
        }
      }

      width: 34.5rem;
      /* height: 100vh; */
      margin: 0 auto;
      /* background-color: red; */

      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      .myOrder{
        /* background-color: blue; */
        width: 100%;

        img{
          border-radius: 50%;
        }

        h3{
          font-size:2rem;
          font-family: 'Poppins', sans-serif;
          color:${({ theme }) => theme.COLORS.WHITE};
          font-weight: 500;
          margin-top: 1.6rem;
          text-align: center;
        }

        ul{
          span.totals{         
            /* margin-top: 10rem; */
            color:${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.6rem;
            font-family: 'Poppins', sans-serif;
          }
        }

        

        ul li{
          display: flex;
          align-items: center;
          gap: 1.3rem;
          margin-top: 1.6rem;
          margin-bottom: 1rem;
          img{
            width: 5rem;
            height: 5rem;
          }

          .nameAndDelete{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 1rem;
            button{
              font-size: 1.4rem;
              color:${({ theme }) => theme.COLORS.BTN_DELETE}
            }
            div{
              display: flex;
              align-items: center;
              gap: 0.8rem;

              p{
                font-size: 1.6rem;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                color: ${({ theme }) => theme.COLORS.WHITE};
              }
              span{
                margin-top: 0.3rem;
                font-size: 1.2rem;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
                width: 10rem;
                /* background-color: red; */
              }
            }
          }
        }

        ul .total{
          margin-top: 2rem;
          span{
            color:${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.4rem;
          }
          
        }
        
      }

      .payment{
        h3{
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 2rem;
          color:${({ theme }) => theme.COLORS.WHITE};
          text-align: center;
          margin-bottom: 1.6rem;
        }
        .options{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30rem;
          margin:0 auto;
          button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            width: 15rem;
            height: 8rem;
            padding: 2rem 0;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.4rem;
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
            cursor: pointer;
          }

          button.pix{
            border-radius: 0.5rem 0 0 0;
            margin-bottom: -2.2rem;
            
          }
        }
        .QrCodeOrCredit{
          width: 30rem;
          height: 30rem;
          /* height: auto; */
          /* background-color: gray; */
          margin: 0 auto 2rem;
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

          .dataCredit{
            width: 25rem;
            margin: 2rem auto 0;
            .numberCard{
              display: flex;
              flex-direction: column;
              gap: 0.3rem;
              

              /* width: 25rem;
              background-color: blue; */

              label{
                color: ${({ theme }) => theme.COLORS.GRAY_300};
                font-family: 'Roboto', sans-serif;
                font-weight: 400;
                font-size: 1.4rem;
                cursor: pointer;
              }

              input{
                border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
                background-color: transparent;
                border-radius: .5rem;
                padding: 0.6rem;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
                
              }
              
              input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0; 
              }
            }

            .validateAndSecurityCode{
              display: flex;
              margin-top: 2rem;
              gap: 0.8rem;

              .validate, .securityCodeCard{
                label{
                  color: ${({ theme }) => theme.COLORS.GRAY_300};
                  font-family: 'Roboto', sans-serif;
                  font-weight: 400;
                  font-size: 1.4rem;
                  cursor: pointer;
                }

                input{
                  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
                  background-color: transparent;
                  border-radius: .5rem;
                  padding: 0.6rem;
                  color: ${({ theme }) => theme.COLORS.GRAY_100};
                  /* width: 30vw; */
                  /* width: 10rem; */
                  width: 100%;
                  
                
                }
                
                input::-webkit-inner-spin-button {                
                  -webkit-appearance: none;
                  margin: 0;
                }
              }
            }

            button{
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 1.1rem;

              width: 100%;
              background-color: red;
              padding: 1.2rem 0;
              margin-top: 2rem;
              margin-bottom: 3rem;
              border-radius: 0.5rem;

              color: ${({ theme }) => theme.COLORS.WHITE};

              font-family: 'Poppins', sans-serif;
              font-weight: 500;

              cursor: pointer;
            }
          }
          
          
        }

        .waitingPayment{
            width: 30rem;
            height: 30rem;
            margin: 0 auto;
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;

            margin-top: -2.2rem;
            margin-bottom: 2rem;
            /* margin: 2rem auto 0; */
            /* margin-bottom: 2rem; */

            span{
              color: ${({ theme }) => theme.COLORS.GRAY_300};
              font-family:'Roboto', sans-serif;
              font-size: 2rem;
            }

          }

          .pix{
            width: 30rem;
            height: 30rem;
            margin: 0 auto;
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: -2.2rem;
            margin-bottom: 2rem;
            img{
              width: 22rem;
            }
          }

          .hide{
            display: none;
            
      }

    }

      
  }

    
}

  @media (min-width: 412px) {

    margin: 0 auto;
    width: 100%;
    height: 100vh;     
  }

  @media (min-width: 1024px){
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    
    main{
      
      .page{
        width: 90rem;
        
        flex-direction: row;
        justify-content: center;
        height: 100vh;


        

        .myOrder{
          margin-top: 5rem;
          width: 35rem;

          h3{
            text-align: left;
            margin-top: 3.4rem;
          }

          ul .total{
          span{
            font-size: 1.6rem;
          }
          
        }
        }

        .payment{
          margin-top: 5rem;
          /* background-color: red; */
          width: 35rem;

          .options{
            width:35rem;

            button{
              width: 100%;
              /* width: 16rem; */
              font-size: 1.6rem;
              /* background-color: red; */
            }
          }

          .QrCodeOrCredit{
            width: 100%;
            

            .dataCredit{
              width: 30rem;

              .numberCard, .validateAndSecurityCode .validate, .validateAndSecurityCode .securityCodeCard{
                label{
                  font-size:1.6rem;
                }

                input{
                  padding: 1.2rem;
                  font-size: 1.6rem;
                }
              }
            }

            

          }

          .pix, .waitingPayment{
            width: 100%;
            }

          h3{
            margin-top: 3.4rem;
          }
        }
      }

    }
  }
  


`;

export { Container }