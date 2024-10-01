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



"use client";

import { loginWithEmailPassword, signupWithEmailPassword } from "@/firebase/firebaseauth";
import { useState, ChangeEvent } from "react";

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

  const [expenseTracking, setExpenseTracking] = useState<{ title: string, amount: number, currency: string, category: string, date: string, note: string }[]>([]);

  // Input Handlers
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value));
  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedCurrency(e.target.value);
  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => setNote(e.target.value);
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  // Function to add expense
  const addExpense = () => {
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
  const sortedExpenses = expenseTracking.sort((a, b) => b.amount - a.amount);

  return (
    <>
      <h1>Expense Tracker</h1>
      
      {/* Expense Input */}
      <div>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={handleAmountChange}
        />
        <select value={selectedCurrency} onChange={handleCurrencyChange}>
          {currencies.map((currency, index) => (
            <option key={index} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <select value={category} onChange={handleCategoryChange}>
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
        />
        <input
          type="text"
          placeholder="Optional note"
          value={note}
          onChange={handleNoteChange}
        />

        {/* Add expense button */}
        <button onClick={addExpense}>Add Expense</button>
      </div>

      {/* Display Expenses */}
      <h2>Expenses</h2>
      {sortedExpenses.length > 0 ? (
        <ul>
          {sortedExpenses.map((expense, index) => (
            <li key={index}>
              <strong>{expense.title}</strong> - {expense.amount} {expense.currency} ({expense.category}) on {expense.date} {expense.note && `- Note: ${expense.note}`}
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses added yet.</p>
      )}

      {/* Auth Section */}
      <h1>User Authentication</h1>
      
      Roll Number:   
      <input
        type="text"
        value={rollNum}
        onChange={(e) => setRollNum(e.target.value)}
      /><br />

      Student Name:   
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      /><br />

      Email:   
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      Password:   
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Signup Button */}
      <button onClick={() => signupWithEmailPassword(email, password, rollNum, studentName)}>
        Signup
      </button>

      {/* Login Button */}
      <button onClick={() => loginWithEmailPassword(email, password)}>
        Login
      </button>
    </>
  );
}
