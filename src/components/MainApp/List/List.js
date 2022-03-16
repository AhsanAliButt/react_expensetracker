import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core';
import {MoneyOff,Delete} from '@mui/icons-material';
import { useContext } from 'react';
import { ExpenseTrackerContext } from '../../../contex/context';
import useStyles from "./styles";


const List=()=> {
    const classes=useStyles();
    const globalState=useContext(ExpenseTrackerContext);
    console.log(globalState);
    const Transactions=[{
      id:1,type:"Income",category:"Salary",amount:50,date: "Tue Mar 15"
    },{
      id:2,type:"Expense",category:"Salary",amount:50,date: "Tue Mar 15"
    },{
      id:3,type:"Income",category:"Salary",amount:50,date: "Tue Mar 15"
    }];
  return (
    <MUIList dense={false} className={classes.list}>
      {Transactions.map((transaction)=>(
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={()=>{console.log("Will add leter")}}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

        </Slide>
      ))}
    </MUIList>
  )
}

export default List;