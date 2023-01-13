import styled from 'styled-components';

const Container = styled.button`
    background-color: transparent;
    border: none;

    >svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      /* color:red; */
      font-size: 2rem;
    }
`;

export { Container };
