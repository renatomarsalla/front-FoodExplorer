import styled from 'styled-components';

const Container = styled.button`
    background-color: transparent;
    border: none;

    >svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      /* color: red; */
      font-size: 2rem;
    }

    @media (min-width: 1024px) {
      >svg{
        font-size: 3rem;
      }
    }

    
`;

export { Container };
