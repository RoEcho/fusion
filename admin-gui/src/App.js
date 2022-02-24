import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./views/Home";
// import Navigation from "./views/Navigation";
// import Login from "./views/Login";
// import { Button } from 'antd';
import { useRoutes } from "react-router-dom";

import routes from "./router";
import "./App.less";


function App() {
  let element = useRoutes(routes);

  return (
    <div className="App">
      {/* <Button type="primary">Button</Button> */}
      {/* <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="login" element={<Login />} />
      </Routes> */}
      {element}
    </div>
  );
}

export default App;
