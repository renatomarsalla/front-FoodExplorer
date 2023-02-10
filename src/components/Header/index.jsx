import { Container, Favorites, Buy, Logout } from './styles';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonText } from '../ButtonText/Index';

import { FiSearch, FiLogOut, FiPlus } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import { api } from '../../service/api';

import { useAuth } from '../../hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header({ search, searchDesserts, searchDrinks }) {
  const [units, setUnits] = useState(0);
  const { logout, user } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    navigate('/');
    logout();
  }

  function myOrders() {
    // navigate('/myOrder');
    navigate(`/myOrder/${user.id}`);
  }

  function home() {
    navigate('/');
  }

  function routeAddDish() {
    navigate('/addDish');
  }

  useEffect(() => {
    async function fetchUnits() {
      const response = await api.get(`/order/${user.id}`);
      setUnits(response.data.length);
    }
    fetchUnits();
  }, [units]);

  return (
    <Container>
      <div className="title hide">
        <svg
          width="26"
          height="30"
          viewBox="0 0 26 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z"
            fill="#065E7C"
          />
        </svg>
        <h3 onClick={home}>food explorer</h3>
      </div>
      <Favorites className="show">
        <AiFillHeart />
      </Favorites>
      <ButtonText text="Meus favoritos" className="hide btnFavorites" />
      {user.admin && (
        <ButtonText
          text="Novo item"
          className="hide btnNewItem"
          onClick={routeAddDish}
        />
      )}
      <Input
        icon={FiSearch}
        type="text"
        placeholder="Busque pelas opções de pratos"
        onChange={e => {
          search(e.target.value);
          searchDesserts(e.target.value);
          searchDrinks(e.target.value);
        }}
      />
      <Buy className="show" onClick={myOrders}>
        <FaShoppingCart />
        <span>({units})</span>
      </Buy>
      <Button
        text={`Meus pedidos (${units})`}
        className="hide myOrder"
        icon={HiOutlineShoppingBag}
        onClick={myOrders}
      ></Button>

      <Logout className="logout" onClick={handleLogout}>
        <FiLogOut />
      </Logout>
    </Container>
  );
}

export { Header };
