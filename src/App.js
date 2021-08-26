
import Footer from './components/Footer';
import Nav from './components/Nav';
import Fifth from './pages/Fifth';
import First from './pages/First';
import Fourth from './pages/Fourth';
import Second from './pages/Second';
import Third from './pages/Third';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
       <Nav/>
       <First/>
       <Second/>
       <Third/>
       <Fourth/>
       <Fifth/>
       <Footer/>
    </div>
  );
}

export default App;
