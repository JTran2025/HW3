# HW3

## Contact
Name: Julian Tran
Email: Julian_Tran@student.uml.edu
COMP 4610 GUI I

https://jtran2025.github.io/HW3/multtable.html
https://github.com/JTran2025/HW3

## Description
This project uses JavaScript to create a scrollable multiplication table completely dynamically based on the parameters entered in an HTML form.

## Features
In the HTML file, I created a header for the title of the website and a subheader for directions. I used the form element to create input and labels for the input fields that accept the starting and ending numbers for the horizontal and vertical axes of the multiplication table. I used a div element for the error handling and another div element for the table. At the bottom of the body, I used the script element to import the external JavaScript file.

In the CSS file, I started with declaring the font type and adding color to the header. I changed the submission button to green and changed it to a darker green when hovered over. I made the maximum height of the table to be 300 pixels and be scrollable using overflow: auto. Next, I used position: sticky to make the row and column headers to be fixed on the table. I made the column header and row header to be blue and colors of the cells to alternate light blue on the rows for better readability.

In the JavaScript file, I used the getElementId to get the HTML form, an event listener for the submission button, and used preventDefault to prevent the default behavior of reloading the page. I created variables for the column minimums and maximums and row minimums and maximums by using getElementId().value. Next, I test for non-numeric values, minimum values greater than maximum values, and values outside of -50 to 50. It handles the errors by sending a message to the errorMessage id by using innerHTML. It finally calls the multiplication table generator function that takes the column minimum, column maximum, row minimum, and row maximum as parameters.
The function begins getting the element id of the table and clearing the previous table. Using the createElement function, it creates a table and table body. Next, it uses a for-loop to create the column headers of the table by creating th elements and appending them. Afterwards, it uses a nested for-loop to create table rows and row headers in the first loop and the multiplication for the table data in the nested loop. These get added to the table by using the appendChild function.

## Issues
I believe I made everything function correctly. However, I had some issues making the blank upper-left cell to remain fixed when scrolling up and down.

## Acknowledgements
Dr. Wenjin Zhou
Zuriel Pagan
