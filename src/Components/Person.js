import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PersonDetails from "./PersonDetails";

const Person = () => {
  const history = useNavigate();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(null);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const res = await axios.get(`https://swapi.dev/api/people/`);
      setData(res.data.results);
    };
    fetchPeople();
  }, []);

  const onChangeHandle = async (value) => {
    setQuery(value);
    let name = value.name;
    const res = await axios.get(`https://swapi.dev/api/people/?search=${name}`);

    setPersons(res.data.results);
    history(`/starwar/:${name}`);
  };

  return (
    <>
      <Container className="containerStyles">
        <Autocomplete
          id="people-demo"
          getOptionLabel={(data) => `${data.name}`}
          options={!data ? [{ label: "Loading..." }] : data}
          sx={{ width: 300 }}
          value={query}
          onChange={(event, newValue) => {
            onChangeHandle(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Star Wars Persons" />
          )}
          noOptionsText={"No results"}
        />

        <PersonDetails persons={persons} />
      </Container>
    </>
  );
};

export default Person;
