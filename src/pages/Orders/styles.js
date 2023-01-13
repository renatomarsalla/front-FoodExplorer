import styled from 'styled-components';

const Container = styled.div`
  width: 37.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  height: 100vh;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  >.page{
    margin: 0 auto;
    /* background-color: red; */
    width: 34.5rem;
    height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    
    
      
    h1{
        color:white;
        margin-top: 3.5rem;
  
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
      }
    

    .table{
      border: 2px solid ${({ theme }) => theme.COLORS.BORDER_TABLE_ORDER};
      overflow: hidden;
      border-top-left-radius:1rem;
      border-top-right-radius:1rem;
      border-bottom: none;


      table{
        border-collapse: collapse;
   
      }

      table thead tr th{
        text-align: left;
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.BORDER_TABLE_ORDER};
        border-right:2px solid ${({ theme }) => theme.COLORS.BORDER_TABLE_ORDER} ;
        
        padding: 1rem;
    }

      table *{
        color: white;
        font-size: 1.2rem;

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
      }

      table tbody td{
        border-right:2px solid ${({ theme }) => theme.COLORS.BORDER_TABLE_ORDER} ;
        border-bottom:2px solid ${({ theme }) => theme.COLORS.BORDER_TABLE_ORDER} ;
        
        padding: 1rem;

      }

      

      table tbody td:last-child, table thead tr th:last-child{
        border-right:none;
      }

      table tbody tr:last-child{
        border-bottom:none;
      }
    }

    .hide{
      display: none;
    }


    
    
    
  }

  @media (min-width:412px) {
    margin: 0 auto;
      width: 100%;
      height: 100vh;
    /* .page{
      margin: 0 auto;
      width: 100%;
      height: 100vh;

      
    } */
  }

  @media (min-width:1024px) {
      /* margin: 0 auto; */
      width: 100%;
      height: 100vh;


    .page{
      width: 90rem;

      .table{

        table{
          width: 100%;

          tbody td.status{
            display: flex;
            gap: 0.8rem;
            align-items: center;
            img{
              width: 10px;
              height: 10px;
              background-color: red;
              border-radius: 50%;
              
            }
          }
        }

          img.hide{
            display: block;
          }
        }
      }

     

    }
  

`;



export { Container }