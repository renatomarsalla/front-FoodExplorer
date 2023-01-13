import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.INGREDIENTITEM};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius:0.5rem;

  margin-left: 1rem;


  > button{
    border:none;
    background:none;

    cursor: pointer;
    /* color:red; */

    /* background-color: green; */
  }

  .button-add{
    color:${({ theme }) => theme.COLORS.GRAY_300};
  }
  .button-delete{
    color:${({ theme }) => theme.COLORS.GRAY_100};
  }

  input{
    max-width:18rem;
    height: 2rem;
    background:transparent;
    border:none;
    padding: 0 2rem;
    color:${({ theme }) => theme.COLORS.WHITE};
    
    

    &::placeholder{
      color:${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  @media (min-width: 1024px) {
    input{
      /* max-width: 48rem; */
    }
    
  }
`;

export { Container }