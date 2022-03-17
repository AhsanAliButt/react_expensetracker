// import Footer from "./components/Footer/Footer";
import Details from './components/Details/Details';
import MainApp from "./components/MainApp/MainApp";
import useStyles from "./ExpenseStyles";
import { Grid } from "@mui/material";
const ExpenseApp=()=>{
    const classes=useStyles();
return(
    <>
    <Grid container className={classes.grid} spacing={0} alignItems="center" justify="center" style={{height:'100vh'}}> 
        <Grid item xs={12} sm={4} >
            <Details title="income" />
            </Grid>
            <Grid item xs={12} sm={4} >
           <MainApp />
            </Grid>
            <Grid item xs={12} sm={4} >
            <Details title="expense" />
            </Grid>
    </Grid>
    </>
)

}

export default ExpenseApp;



