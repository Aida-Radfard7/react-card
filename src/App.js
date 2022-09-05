import './App.scss';
import { CardLeft } from './views/CardLeft';
import { CardRight } from './views/CardRight';

function App() {
  return (
    <div  className='app'>
      <CardLeft />
      <CardRight />
    </div>
  );
}

export default App;
