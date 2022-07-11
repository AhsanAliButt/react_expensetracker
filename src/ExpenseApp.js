// import Footer from "./components/Footer/Footer";
import Details from './components/Details/Details';
import MainApp from "./components/MainApp/MainApp";
import { Grid } from '@material-ui/core';
import {PushToTalkButton,PushToTalkButtonContainer,ErrorPanel} from "@speechly/react-ui";
  
import useStyles from "./styles";
const ExpenseApp = () => {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={4} className={classes.mobile}>
                    <Details title="Income" subheader="Powered By Ahsan Ali" />
                </Grid>
                <Grid item xs={12} sm={3} className={classes.main}>
                    <MainApp />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.desktop} >
                    <Details title="Income" subheader="Powered By Ahsan Ali" />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last} >
                    <Details title="Expense" />
                </Grid>
            </Grid>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </>
    )

}

export default ExpenseApp;



