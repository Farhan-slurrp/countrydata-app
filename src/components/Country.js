import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, CardContent, Card } from "@material-ui/core";
import Modal from "./Modal";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Country = ({ country, loading, available }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
  if (!available || country.status === 404) {
    return <h1 style={{ textAlign: "center" }}>Country not found.</h1>;
  }
  return (
    <>
      {country.map((mycountry, index) => {
        const languages = [mycountry.languages];
        return (
          <div className="article" key={index}>
            <Card className={classes.root} variant="outlined">
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  className="card-content"
                  style={{ display: "flex", gap: "2rem" }}
                >
                  <img
                    src={mycountry.flag}
                    style={{ width: "160px", height: "120px" }}
                  />
                  <div className="typo">
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {mycountry.altSpellings[1]}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {mycountry.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {mycountry.capital}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {languages.map((language) => {
                        return `Languages: ${language[0].name}(${language[0].nativeName})`;
                      })}
                    </Typography>
                  </div>
                </div>
                <Modal country={mycountry} />
              </CardContent>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default Country;
