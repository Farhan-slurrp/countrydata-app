import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Country from "./components/Country";

function App() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [available, setAvailable] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      const data = await response.json();
      setLoading(false);
      setAvailable(true);
      setCountry(data);
    } catch (e) {
      setLoading(false);
      setAvailable(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
    console.log(country);
  };

  const handleChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  useEffect(() => {
    function onKeyup(e) {
      if (e.key === "Enter") {
        fetchData();
      }
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, [name]);

  return (
    <main>
      <Search
        handleChange={handleChange}
        name={name}
        handleClick={handleClick}
      />
      <Country country={country} loading={loading} available={available} />
    </main>
  );
}

export default App;
