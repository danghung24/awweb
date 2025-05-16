import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./assets/styels/Global";
import MainLayout from "./components/layouts/Mainlayout"
import Home from "./components/pages/Home/Home";
import Mac from "./components/pages/Mac/Mac";


const App = () => {

  return (
    <>
      <GlobalStyles />
      <div className="app">
        <Routes>
          {/* Apply MainLayout */}
          <Route element={<MainLayout />}>
            <Route index element={<Home />} /> 
            <Route path="/Home" element={<Home />} />
            <Route path="/mac" element={<Mac />} />
            
          </Route>

          {/* Not layout applied */}
          <Route path="*" element={<div>Page Error Not Found</div>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
