import './styles.css';
import { ReactComponent as Car } from '../../assets/images/car.svg';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="card-container">
          <Car />
          <h1>O carro perfeito para você</h1>
          <h4>Conheça nossos carros e dê mais um passo na realização do seu sonho</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
