import { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';

import { api } from '../service/api';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { userExists, token } = response.data;

      //armazena no localStorage
      localStorage.setItem('@foodexplorer:user', JSON.stringify(userExists));
      localStorage.setItem('@foodexplorer:token', token);

      //passa o token para o cabecalho de autenticação
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ userExists, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Não foi possível entrar');
      }
    }
  }

  function logout() {
    localStorage.removeItem('@foodexplorer:token');
    localStorage.removeItem('@foodexplorer:user');

    setData({});
  }

  //toda vez que a tela for renderizada o localstorage atualiza os dados do usuario
  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token');
    const user = localStorage.getItem('@foodexplorer:user');

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        token,
        userExists: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user: data.userExists, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// hook
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
