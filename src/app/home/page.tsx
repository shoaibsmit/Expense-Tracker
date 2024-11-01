// "use client";

// import { app } from "@/firebase/firbaseconfig";
// import { auth } from "@/firebase/firebaseauth";
// import { db, fetchTodos, saveTodo } from "@/firebase/firebasefirestore";
// import { onAuthStateChanged } from "firebase/auth";
// import { collection, DocumentData, onSnapshot, query, Unsubscribe, where } from "firebase/firestore";
// import Link from "next/link";
// import { useEffect, useState } from "react"

// export default function Home() {
//     const [todo, setTodo] = useState('');
//     const [allTodos, setAllTodos] = useState<DocumentData[]>([]);


//     // useEffect(() => {
//     //     onAuthStateChanged(auth, (user) => {
//     //         if (user) {
//     //             fetchAllTodos();
//     //         }
//     //     })
//     // }, []);

//     // const fetchAllTodos = async () => {
//     //     let fetchedData: DocumentData[] = await fetchTodos();
//     //     console.log(fetchedData, 'inside home');
//     //     setAllTodos(fetchedData);
//     // }

//     useEffect(() => {
//         let detachOnAuthListiner = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 fetchTodosRealtime();
//             }
//         })

//         return () => {
//             if (readTodosRealtime) {
//                 console.log("Component Unmount.");
//                 readTodosRealtime();
//                 detachOnAuthListiner();
//             }
//         }

//     }, [])

//     let readTodosRealtime: Unsubscribe;

//     const fetchTodosRealtime = () => {
//         let collectionRef = collection(db, "todos");
//         let currentUserUID = auth.currentUser?.uid;
//         let condition = where("uid", "==", currentUserUID);
//         let q = query(collectionRef, condition);
//         let allTodosClone = [...allTodos];

//         readTodosRealtime = onSnapshot(q, (querySnapshot) => {
//             querySnapshot.docChanges().forEach((change) => {
//                 if (change.type === "added") {
//                     let todo = change.doc.data();
//                     todo.id = change.doc.id;
//                     allTodosClone.push(todo);
//                     setAllTodos([...allTodosClone])
//                 }
//                 if (change.type === "modified") {
//                     console.log('data modified');
//                 }
//                 if (change.type === "removed") {
//                 }
//             })
//         })



//     }

//     return (
//         <>
//             <Link href={"./about"}>About</Link>
//             <h1>Hello Home</h1>
//             <input type="text"
//                 value={todo}
//                 onChange={(e) => { setTodo(e.target.value) }}
//             />
//             <button onClick={() => {
//                 saveTodo(todo);
//                 setTodo('');
//             }}>Add New Todo</button>

//             {
//                 allTodos.length > 0 ?
//                     allTodos.map(({ todo }) => <h1>{todo}</h1>) :
//                     <></>
//             }

//         </>
//     )
// }








"use client";

import { app } from "@/firebase/firbaseconfig";
import { auth } from "@/firebase/firebaseauth";
import { db, fetchTodos, saveTodo } from "@/firebase/firebasefirestore";
import { onAuthStateChanged } from "firebase/auth";
import { collection, DocumentData, onSnapshot, query, Unsubscribe, where } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState, ChangeEvent } from "react";

// Example list of world currencies and items
const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'INR', 'CNY', 'ZAR'];
const items = ['Bills', 'Travel', 'Luxuries', 'Food', 'Rent'];

export default function Home() {
    // State for form inputs
    const [todo, setTodo] = useState('');
    const [allTodos, setAllTodos] = useState<DocumentData[]>([]);
    const [amount, setAmount] = useState<number>(0);
    const [selectedCurrency, setSelectedCurrency] = useState<string>(currencies[0]);
    const [selectedItem, setSelectedItem] = useState<string>(items[0]);

    // State to track expenses by category
    const [expenseTracking, setExpenseTracking] = useState<{ item: string, amount: number }[]>([]);

    let readTodosRealtime: Unsubscribe;

    useEffect(() => {
        let detachOnAuthListener = onAuthStateChanged(auth, (user) => {
            if (user) {
                fetchTodosRealtime();
            }
        });

        return () => {
            if (readTodosRealtime) {
                console.log("Component Unmount.");
                readTodosRealtime();
                detachOnAuthListener();
            }
        };
    }, []);

    const fetchTodosRealtime = () => {
        let collectionRef = collection(db, "todos");
        let currentUserUID = auth.currentUser?.uid;
        let condition = where("uid", "==", currentUserUID);
        let q = query(collectionRef, condition);
        let allTodosClone = [...allTodos];

        readTodosRealtime = onSnapshot(q, (querySnapshot) => {
            querySnapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    let todo = change.doc.data();
                    todo.id = change.doc.id;
                    allTodosClone.push(todo);
                    setAllTodos([...allTodosClone]);
                }
                if (change.type === "modified") {
                    console.log('data modified');
                }
                if (change.type === "removed") {
                    console.log('data removed');
                }
            });
        });
    };

    // Handle input changes
    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value));
    const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedCurrency(e.target.value);
    const handleItemChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectedItem(e.target.value);

    // Function to save expense and track it
    const addExpense = () => {
        saveTodo(`${selectedItem}: ${amount} ${selectedCurrency}`);

        // Update expense tracking
        const existingItem = expenseTracking.find(exp => exp.item === selectedItem);
        if (existingItem) {
            existingItem.amount += amount;
            setExpenseTracking([...expenseTracking]);
        } else {
            setExpenseTracking([...expenseTracking, { item: selectedItem, amount }]);
        }

        setTodo('');
        setAmount(0);
    };

    // Sort expenses by amount, from highest to lowest
    const sortedExpenses = expenseTracking.sort((a, b) => b.amount - a.amount);

    return (
        <>
            <Link href={"./about"}>About</Link>
            <h1>Expense Tracker</h1>

            {/* Input for adding an expense */}
            <input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={handleAmountChange}
            />

            {/* Currency dropdown */}
            <select value={selectedCurrency} onChange={handleCurrencyChange}>
                {currencies.map((currency, index) => (
                    <option key={index} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>

            {/* Item dropdown */}
            <select value={selectedItem} onChange={handleItemChange}>
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>

            {/* Button to add the expense */}
            <button onClick={addExpense}>Add Expense</button>

            {/* Display all expenses sorted from highest to lowest */}
            <h2>Expenses</h2>
            {sortedExpenses.length > 0 ? (
                <ul>
                    {sortedExpenses.map((expense, index) => (
                        <li key={index}>
                            {expense.item}: {expense.amount} {selectedCurrency}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No expenses added yet.</p>
            )}
        </>
    );
}
