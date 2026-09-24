# Expense Tracker

A browser-based expense tracker built with HTML, CSS, and vanilla JavaScript. It lets you add dated credit or debit entries, review them in a visual list, and remove entries when they are no longer needed.

## How to Run

Open `/` in a web browser. No build tools, server, or external dependencies are required.

## How to Use

1. Click the green add button to open the expense form.
2. Enter a title, date, amount, and description.
3. Choose **Credit** for incoming money or **Debit** for spending.
4. Click **Add Expenses** to add the entry to the list.
5. Click the delete icon on an entry to remove it.
6. Use **Close** to dismiss the form without adding an entry.

The form also supports keyboard submission: press Enter in the title or amount field, or press Ctrl+Enter in the description field.

## Project Files

- `/` - Tracker layout, add control, date input, totals area, and expense list.
- `script.js` - Modal creation, form validation, expense rendering, and deletion.
- `styles.css` - Responsive layout, modal, expense cards, and credit/debit styling.
- `img/` - Add and delete icons.

## Current Limitations

- Expenses are stored in the page only and are lost when the page is refreshed.
- The date filter input is displayed but does not currently filter the list.
- The total, saved, and spent values are placeholder values and are not recalculated from the entries.
