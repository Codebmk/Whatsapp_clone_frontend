import "./App.css";
import SideNav from "./components/SideNav";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <SideNav />
        <Chat />
      </div>
    </div>
  );
}

export default App;
