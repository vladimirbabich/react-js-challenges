import './App.css';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.tsx';
function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
