import React, { ReactFragment, useState } from "react";
import { Form, Button, Input } from "./SearchBar.styled";
import { ImSearch } from "react-icons/im";
import { notify } from "../../components";
import PropTypes from "prop-types";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (query.trim() === "") {
      notify("Please type at least one letter!");
      setQuery("");
      return;
    }

    onSubmit(query.toLowerCase().trim());

    setQuery("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Button type="submit">
        <ImSearch />
      </Button>
      <Input
        type="text"
        autocomplete="off"
        autoFocus
        value={query}
        placeholder="Search movies"
        onChange={handleInputChange}
      />
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
