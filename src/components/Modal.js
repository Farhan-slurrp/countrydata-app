import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 25;

  return {
    top: `${top}%`,
    margin: "auto",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ country }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div
        className="flex"
        style={{ display: "flex", flexDirection: "column", gap: "2em" }}
      >
        <div className="data">
          <h2
            id="simple-modal-title"
            style={{ marginBottom: ".4em", textAlign: "center" }}
          >
            {country.name}
          </h2>
          <hr />
          <br />
          <p
            id="simple-modal-description"
            style={{ margin: ".3em 0" }}
          >{`Region: ${country.region}`}</p>
          <p
            id="simple-modal-description"
            style={{ margin: ".3em 0" }}
          >{`Subregion: ${country.subregion}`}</p>
          <p id="simple-modal-description" style={{ margin: ".3em 0" }}>
            {`Currency :
            ${country.currencies.map((currency) => {
              return `${currency.name} (${currency.code})`;
            })}
            `}
          </p>
          <p id="simple-modal-description" style={{ margin: ".3em 0" }}>
            {`Telephone code : +${country.callingCodes[0]}
            `}
          </p>
        </div>
        <Button
          variant="contained"
          onClick={handleClose}
          style={{
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#f11",
          }}
        >
          CLOSE
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleOpen}
        style={{ marginRight: "3em", fontWeight: "bold" }}
      >
        MORE INFO
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {body}
      </Modal>
    </div>
  );
}
