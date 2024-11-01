// "use client";

// import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseauth";
// import { useState } from "react";
// // import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// // import { app } from "@/firebase/firbaseconfig";


// export default function Home() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rollNum, setRollNum] = useState("");
//   const [studentName, setStudentName] = useState("");


//   // const auth = getAuth(app);

//   // const signup = async () => {
//   //   try{
//   //     let userCredential = await createUserWithEmailAndPassword(auth, email, password);
//   //   }catch(e){
//   //     console.log(e)
//   //   }


//   // }

//   return (
//     <>
//       <h1>Hello Auth</h1>
//       Roll Number:   <input type="email"
//         value={rollNum}
//         onChange={(e) => { setRollNum(e.target.value) }}
//       /><br />

//       Student Name:   <input type="email"
//         value={studentName}
//         onChange={(e) => { setStudentName(e.target.value) }}
//       /><br />


//       Email:   <input type="email"
//         value={email}
//         onChange={(e) => { setEmail(e.target.value) }}
//       /><br />

//       Password:   <input type="password"
//         value={password}
//         onChange={(e) => { setPassword(e.target.value) }}
//       />

//       <button onClick={
//         () => { signupWithEmailPassword(email, password, rollNum, studentName) }

//         // signup

//       }
//       >
//         Signup
//       </button>

//       <button onClick={
//         () => { loginWithEmailPassword(email, password) }}
//       >
//         Login
//       </button>

//     </>
//   );
// }









// "use client";

// import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseauth";
// import { useState, ChangeEvent } from "react";

// // Example list of world currencies and expense categories
// const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'INR', 'CNY', 'ZAR'];
// const items = ['Bills', 'Travel', 'Luxuries', 'Food', 'Rent'];

// export default function Home() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rollNum, setRollNum] = useState('');
//   const [studentName, setStudentName] = useState('');

//   // State for expense tracker
//   const [amount, setAmount] = useState<number>(0);
//   const [selectedCurrency, setSelectedCurrency] = useState<string>(currencies[0]);
//   const [selectedItem, setSelectedItem] = useState<string>(items[0]);

//   const [expenseTracking, setExpenseTracking] = useState<{ item: string, amount: number }[]>([]);

//   // Input Handlers
//   const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value));
//   const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedCurrency(e.target.value);
//   const handleItemChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedItem(e.target.value);

//   // Function to add expense
//   const addExpense = () => {
//     const newExpense = `${selectedItem}: ${amount} ${selectedCurrency}`;
    
//     // Update expense tracking
//     const existingItem = expenseTracking.find(exp => exp.item === selectedItem);
//     if (existingItem) {
//       existingItem.amount += amount;
//       setExpenseTracking([...expenseTracking]);
//     } else {
//       setExpenseTracking([...expenseTracking, { item: selectedItem, amount }]);
//     }

//     setAmount(0); // Reset amount after adding
//   };

//   // Sort expenses by amount, from highest to lowest
//   const sortedExpenses = expenseTracking.sort((a, b) => b.amount - a.amount);

//   return (
//     <>
//       <h1>Expense Tracker</h1>
      
//       {/* Expense Input */}
//       <div>
//         <input
//           type="number"
//           placeholder="Enter amount"
//           value={amount}
//           onChange={handleAmountChange}
//         />
//         <select value={selectedCurrency} onChange={handleCurrencyChange}>
//           {currencies.map((currency, index) => (
//             <option key={index} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//         <select value={selectedItem} onChange={handleItemChange}>
//           {items.map((item, index) => (
//             <option key={index} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>

//         {/* Add expense button */}
//         <button onClick={addExpense}>Add Expense</button>
//       </div>

//       {/* Display Expenses */}
//       <h2>Expenses</h2>
//       {sortedExpenses.length > 0 ? (
//         <ul>
//           {sortedExpenses.map((expense, index) => (
//             <li key={index}>
//               {expense.item}: {expense.amount} {selectedCurrency}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No expenses added yet.</p>
//       )}

//       {/* Auth Section */}
//       <h1>User Authentication</h1>
      
//       Roll Number:   
//       <input
//         type="text"
//         value={rollNum}
//         onChange={(e) => setRollNum(e.target.value)}
//       /><br />

//       Student Name:   
//       <input
//         type="text"
//         value={studentName}
//         onChange={(e) => setStudentName(e.target.value)}
//       /><br />

//       Email:   
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       /><br />

//       Password:   
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       {/* Signup Button */}
//       <button onClick={() => signupWithEmailPassword(email, password, rollNum, studentName)}>
//         Signup
//       </button>

//       {/* Login Button */}
//       <button onClick={() => loginWithEmailPassword(email, password)}>
//         Login
//       </button>
//     </>
//   );
// }


















// //third code.


// "use client";

// import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseauth";
// import { useState, ChangeEvent } from "react";

// // Example list of world currencies and expense categories
// const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'INR', 'CNY', 'ZAR'];
// const categories = ['Food', 'Transport', 'Bills', 'Education', 'Investments', 'Luxuries', 'Other'];

// export default function Home() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rollNum, setRollNum] = useState('');
//   const [studentName, setStudentName] = useState('');

//   // State for expense tracker
//   const [title, setTitle] = useState(''); // Title of the expense
//   const [amount, setAmount] = useState<number>(0);
//   const [selectedCurrency, setSelectedCurrency] = useState<string>(currencies[0]);
//   const [category, setCategory] = useState<string>(categories[0]);
//   const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]); // Default to current date
//   const [note, setNote] = useState<string>(''); // Optional note

//   const [expenseTracking, setExpenseTracking] = useState<{ title: string, amount: number, currency: string, category: string, date: string, note: string }[]>([]);

//   // Input Handlers
//   const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value));
//   const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedCurrency(e.target.value);
//   const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);
//   const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
//   const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => setNote(e.target.value);
//   const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

//   // Function to add expense
//   const addExpense = () => {
//     const newExpense = {
//       title,
//       amount,
//       currency: selectedCurrency,
//       category,
//       date,
//       note
//     };

//     // Update expense tracking
//     setExpenseTracking([...expenseTracking, newExpense]);

//     // Reset fields after adding
//     setTitle('');
//     setAmount(0);
//     setSelectedCurrency(currencies[0]);
//     setCategory(categories[0]);
//     setDate(new Date().toISOString().split('T')[0]); // Reset to current date
//     setNote('');
//   };

//   // Sort expenses by amount, from highest to lowest
//   const sortedExpenses = expenseTracking.sort((a, b) => b.amount - a.amount);

//   return (
//     <>
//       <h1>Expense Tracker</h1>
      
//       {/* Expense Input */}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter title"
//           value={title}
//           onChange={handleTitleChange}
//         />
//         <input
//           type="number"
//           placeholder="Enter amount"
//           value={amount}
//           onChange={handleAmountChange}
//         />
//         <select value={selectedCurrency} onChange={handleCurrencyChange}>
//           {currencies.map((currency, index) => (
//             <option key={index} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//         <select value={category} onChange={handleCategoryChange}>
//           {categories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//         <input
//           type="date"
//           value={date}
//           onChange={handleDateChange}
//         />
//         <input
//           type="text"
//           placeholder="Optional note"
//           value={note}
//           onChange={handleNoteChange}
//         />

//         {/* Add expense button */}
//         <button onClick={addExpense}>Add Expense</button>
//       </div>

//       {/* Display Expenses */}
//       <h2>Expenses</h2>
//       {sortedExpenses.length > 0 ? (
//         <ul>
//           {sortedExpenses.map((expense, index) => (
//             <li key={index}>
//               <strong>{expense.title}</strong> - {expense.amount} {expense.currency} ({expense.category}) on {expense.date} {expense.note && `- Note: ${expense.note}`}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No expenses added yet.</p>
//       )}

//       {/* Auth Section */}
//       <h1>User Authentication</h1>
      
//       Roll Number:   
//       <input
//         type="text"
//         value={rollNum}
//         onChange={(e) => setRollNum(e.target.value)}
//       /><br />

//       Student Name:   
//       <input
//         type="text"
//         value={studentName}
//         onChange={(e) => setStudentName(e.target.value)}
//       /><br />

//       Email:   
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       /><br />

//       Password:   
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       {/* Signup Button */}
//       <button onClick={() => signupWithEmailPassword(email, password, rollNum, studentName)}>
//         Signup
//       </button>

//       {/* Login Button */}
//       <button onClick={() => loginWithEmailPassword(email, password)}>
//         Login
//       </button>
//     </>
//   );
// }





























//4th code



// "use client";

// import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseauth";
// import { useState, ChangeEvent } from "react";

// // Example list of world currencies and expense categories
// const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'INR', 'CNY', 'ZAR'];
// const categories = ['Food', 'Transport', 'Bills', 'Education', 'Investments', 'Luxuries', 'Other'];

// export default function Home() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rollNum, setRollNum] = useState('');
//   const [studentName, setStudentName] = useState('');

//   // State for expense tracker
//   const [title, setTitle] = useState(''); // Title of the expense
//   const [amount, setAmount] = useState<number>(0);
//   const [selectedCurrency, setSelectedCurrency] = useState<string>(currencies[0]);
//   const [category, setCategory] = useState<string>(categories[0]);
//   const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]); // Default to current date
//   const [note, setNote] = useState<string>(''); // Optional note

//   const [expenseTracking, setExpenseTracking] = useState<{ title: string, amount: number, currency: string, category: string, date: string, note: string }[]>([]);

//   // Input Handlers
//   const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value));
//   const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedCurrency(e.target.value);
//   const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);
//   const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
//   const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => setNote(e.target.value);
//   const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

//   // Function to add expense
//   const addExpense = () => {
//     const newExpense = {
//       title,
//       amount,
//       currency: selectedCurrency,
//       category,
//       date,
//       note
//     };

//     // Update expense tracking
//     setExpenseTracking([...expenseTracking, newExpense]);

//     // Reset fields after adding
//     setTitle('');
//     setAmount(0);
//     setSelectedCurrency(currencies[0]);
//     setCategory(categories[0]);
//     setDate(new Date().toISOString().split('T')[0]); // Reset to current date
//     setNote('');
//   };

//   // Sort expenses by amount, from highest to lowest
//   const sortedExpenses = expenseTracking.sort((a, b) => b.amount - a.amount);

//   return (
//     <>
//       <h1>Expense Tracker</h1>
      
//       {/* Expense Input */}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter title"
//           value={title}
//           onChange={handleTitleChange}
//         />
//         <input
//           type="number"
//           placeholder="Enter amount"
//           value={amount}
//           onChange={handleAmountChange}
//         />
//         <select value={selectedCurrency} onChange={handleCurrencyChange}>
//           {currencies.map((currency, index) => (
//             <option key={index} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//         <select value={category} onChange={handleCategoryChange}>
//           {categories.map((cat, index) => (
//             <option key={index} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//         <input
//           type="date"
//           value={date}
//           onChange={handleDateChange}
//         />
//         <input
//           type="text"
//           placeholder="Optional note"
//           value={note}
//           onChange={handleNoteChange}
//         />

//         {/* Add expense button */}
//         <button onClick={addExpense}>Add Expense</button>
//       </div>

//       {/* Display Expenses */}
//       <h2>Expenses</h2>
//       {sortedExpenses.length > 0 ? (
//         <ul>
//           {sortedExpenses.map((expense, index) => (
//             <li key={index}>
//               <strong>{expense.title}</strong> - {expense.amount} {expense.currency} ({expense.category}) on {expense.date} {expense.note && `- Note: ${expense.note}`}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No expenses added yet.</p>
//       )}

//       {/* Auth Section */}
//       <h1>User Authentication</h1>
      
//       Roll Number:   
//       <input
//         type="text"
//         value={rollNum}
//         onChange={(e) => setRollNum(e.target.value)}
//       /><br />

//       Student Name:   
//       <input
//         type="text"
//         value={studentName}
//         onChange={(e) => setStudentName(e.target.value)}
//       /><br />

//       Email:   
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       /><br />

//       Password:   
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       {/* Signup Button */}
//       <button onClick={() => signupWithEmailPassword(email, password, rollNum, studentName)}>
//         Signup
//       </button>

//       {/* Login Button */}
//       <button onClick={() => loginWithEmailPassword(email, password)}>
//         Login
//       </button>
//     </>
//   );
// }






















"use client";

import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseauth";
import { useState, ChangeEvent, useEffect } from "react";
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

// Example list of world currencies and expense categories
const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'INR', 'CNY', 'ZAR'];
const categories = ['Food', 'Transport', 'Bills', 'Education', 'Investments', 'Luxuries', 'Other'];

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rollNum, setRollNum] = useState('');
  const [studentName, setStudentName] = useState('');

  // State for expense tracker
  const [title, setTitle] = useState(''); // Title of the expense
  const [amount, setAmount] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>(currencies[0]);
  const [category, setCategory] = useState<string>(categories[0]);
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]); // Default to current date
  const [note, setNote] = useState<string>(''); // Optional note

  const [expenseTracking, setExpenseTracking] = useState<{
    title: string,
    amount: number,
    currency: string,
    category: string,
    date: string,
    note: string
  }[]>([]);

  // Input Handlers
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value));
  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedCurrency(e.target.value);
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => setNote(e.target.value);
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  // Function to add expense
  const addExpense = () => {
    if (!title || !amount || !category || !date) {
      alert("Please fill in all required fields.");
      return;
    }

    const newExpense = {
      title,
      amount,
      currency: selectedCurrency,
      category,
      date,
      note
    };

    // Update expense tracking
    setExpenseTracking([...expenseTracking, newExpense]);

    // Reset fields after adding
    setTitle('');
    setAmount(0);
    setSelectedCurrency(currencies[0]);
    setCategory(categories[0]);
    setDate(new Date().toISOString().split('T')[0]); // Reset to current date
    setNote('');
  };

  // Sort expenses by amount, from highest to lowest
  const sortedExpenses = [...expenseTracking].sort((a, b) => b.amount - a.amount);

  // Calculate Total Expenses
  const calculateTotalExpenses = () => {
    // Create a map to store total per currency
    const totals: { [key: string]: number } = {};

    expenseTracking.forEach(expense => {
      if (totals[expense.currency]) {
        totals[expense.currency] += expense.amount;
      } else {
        totals[expense.currency] = expense.amount;
      }
    });

    return totals;
  };

  const totalExpenses = calculateTotalExpenses();

  // Generate data for Pie Chart
  const getPieChartData = () => {
    const categoryTotals: { [key: string]: number } = {};

    // Initialize categories
    categories.forEach(cat => {
      categoryTotals[cat] = 0;
    });

    // Sum amounts per category
    expenseTracking.forEach(expense => {
      if (categoryTotals[expense.category] !== undefined) {
        categoryTotals[expense.category] += expense.amount;
      } else {
        categoryTotals['Other'] += expense.amount;
      }
    });

    return {
      labels: categories,
      datasets: [
        {
          label: 'Expenses by Category',
          data: categories.map(cat => categoryTotals[cat]),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8A2BE2',
            '#00FA9A',
            '#FF7F50',
            '#CCCCCC',
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#8A2BE2',
            '#00FA9A',
            '#FF7F50',
            '#CCCCCC',
          ],
        },
      ],
    };
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Expense Tracker</h1>
      
      {/* Expense Input */}
      <div style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <h2>Add Expense</h2>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={handleTitleChange}
            style={{ marginBottom: '10px', padding: '8px' }}
          />
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
            style={{ marginBottom: '10px', padding: '8px' }}
          />
          <select value={selectedCurrency} onChange={handleCurrencyChange} style={{ marginBottom: '10px', padding: '8px' }}>
            {currencies.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <select value={category} onChange={handleCategoryChange} style={{ marginBottom: '10px', padding: '8px' }}>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            style={{ marginBottom: '10px', padding: '8px' }}
          />
          <input
            type="text"
            placeholder="Optional note"
            value={note}
            onChange={handleNoteChange}
            style={{ marginBottom: '10px', padding: '8px' }}
          />

          {/* Add expense button */}
          <button onClick={addExpense} style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
            Add Expense
          </button>
        </div>
      </div>

      {/* Total Expenses Box */}
      <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px', maxWidth: '400px' }}>
        <h2>Total Expenses</h2>
        {Object.keys(totalExpenses).length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {Object.entries(totalExpenses).map(([currency, total], index) => (
              <li key={index} style={{ fontSize: '1.2em', marginBottom: '5px' }}>
                <strong>{currency}:</strong> {total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </li>
            ))}
          </ul>
        ) : (
          <p>No expenses added yet.</p>
        )}
      </div>

      {/* Display Expenses */}
      <div style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
        <h2>Expenses</h2>
        {sortedExpenses.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {sortedExpenses.map((expense, index) => (
              <li key={index} style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #eee' }}>
                <strong>{expense.title}</strong> - {expense.amount} {expense.currency} ({expense.category}) on {expense.date}
                {expense.note && <span> - Note: {expense.note}</span>}
              </li>
            ))}
          </ul>
        ) : (
          <p>No expenses added yet.</p>
        )}
      </div>

      {/* Pie Chart */}
      <div style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', maxWidth: '600px' }}>
        <h2>Expenses by Category</h2>
        {expenseTracking.length > 0 ? (
          <Pie data={getPieChartData()} />
        ) : (
          <p>No data to display.</p>
        )}
      </div>

      {/* Auth Section */}
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}>
        <h2>User Authentication</h2>

        <div style={{ marginBottom: '10px' }}>
          <label>Roll Number:</label><br />
          <input
            type="text"
            value={rollNum}
            onChange={(e) => setRollNum(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Student Name:</label><br />
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* Signup and Login Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => signupWithEmailPassword(email, password, rollNum, studentName)} style={{ padding: '10px', backgroundColor: '#2196F3', color: 'white', border: 'none', cursor: 'pointer', width: '48%' }}>
            Signup
          </button>
          <button onClick={() => loginWithEmailPassword(email, password)} style={{ padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', width: '48%' }}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
