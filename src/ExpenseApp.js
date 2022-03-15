// import Footer from "./components/Footer/Footer";
import { Grid } from "@mui/material";
import Details from './components/Details/Details';
import MainApp from "./components/MainApp/MainApp";
import useStyles from "./ExpenseStyles";
const ExpenseApp=()=>{
    const classes=useStyles();
return(
    <>
    <Grid container spacing={0} className={classes.grid} alignItems="center" justify="center" style={{height:'100vh'}}> 
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



