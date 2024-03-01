import './App.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';
import NavBar from './componentes/NavBar.jsx';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"¡Bienvenidos a Nuestro Sitio Web!"}/>
    </>
);
}

export default App;