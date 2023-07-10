import "./App.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Graph from "./components/Graph/Graph";
import BarChart from "./components/BarChart/BarChart";
import Sidebar from "./components/Sidebar/Sidebar";
import PieGraph from "./components/PieGraph/PieGraph";
import PieGraphCard from "./components/PieGraph/PieGraphCard";
import Sider from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Sider />
        <Dashboard />
        {/* <PieGraph /> */}
        {/* <PieGraphCard/> */}
      </div>
    </>
  );
}

export default App;
