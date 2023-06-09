import { Space } from "antd";
import "./App.css";
import { Header } from "./Components/Header";
import PageContent from "./Components/PageContent";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";
import SideMenu from "./Components/SideMenu";

function App() {
  const showmenus = useSelector((state) => state.showSideMenu);
  return (
    <div className="App">
      <Header />
      <Space className="smnpgc">
        {showmenus ? <SideMenu /> : null}
        <PageContent />
      </Space>
      <Footer />
    </div>
  );
}

export default App;
