import './styles.css';
import { ReactComponent as Car } from '../../assets/images/car.svg';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="card-container">
          <Car/>
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carro e de mais um passo na realização de seu sonho
          </p>
        </div>

        <div className="catalog-card btn">
          <button className='btn-catalog'>VER CATÁLOGO</button>
          <h2>Comece agora a navegar</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
