import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Layout/Main";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <Main>
        <Sidebar />
        <Content />
      </Main>
    </div>
  );
}

export default App;
