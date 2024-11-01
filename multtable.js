/*
File: multtable.js
GUI Assignment: HW3 Creating an Interactive Dynamic Table
Julian Tran, UMass Lowell Computer Science, Julian_Tran@student.uml.edu
Copyright (c) 2024 by Julian. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
Created on October 29, 2024

This javascript file takes the values from the multtable.html file. 
It handles errors for invalid inputs and out of range values. It calls 
a function to generate the table with the four values as the parameters. 
The function creates a dynamic table with row and column headers the
appropriate results from the multiplicand and the multiplier in each cell.
*/
document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from input fields
    var colMin = parseInt(document.getElementById('colMin').value);
    var colMax = parseInt(document.getElementById('colMax').value);
    var rowMin = parseInt(document.getElementById('rowMin').value);
    var rowMax = parseInt(document.getElementById('rowMax').value);

    // Clear previous error message
    let errorMessage = document.getElementById('errorMessage');
    errorMessage.innerHTML = '';

    // Check for nonnumeric characters
    if (isNaN(colMin) || isNaN(colMax) || isNaN(rowMin) || isNaN(rowMax)) {
        errorMessage.innerHTML = "Please enter valid numbers.";
        return;
    }

    // Check if min values are greater than max values
    if (colMin >= colMax) {
        errorMessage.innerHTML = "The Minimum Column Value should be less than the Maximum Column Value.";
        return;
    }
    if (rowMin >= rowMax) {
        errorMessage.innerHTML = "The Minimum Row Value should be less than the Maximum Row Value.";
        return;
    }

    // Check min and max range limits
    if (colMin < -50 || colMax > 50) {
        errorMessage.innerHTML = "The Column Value range allowed is from -50 to 50.";
        return;
    }
    if (rowMin < -50 || rowMax > 50) {
        errorMessage.innerHTML = "The Row Value range allowed is from -50 to 50.";
        return;
    }
    
    // Generate the multiplication table
    generateMultiplicationTable(colMin, colMax, rowMin, rowMax);
});

function generateMultiplicationTable(minCol, maxCol, minRow, maxRow) {
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = ''; // Clear previous table

    // Create table element
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    // Create header row for columns
    let colHeaders = document.createElement('tr');
    let emptyHeader = document.createElement('th'); // Empty top-left cell
    colHeaders.appendChild(emptyHeader);

    for (let col = minCol; col <= maxCol; col++) {
        let th = document.createElement('th');
        th.textContent = col;
        colHeaders.appendChild(th);
    }
    tbody.appendChild(colHeaders);

    // Generate table rows and cells
    for (let row = minRow; row <= maxRow; row++) {
        let tr = document.createElement('tr');
        
        // Create header cell for row
        let rowHeader = document.createElement('th');
        rowHeader.textContent = row;
        tr.appendChild(rowHeader);
        
        for (let col = minCol; col <= maxCol; col++) {
            let td = document.createElement('td');
            td.textContent = row * col;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    tableContainer.appendChild(table);
}
