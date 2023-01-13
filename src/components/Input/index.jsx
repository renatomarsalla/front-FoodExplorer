import { Container } from './styles';

function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  );
}

export { Input };
