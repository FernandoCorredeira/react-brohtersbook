import Header from './components/Header';
import  styled  from 'styled-components';


const AppContainer = styled.div`
      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(20deg, #6dbd5c 35%, #a2f88f);


  li{
      list-style: none;
  }



  .options{
      display: flex;
  }
  .options-li{
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items:center ;
      text-align: center;
      height: 100% ;
      padding: 0 5px;
      cursor: pointer;
      min-width: 120px;
  }


`
function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
