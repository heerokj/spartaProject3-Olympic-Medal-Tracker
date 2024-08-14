import { useState } from "react";
import "./App.css";
import CountrySection from "./components/CountrySection";
import List from "./components/List";
import Header from "./components/Header";

const App = () => {
  const [countries, setCountries] = useState([]);

  return (
    <div className="container">
      <Header></Header>
      <CountrySection
        countries={countries}
        setCountries={setCountries}
      ></CountrySection>
      <List countries={countries} setCountries={setCountries}></List>
    </div>
  );
};

export default App;
