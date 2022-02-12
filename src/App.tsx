import "./App.css";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <div className="row">
        <div className="column-left">
          <Categories />
        </div>
        <div className="column"></div>
        <div className=".column-right"></div>
      </div>
    </>
  );
}
export default App;
