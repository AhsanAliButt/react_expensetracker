import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import useTransactions from "../../useTransaction";
import useStyles from './styles';
import { Chart as ChartJs,ArcElement,Tooltip,Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
ChartJs.register(Tooltip,Legend,ArcElement)

const Details = ({title,subheader}) => {
  const {total,chartData} = useTransactions(title);
  const classes = useStyles();
  return (

    <Card className={ title ==='Income' ? classes.income : classes.expense }>
    <CardHeader title={title} subheader={subheader} />
    <CardContent>
        <Typography variant="h5"> ${total} </Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  )
}

export default Details;