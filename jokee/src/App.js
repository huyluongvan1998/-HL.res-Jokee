import './App.scss';
import { Footer } from './Components/Footer/Footer';

import { Header } from './Components/Header/Header';
import JokeContainer from './Container/JokeContainer/JokeContainer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <JokeContainer />
      <Footer />
    </div>
  );
};

export default App;
