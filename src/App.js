import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Quienes from './pages/quienes'
import Inscribite from './pages/inscribite'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          {/* <Route exact path='/' ><Home greeting="Esto va a ser el home" /></Route> */}
          <Route exact path='/' ><Quienes/></Route>
          <Route exact path='/quienes-somos' ><Quienes/></Route>
          <Route exact path='/academico' ><h1>estro es academico</h1></Route>
          <Route exact path='/inscribite' ><Inscribite/></Route>

        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
