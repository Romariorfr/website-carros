import './styles.css';
import { ReactComponent as Car } from '../../assets/images/car.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="card-container">
          <Car />
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carro e de mais um passo na realização de seu sonho
            </p>
          </div>
        </div>

        <div className="catalog-card">
          <Link to="/products">
            <button className="btn-catalog">VER CATÁLOGO</button>
          </Link>
          <h2>Comece agora a navegar</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
