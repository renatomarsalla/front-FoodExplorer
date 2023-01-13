import { Container } from './styles';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Card } from '../../components/Cards';

import img from '../../assets/principal.png';

import { useNavigate } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';
import { api } from '../../service/api';

import { useAuth } from '../../hooks/auth';

function Home() {
  const [dish, setDish] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);

  const [search, setSearch] = useState([]);
  const [searchDesserts, setSearchDesserts] = useState([]);
  const [searchDrinks, setSearchDrinks] = useState([]);

  const carousel = useRef(null);
  const carouselDesserts = useRef(null);
  const carouselDrinks = useRef(null);

  const navigate = useNavigate();

  const { user } = useAuth();

  const handleLeftClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleLeftClickDesserts = e => {
    e.preventDefault();
    carouselDesserts.current.scrollLeft -= carouselDesserts.current.offsetWidth;
  };

  const handleRightClickDesserts = e => {
    e.preventDefault();
    carouselDesserts.current.scrollLeft += carouselDesserts.current.offsetWidth;
  };

  const handleLeftClickDrinks = e => {
    e.preventDefault();
    carouselDrinks.current.scrollLeft -= carouselDrinks.current.offsetWidth;
  };

  const handleRightClickDrinks = e => {
    e.preventDefault();
    carouselDrinks.current.scrollLeft += carouselDrinks.current.offsetWidth;
  };

  function routeAddDish() {
    navigate('/addDish');
  }

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get('/dishesUser');
      setDish(response.data);
    }
    fetchDishes();
  }, []);

  useEffect(() => {
    async function fetchDesserts() {
      const response = await api.get('/dessertsUser');
      setDesserts(response.data);
    }
    fetchDesserts();
  }, []);

  useEffect(() => {
    async function fetchDrinks() {
      const response = await api.get('/drinksUser');
      setDrinks(response.data);
    }
    fetchDrinks();
  }, []);

  useEffect(() => {
    async function searchDishes() {
      const response = await api.get(`/searchDish?name=${search}`);
      setDish(response.data);
    }

    searchDishes();
  }, [search]);

  useEffect(() => {
    async function searchDessert() {
      const response = await api.get(`/searchDessert?name=${searchDesserts}`);
      setDesserts(response.data);
    }

    searchDessert();
  }, [searchDesserts]);

  useEffect(() => {
    async function searchDrink() {
      const response = await api.get(`/searchDrink?name=${searchDrinks}`);
      setDrinks(response.data);
    }

    searchDrink();
  }, [searchDrinks]);

  return (
    <Container>
      <Header
        search={setSearch}
        searchDesserts={setSearchDesserts}
        searchDrinks={setSearchDrinks}
      />

      <div className="imgAndTitle">
        <div className="titles">
          <img
            src={img}
            alt="image of macarrons and raspberry"
            className="hide"
          />
          <div className="subtitles">
            <h3>Sabores inigualáveis</h3>
            <h4>Sinta o cuidado do preparo com ingredientes selecionados</h4>
          </div>
        </div>
      </div>

      <main>
        <Section title="Pratos principais" className="dishes">
          <ul ref={carousel}>
            {dish &&
              dish.map(dish => (
                <li key={String(dish.id)}>
                  <Card
                    dish={dish}
                    routeUpdate={'/update'}
                    routeDetails={'/details'}
                  />
                </li>
              ))}
          </ul>
        </Section>

        <Section title="Sobremesas" className="dishes">
          <ul ref={carouselDesserts}>
            {desserts &&
              desserts.map(dessert => (
                <li key={String(dessert.id)}>
                  <Card
                    dish={dessert}
                    routeUpdate={'/updateDessert'}
                    routeDetails={'/detailsDessert'}
                  />
                </li>
              ))}
          </ul>
        </Section>

        <Section title="Bebidas" className="dishes">
          <ul ref={carouselDrinks}>
            {drinks &&
              drinks.map(drink => (
                <li key={String(drink.id)}>
                  <Card
                    dish={drink}
                    routeUpdate={'/updateDrink'}
                    routeDetails={'/detailsDrink'}
                  />
                </li>
              ))}
          </ul>

          <Button
            icon={MdKeyboardArrowLeft}
            className="arrowDishesLeft"
            onClick={handleLeftClick}
          />
          <Button
            icon={MdKeyboardArrowLeft}
            className="arrowDessertsLeft"
            onClick={handleLeftClickDesserts}
          />
          <Button
            icon={MdKeyboardArrowLeft}
            className="arrowDrinksLeft"
            onClick={handleLeftClickDrinks}
          />
          <Button
            icon={MdKeyboardArrowRight}
            className="arrowDishesRight"
            onClick={handleRightClick}
          />
          <Button
            icon={MdKeyboardArrowRight}
            className="arrowDessertsRight"
            onClick={handleRightClickDesserts}
          />
          <Button
            icon={MdKeyboardArrowRight}
            className="arrowDrinksRight"
            onClick={handleRightClickDrinks}
          />
        </Section>
      </main>

      <div className="newProduct">
        {user.admin && (
          <Button
            text="Cadastrar novo item"
            className="newRegister"
            onClick={routeAddDish}
          />
        )}
      </div>

      <Footer />
    </Container>
  );
}

export { Home };
