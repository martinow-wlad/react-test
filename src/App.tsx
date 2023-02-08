import { BrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
    </div>
  );
}

export default App;
