import './App.css';
import MoviesCarousel from './components/carousel/MoviesCarousel';
import Header from './components/header/Header';

const TITLE1 = "Action & Drama Movies";
const TITLE2 = "Funniest Comedy Movies of 2018";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MoviesCarousel backgroundColor='#19222C' title={TITLE1} />
        <MoviesCarousel backgroundColor='#121A21' title={TITLE2} mirror={true} />
      </header>
    </div>
  );
}

export default App;
