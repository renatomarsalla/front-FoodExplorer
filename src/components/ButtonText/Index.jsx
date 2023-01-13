import { Container } from './styles';

export function ButtonText({ icon: Icon, text, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      {text}
    </Container>
  );
}
