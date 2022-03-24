import { CardHeader, Card, Typography, Divider, CardContent, Grid } from '@mui/material'
import Form from './Form/Form';
import List from './List/List';
import useStyles from './styles';
import { Balance } from '@mui/icons-material';
import useTransactions from '../../useTransaction';

const MainApp = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker App" subheader="Powerd by Speechly" />
            <CardContent>
                <Typography variant="h5" align="center"> <Balance /> $50  </Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
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
    )
}

export default MainApp;