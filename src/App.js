import './App.css';
import { GlobalStyle } from './styles';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import HomePage from './views/HomePage';

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <GlobalStyle />
      <HomePage />
    </div>
  );
}

export default App;
