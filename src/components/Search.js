import React from "react";
import { FormControl, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "& label.Mui-focused": {
      color: "black",
    },
  },
  button: {
    color: "white",
    backgroundColor: "#333",
    "&:hover": {
      backgroundColor: "#222",
    },
  },
});

const Search = ({ handleChange, name, handleClick }) => {
  const classes = useStyles();
  return (
    <section>
      <FormControl className="form">
        <div className="container">
          <TextField
            className={`input ${classes.input}`}
            id="outlined-black"
            label="Country Name"
            variant="outlined"
            value={name}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            disableElevation
            className={`btn ${classes.button}`}
            onClick={handleClick}
          >
            Search
          </Button>
        </div>
      </FormControl>
    </section>
  );
};

export default Search;
