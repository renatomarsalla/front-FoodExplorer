import { Container } from './styles';

function Button({ icon: Icon, text, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon />}
      {text}
    </Container>
  );
}

export { Button };
