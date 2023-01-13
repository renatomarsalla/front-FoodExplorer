import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  /* width: 37.5rem; */
  height: 100vh;

  /* background-color: aqua; */

  margin: 0 auto;

  >header{
    width: 100%;
    /* width: 37.5rem; */
    height: 10.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logoAndTitle{
      display: flex;
      gap: 1.1rem;
      align-items: center;
      justify-content: center;
      margin-left: 2rem;

      h3{
        font-family: 'Roboto';
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size : 1.6rem ;
      }
    }
    .userAndOrders{
      display: flex;
      /* gap: 1rem; */
      align-items: center;
      justify-content: center;
      margin-right: 3.2rem;
      position: relative;

      .units{
        position: absolute;
        left: 8rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }

      span{
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
      }

    }

    .hide{
      display: none;
    }

    .show{
      display: block;
    }
  }

  >.page{
    margin: 0 auto;
    width: 37.5rem;


    main{ 
      margin:0 auto;
      /* width: 100vw; */
      width: 34.5rem;
      height: 100vh;
      /* background-color: blue; */
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      /* >h2{
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-left: 1.2rem;
      } */

      >.return{

        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: flex-start;

        .nameAndOption{
          display: flex;
          flex-direction: row;
          gap: 1.2rem;
          justify-content: center;
          align-items: center;

          select{
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
            background-color: transparent;
            border-radius: 0.5rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            padding: 0.4rem;

            option{
              background-color: black;
              color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
          }
        }

        button{
          background-color: transparent;
          display: flex;
          align-items: center;           

          margin-top: 2.4rem;

          padding: 0;

          svg{
            font-size: 2rem;
            gap: 1.1rem;
              /* padding:0; */
          }
        }

          h2{
            /* margin-left: 1.2rem; */
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            
          }
        }

      >.imageAndNameDish{
        display: flex;
        align-items: center;
        /* justify-content: space-around; */
        justify-content: space-between;

        margin-top: 1.6rem;

        .image:first-child{
          font-size: 1.2rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
        }

        .image{
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          /* color: ${({ theme }) => theme.COLORS.WHITE}; */
          color:${({ theme }) => theme.COLORS.GRAY_100};
          
          div{
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
            border-radius: 0.5rem;
            padding: 0.8rem;
            
            label{
              display: flex;
              align-items: center;
              gap: 0.5rem;
              /* color: ${({ theme }) => theme.COLORS.WHITE}; */
              color:${({ theme }) => theme.COLORS.GRAY_100};
              
            }
            
          }
        }

        .image input{
          display: none;
          
        }
        
      }

      .name{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        input{
          background: transparent;
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
          border-radius: 0.5rem;
          padding: 0.6rem;
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-weight: normal;
        }

        label{
          /* color:${({ theme }) => theme.COLORS.WHITE}; */
          color:${({ theme }) => theme.COLORS.GRAY_100};
          font-size: 1.2rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
        }
      }
    }

    .ingredientsAndPrice{
      display: flex;
      align-items: center;
      gap: 0.8rem;
      justify-content: space-between;
      /* width: 100vw; */

      margin-top: 1.6rem;

      >.ingredients{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        

        label{
          color:${({ theme }) => theme.COLORS.GRAY_100};
          font-size: 1.4rem;
        }
        /* input{
          width: 23rem;
          padding: 0.6rem;
          background: transparent;
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
          border-radius: 0.5rem;

          color:${({ theme }) => theme.COLORS.GRAY_300};
        } */

        

        .ingredientsToAdd{
          display: flex;
          align-items: center;
          /* justify-content: flex-start; */
          justify-content: center;
          gap: 0.8rem ;
          width: 22rem;
          height: auto;
          padding: 0.4rem 0;
          /* height: 2.9rem; */
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
          border-radius: 0.5rem;
          flex-wrap: wrap;


          /* background-color: blue; */
          
        }

        
      }

      >.price{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        float: right;

        label{
          color:${({ theme }) => theme.COLORS.GRAY_100};
          font-family: 'Roboto', sans-serif;
          /* font-weight: 400; */
          font-size: 1.4rem;
        }
        input{
          width: 10rem;
          padding: 0.6rem;

          background: transparent;
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
          border-radius: 0.5rem;

          color:${({ theme }) => theme.COLORS.GRAY_300};
        }
      }
    }

    .description{
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1.6rem;

      label{
        color:${({ theme }) => theme.COLORS.GRAY_100};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
      }

      textarea{
        background: transparent;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
        padding: 1.2rem;
        color:${({ theme }) => theme.COLORS.GRAY_300};
        border-radius: 0.5rem;
      }
    }

    button.addOrder{
      margin-top: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.GRAY_500};
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
      border-radius: 0.5rem;
      width: 100%;
      padding: 1.2rem 0;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
    }
  }

  @media (min-width: 1024px){
    /* width: 100%;
    background-color: red; */

    header{   
        .hide{
          display: block;
        }

        .logoAndTitle{
          margin-left: 12.3rem;
        }

        .userAndOrders{

          margin-right: 12.3rem;

          >button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            width: 15rem;

            svg{
              font-size: 2rem;
            }
          }

          .show{
            display: none;
          }

          span{
            margin-right: 1.6rem;
          }
        }
      }

    .page{
      width: 100%;
      /* width: 77.6rem; */

      main{
        width: 77.6rem;
        /* background-color: black; */

        

        .return{
          h2{
            font-size: 3.2rem;
          }

          button{
            font-size: 2.4rem;

            svg{
              font-size: 3rem;
            }
          }

          

          
        }

        .imageAndNameDish{
          gap: 1.6rem;

          .image{
            .imageDish{
              font-size: 1.6rem;
            }
          }       
        

          .name{
            input{
              width: 61rem;             
            }

            label{
              font-size: 1.6rem;
            }
          }

          
        }

        .ingredientsAndPrice{
          gap: 1.6rem;

          .ingredients{
            input{
              width: 65.5rem;
            }
          }

          
        }

        .ingredientsAndPrice{
          .ingredients{
            label{
              font-size: 1.8rem;
            }

            .ingredientsToAdd{
            width: 65rem;
            justify-content: left;

            input{
              /* margin-left: 0.5rem; */
            }
          }
          }
        }

        .description, .price{
          label{
            font-size: 1.6rem;
          }
        }

        button.addOrder{
          width: 35.7rem ;
          display: flex;
          justify-content: center;
          float: right;
          
        }

        
      }
    }


  }

  

`;

const Buy = styled.button`
  border: none;
  background: none;
  width: 4rem;
  
  

  >svg{
    color: gray;
    font-size: 3rem;
    /* margin: 0 2rem; */
  }
`;

export { Container, Buy }