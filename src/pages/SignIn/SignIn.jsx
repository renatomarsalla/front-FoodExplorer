import { Container, Form } from './styles';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/Buttontext';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

function SignIn() {
  // const data = useAuth();
  // console.log('meu contexto', data);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <div className="title">
        <svg
          width="44"
          height="48"
          viewBox="0 0 44 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0318 0.216515L43.4349 12.0919V35.8426L22.0318 47.7179L0.628698 35.8426V12.0919L22.0318 0.216515Z"
            fill="#065E7C"
          />
        </svg>
        <h1>
          food explorer
          {/* food<span>explorer</span> */}
        </h1>
      </div>

      <Form>
        <fieldset className="form">
          <h2>Faça login</h2>

          <div className="email">
            <legend htmlFor="">Email</legend>
            <Input
              placeholder="Exemplo: exemplor@exemplo.com.br"
              type="mail"
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="password">
            <legend htmlFor="">Senha</legend>
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"
              minLength="6"
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="btnEnter">
            <Button text="Entrar" onClick={handleSignIn} />
          </div>

          <Link to={'/register'}>
            <ButtonText text="Criar uma conta" className="btnCreateAccount" />
          </Link>

          {/* <p>criar uma conta</p> */}
        </fieldset>
      </Form>
    </Container>
  );
}

export { SignIn };
