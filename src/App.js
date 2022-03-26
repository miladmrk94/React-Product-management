import "./App.scss";
import ManagementBar from "./Components/ManagementBar/ManagementBar";
import React, { useState, useEffect } from "react";
import ProviderProducts from "./Components/ProviderProducts";
import ProductsList from "./Components/ProductsList";

function App() {
  return (
    <ProviderProducts>
      <div className="App">
        <ManagementBar />
        <ProductsList />
      </div>
    </ProviderProducts>
  );
}

export default App;
