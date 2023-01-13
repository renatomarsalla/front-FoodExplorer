import { Container } from './styles';

function ButtonFavorite({ icon: Icon, ...rest }) {
  return <Container {...rest}>{<Icon />}</Container>;
}

export { ButtonFavorite };
