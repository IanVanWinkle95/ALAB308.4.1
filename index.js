let CSV = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
let cell = "";
let row = [];

// for (let i = 0; i < CSV.length; i++) {
//         if (CSV[i] === ",") {
//         row.push(cell);
//         cell = "";
//     } else if (CSV[i] === "\n") {
//         row.push(cell);
//         console.log(...row);
//         cell = "";
//         row = [];
//     } else {
//         cell += CSV[i];
//     }
// }
// if (cell) {
//     row.push(cell);
//     console.log(...row);
// }

// ---------------Part2-------------------

let data = [];

// for (let i = 0; i < CSV.length; i++) {
//     if (CSV[i] === ",") {
//         row.push(cell);
//         cell = "";
//     } else if (CSV[i] === "\n") {
//         row.push(cell);
//         data.push(row);
//         cell = "";
//         row = [];
//     } else {
//         cell += CSV[i];
//     }
// }

// if (cell) {
//     row.push(cell);
//     data.push(row);
// }

// let numberOfColumns = data[0].length;

// console.log("Number of Columns:", numberOfColumns);
// console.log("Two-dimensional array:", data);

// const cachedData = data;


// // ---------------Part3------------------

// for (let i = 0; i < CSV.length; i++) {
//     if (CSV[i] === ",") {
//         row.push(cell);
//         cell = "";
//     } else if (CSV[i] === "\n") {
//         row.push(cell);
//         data.push(row);
//         cell = "";
//         row = [];
//     } else {
//         cell += CSV[i];
//     }
// }

// if (cell) {
//     row.push(cell);
//     data.push(row);
// }

// let numberOfColumns = data[0].length;

// console.log("Original Two-dimensional array:", data);

// const headers = data[0].map(header => header.toLowerCase());
// const objectsArray = [];

// for (let i = 1; i < data.length; i++) {
//     let obj = {};
//     for (let j = 0; j < headers.length; j++) {
//         obj[headers[j]] = data[i][j];
//     }
//     objectsArray.push(obj);
// }

// console.log("Array of Objects:", objectsArray);

// const cachedObjects = objectsArray;

// ---------------Part4----------------------

// const objectsArray = [
//     { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//     { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//     { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//     { id: "98", name: "Bill", occupation: "Doctor's Assistant", age: "26" }
// ];

// objectsArray.pop();

// objectsArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// objectsArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

// console.log("Updated Array:", objectsArray);

// let totalAge = 0;
// let count = objectsArray.length;

// for (let i = 0; i < count; i++) {
//     totalAge += parseInt(objectsArray[i].age, 10);
// }

// const averageAge = totalAge / count;

// console.log("Average Age:", averageAge);

// ----------------------Part5-------------------------------

const objectsArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

function arrayToCSV(arr) {

    const headers = Object.keys(arr[0]);
    
    const csvRows = [];
    csvRows.push(headers.join(','));

    for (const row of arr) {
        const values = headers.map(header => {
            const escapedValue = (row[header] || '').toString().replaceedValue; 
        });
        csvRows.push(values.join(','));
    }

    
    return csvRows.join('\n');
}


const csvOutput = arrayToCSV(objectsArray);

console.log(csvOutput);