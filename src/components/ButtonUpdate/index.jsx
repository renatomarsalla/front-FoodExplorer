import { Container } from './styles';

function ButtonUpdate({ icon: Icon, ...rest }) {
  return <Container {...rest}>{<Icon />}</Container>;
}

export { ButtonUpdate };
