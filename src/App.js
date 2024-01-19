import './App.css';
import Navbar from './componants/Navbar';
import Content from './componants/Content';
import Container from './componants/Container';
import Flashcard from './componants/Flashcard';
import Foot from './componants/Foot';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Content></Content>
      <Container></Container>
      <Flashcard></Flashcard>
      <Foot></Foot>
    </div>
  );
}

export default App;
