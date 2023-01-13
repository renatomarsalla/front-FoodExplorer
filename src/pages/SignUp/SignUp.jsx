import { Container, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { api } from '../../service/api';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Todos os campos devem ser preenchidos');
    }

    if (password.length < 6) {
      return alert('A senha precisa ter no mínimo 6 caracteres');
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso');
        navigate('/');
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Não foi possível cadastrar o usuário');
        }
      });
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
            d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z"
            fill="#065E7C"
          />
        </svg>
        <h1>food explorer</h1>
      </div>

      <Form>
        <fieldset>
          <h2>Crie sua conta</h2>

          <div className="name">
            <legend>Seu nome</legend>
            <Input
              type="text"
              placeholder="Exemplo: Maria da Silva"
              required
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="email">
            <legend>Email</legend>
            <Input
              type="mail"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="password">
            <legend>Senha</legend>
            <Input
              type="password"
              placeholder="No mínimo 6 caracteres"
              minLength="6"
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <Button text="Criar conta" onClick={handleSignUp} />

          <Link to="/">
            <ButtonText text="Já tenho uma conta" />
          </Link>
        </fieldset>
      </Form>
    </Container>
  );
}

export { SignUp };
