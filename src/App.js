import logo from './logo.svg';
import './App.css';
import GetProducts from './components/GetProducts';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';

function App() {
  return (
    <div className="App">
      <CreatePost/>
      <GetProducts/>
      <UpdatePost/>
    </div>
  );
}

export default App;
