import './App.css';
import MyForm from "./MyForm";
import "./formstyle.css";
function App() {
  return (
    <div className="App felx" >
      <div className='flex' style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
        <MyForm />
      </div>
    </div>
  );
}

export default App;
