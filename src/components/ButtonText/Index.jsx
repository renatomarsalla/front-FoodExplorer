import { Container } from './styles';

export function ButtonText({ icon: Icon, text, ...rest }) {
  return (
    <Container {...rest} type="button">
      {Icon && <Icon />}
      {text}
    </Container>
  );
}
