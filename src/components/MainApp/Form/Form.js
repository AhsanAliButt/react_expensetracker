import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useContext, useState ,useEffect } from "react";
import { ExpenseTrackerContext } from "../../../contex/context";
import formatDate from "../../../utils/FormatDate";
import { v4 as uuidv4 } from 'uuid';
import useStyles from "./styles";
import { useSpeechContext } from "@speechly/react-client";
import { incomeCategories, expenseCategories } from "../../constants/catogries";
const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
}

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState)
    const { addTransaction } = useContext(ExpenseTrackerContext)
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
    const {segment}=useSpeechContext();
    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4(), }
        if (transaction.amount === "" || transaction.category === "" || transaction.date === "" || transaction.type === "") {
            alert("Plz fill all categories")
        } else {
            addTransaction(transaction)
            setFormData(initialState)
        }
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                       {segment && segment.words.map((w)=> w.value ).join(" ")}
                       </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                        value={formData.type}
                        label="Type"
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    >
                        <MenuItem value="Income"> Income </MenuItem>
                        <MenuItem value="Expense"> Expense </MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel> Category </InputLabel>
                    <Select label="Category" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {selectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)}
                    </Select>
                </FormControl>


            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
            </Grid>
            <Grid item xs={12}>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}> Create </Button>
            </Grid>
        </Grid>
    )
}


export default Form;