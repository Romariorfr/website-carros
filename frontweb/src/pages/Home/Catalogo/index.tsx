import './styles.css';
import { ReactComponent as CarRed } from '../../../assets/images/car-red.svg';

const Catalogo = () => {
  return (
    <div className="catalog-container my-4">
      <div className="card-buscar">
        <input type="text" />
        <button>BUSCAR</button>
      </div>

      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <div className="card-product">
            <CarRed />
            <h1>Audi Supra TT</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, nisi
            </p>
            <button>COMPRAR</button>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-4">
          <div className="card-product">
            <CarRed />
            <h1>Audi Supra TT</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, nisi
            </p>
            <button>COMPRAR</button>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-4">
          <div className="card-product">
            <CarRed />
            <h1>Audi Supra TT</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, nisi
            </p>
            <button>COMPRAR</button>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-4">
          <div className="card-product">
            <CarRed />
            <h1>Audi Supra TT</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, nisi
            </p>
            <button>COMPRAR</button>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-4">
          <div className="card-product">
            <CarRed />
            <h1>Audi Supra TT</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, nisi
            </p>
            <button>COMPRAR</button>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-4">
          <div className="card-product">
            <CarRed />
            <h1>Audi Supra TT</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, nisi
            </p>
            <button>COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
