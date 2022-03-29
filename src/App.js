
import './App.css';
import Header from './Components/Header/Header';
import Article from './Components/Article/Article';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <h1 className='ornament-title'>Ornaments Shop</h1>
      <Home></Home>
      <Article></Article>
    </div>
  );
}

export default App;
