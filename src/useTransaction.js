import { useContext } from "react";
import { ExpenseTrackerContext } from "./contex/context";
import {
  expenseCategories,
  incomeCategories,
  resetCategories,
} from "./components/constants/catogries";

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  console.log({ transactionsPerType });
  const total = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  // const balance = transactions.reduce((acc, currVal) => {
  //   if (currVal.type === "Income") {
  //     return acc + currVal.amount;
  //   } else {
  //     return acc - currVal.amount;
  //   }
  // });
  const categories = title === "Income" ? incomeCategories : expenseCategories;
  console.log({ transactionsPerType, total, categories });
  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) {
      category.amount += t.amount;
    }
  });
  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };
  return { total, chartData };
};

export default useTransactions;
