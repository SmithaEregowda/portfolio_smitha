import Layout from "./componets/layout";
import './global.scss'
import './variables.scss'
import MainContentSection from "./mainsection";
function App() {
  return (
    <div className="appHomeContent">
      <Layout />
      <MainContentSection />
    </div>
  );
}

export default App;
