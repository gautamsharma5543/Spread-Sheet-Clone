# Google Sheets Clone

This project is a web application that mimics the user interface and core functionalities of Google Sheets, focusing on mathematical and data quality functions, data entry, and key UI interactions.

## Features

1. **Spreadsheet Interface**
   - Mimics Google Sheets UI with a toolbar, formula bar, and cell structure.
   - Implements drag functionality for cell content, formulas, and selections.
   - Supports cell dependencies, ensuring formulas update when related cells change.
   - Basic cell formatting options (bold, italics, font size, color).
   - Ability to add, delete, and resize rows and columns.

2. **Mathematical Functions**
   - Implements the following functions:
     - `SUM`: Calculates the sum of a range of cells.
     - `AVERAGE`: Calculates the average of a range of cells.
     - `MAX`: Returns the maximum value from a range of cells.
     - `MIN`: Returns the minimum value from a range of cells.
     - `COUNT`: Counts the number of cells containing numerical values in a range.

3. **Data Quality Functions**
   - Implements the following functions:
     - `TRIM`: Removes leading and trailing whitespace from a cell.
     - `UPPER`: Converts the text in a cell to uppercase.
     - `LOWER`: Converts the text in a cell to lowercase.
     - `REMOVE_DUPLICATES`: Removes duplicate rows from a selected range.
     - `FIND_AND_REPLACE`: Allows users to find and replace specific text within a range of cells.

4. **Data Entry and Validation**
   - Users can input various data types (numbers, text, dates).
   - Basic data validation checks ensure numeric cells only contain numbers.

5. **Testing**
   - Users can test the implemented functions with their own data.
   - Results of function execution are displayed clearly.

## Bonus Features
- Additional mathematical and data quality functions.
- Support for complex formulas and cell referencing (relative and absolute references).
- Ability to save and load spreadsheets.
- Data visualization capabilities (charts, graphs).

## Evaluation Criteria
- Fidelity to Google Sheets UI.
- Functionality and completeness of implemented features.
- Accuracy of mathematical and data quality functions.
- Usability and intuitiveness of the user interface.
- Code quality and maintainability.
- Implementation of bonus features.

## Tech Stack
- **Frontend**: React for building the user interface.
- **TypeScript**: For type safety and better development experience.
- **CSS**: For styling the application to closely resemble Google Sheets.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd google-sheets-clone
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Data Structures
- The application uses a grid-like structure to represent the spreadsheet, where each cell can hold different data types and formulas.
- State management is handled using React's state hooks to manage cell values, formatting, and dependencies.

This README provides a comprehensive overview of the Google Sheets Clone project, its features, tech stack, and setup instructions for developers and users.