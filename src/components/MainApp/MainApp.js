import {
  CardHeader,
  Card,
  Typography,
  Divider,
  CardContent,
  Grid,
} from "@mui/material";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";
import { Balance } from "@mui/icons-material";
import { useContext } from "react";
import { ExpenseTrackerContext } from "../../contex/context";

const MainApp = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  console.log("balance" + balance);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker App" subheader="Powerd by Ahsan Ali" />
      <CardContent>
        <Typography variant="h5" align="center">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.2rem",
            }}
          >
            {balance < 0 ? (
              <Balance fontSize="large" color="error" />
            ) : (
              <Balance fontSize="large" color="success" />
            )}
            {balance}
          </div>
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          {/* {infoCard} */} Speechly
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MainApp;
