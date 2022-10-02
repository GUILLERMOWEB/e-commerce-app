import useStore from "../store/index";
import "../App.css";
import "../Styles/Header.css";
const ProductNabvar = () => {
  const {
    OpenShoppingCart,
    ProductsAddedCart,
  } = useStore();
  return (
    <header className="header flex__between">
      
      <span className="header__title">< img className="iconoFunko" src="/Icon/FunkoNena.png" /> Funko</span>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
    <div className="container-fluid">
  
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-0 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contacto">Contacto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Nosotros">Nosotros</a>
          </li>
        </ul>
      
      </div>
    </div>
  </nav> 
      
      <div className="header__icon flex__center">
        <img
          className="header__iconImg"
          src="/Icon/iconCart.png"
          onClick={() => OpenShoppingCart()}
        />
        
        <span className="header__quantity flex__center">
          {ProductsAddedCart.length}
        </span>
        
      </div>
      
    </header>
  );
};

export default ProductNabvar;
