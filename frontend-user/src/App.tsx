import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header userName="Federico"></Header>
      <MainContent></MainContent>
    </div>
  );
};

export default App;
