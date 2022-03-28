import "./App.scss";
import ManagementBar from "./Components/ManagementBar/ManagementBar";
import React from "react";
import ProviderProducts from "./Components/ProviderProducts";
import ProductsList from "./Components/ProductsList";
import Header from "./Components/Header/Header";

function App() {
  return (
    <ProviderProducts>
      <div className="App">
        <Header />
        <div className="container">
          <section className="boxOne">
            <ProductsList />
          </section>
          <section className="boxTwo">
            <ManagementBar />
          </section>
        </div>
      </div>
    </ProviderProducts>
  );
}

export default App;
