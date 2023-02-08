import { Container, Buy } from './styles';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { IngredientItem } from '../../components/IngredientItem';

import { FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { useNavigate } from 'react-router-dom';

import { HiOutlineShoppingBag } from 'react-icons/hi';

import { api } from '../../service/api';
import { useState, useEffect } from 'react';

import { useAuth } from '../../hooks/auth';

function AddDish() {
  const navigate = useNavigate();

  const [units, setUnits] = useState(0);
  const { user } = useAuth();

  function home() {
    navigate('/');
  }

  function selectOptionDish() {
    const selected = document.querySelector('#optionsDish');
    const option = selected.options[selected.selectedIndex].value;
    return option;
  }

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsNew, setIngredientsNew] = useState('');
  const [price, setPrice] = useState('');

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // const formImage = new FormData();
  // formImage.append('image', image);

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, ingredientsNew]);
    setIngredientsNew('');
  }

  function handleRemoveIngredient(item) {
    setIngredients(prevState => prevState.filter(ing => ing !== item));
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  async function register() {
    if (!name || !ingredients || !price || !description) {
      alert('Preencha os campos');
      return;
    }

    const option = selectOptionDish();

    const fileUploadForm = new FormData();
    fileUploadForm.append('avatar', image);
    fileUploadForm.append('name', name);
    fileUploadForm.append('price', price.replace(',', '.'));
    fileUploadForm.append('description', description);
    fileUploadForm.append('ingredients', ingredients);

    if (option === 'Prato') {
      await api.post('/dishesFull', fileUploadForm);
      alert('Prato criado com sucesso');
      navigate('/');
    }
    if (option === 'Sobremesa') {
      await api.post('/dessertsFull', fileUploadForm);
      alert('Sobremesa criada com sucesso');
      navigate('/');
    }
    if (option === 'Bebida') {
      await api.post('/drinksFull', fileUploadForm);
      alert('Drink criado com sucesso');
      navigate('/');
    }
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
      <header>
        <div className="logoAndTitle">
          <svg
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0635 0.550903L25.7096 7.85208V22.4544L13.0635 29.7556L0.417527 22.4544V7.85208L13.0635 0.550903Z"
              fill="#065E7C"
            />
          </svg>

          <h3>food explorer</h3>
        </div>

        <div className="userAndOrders">
          <span>Admin</span>
          <Button
            text={`Meu pedido (${units})`}
            // text="Meu pedido (0)"
            className="hide"
            icon={HiOutlineShoppingBag}
          />
          <Buy className="show">
            <FaShoppingCart />
            <span className="units">({units})</span>
          </Buy>
        </div>
      </header>

      <div className="page">
        <main>
          <div className="return">
            <Button text="Voltar" icon={MdKeyboardArrowLeft} onClick={home} />
            <div className="nameAndOption">
              <h2>Adicionar</h2>
              <select name="" id="optionsDish">
                <option>Prato</option>
                <option>Sobremesa</option>
                <option>Bebida</option>
              </select>
            </div>
          </div>

          <div className="imageAndNameDish">
            <div className="image">
              <label className="imageDish">Imagem do prato</label>
              <div>
                <label htmlFor="avatar">
                  <FaShoppingCart />
                  Selecione a imagem
                  <input
                    id="avatar"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                    // onChange={handleChangeAvatar}
                  />
                </label>
              </div>
            </div>
            <div className="name">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Macarrão a bolonhesa"
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="ingredientsAndPrice">
            <div className="ingredients">
              <label>Ingredientes</label>
              <div className="ingredientsToAdd">
                {/* <IngredientItem value="beterraba" /> */}
                {ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => {
                      handleRemoveIngredient(ingredient);
                    }}
                  />
                ))}

                <IngredientItem
                  placeholder="molho de tomate"
                  isNew
                  value={ingredientsNew}
                  onChange={e => setIngredientsNew(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </div>
            </div>
            <div className="price">
              <label>Preço</label>
              <input
                type="text"
                placeholder="RS 00,00"
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="description">
            <label htmlFor="">Descrição</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button className="addOrder" onClick={register}>
            Adicionar
          </button>
          <img src={image} alt="" />
        </main>
      </div>

      <Footer />
    </Container>
  );
}

export { AddDish };
