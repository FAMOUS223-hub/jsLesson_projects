const addExpensesBtn = document.querySelector('.add');
const myContainer = document.querySelector('.container');

function createExpenseModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalSpan = document.createElement('span');
    modalSpan.classList.add('modalSpan');

    const titleInput = document.createElement('input');
    titleInput.classList.add('myInput');
    titleInput.placeholder = 'Title of expenses';

    const dateInput = document.createElement('input');
    dateInput.classList.add('expenseDateInput');
    dateInput.type = 'date';
    dateInput.value = new Date().toISOString().split('T')[0];

    const expenseType = document.createElement('select');
    expenseType.classList.add('expenseType');

    const creditType = document.createElement('option');
    creditType.value = 'credit';
    creditType.textContent = 'Credit';

    const debitType = document.createElement('option');
    debitType.value = 'debit';
    debitType.textContent = 'Debit';

    const amountInput = document.createElement('input');
    amountInput.classList.add('amountToTrack');
    amountInput.type = 'number';
    amountInput.placeholder = 'Amount';

    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('descriptionInput');
    descriptionInput.placeholder = 'Description of the money';

    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('myButtons');

    const submitButton = document.createElement('button');
    submitButton.classList.add('addExpenseBtn');
    submitButton.textContent = 'Add Expenses';

    const closeModalButton = document.createElement('button');
    closeModalButton.classList.add('closeModal');
    closeModalButton.textContent = 'Close';

    const warningText = document.createElement('p');
    warningText.classList.add('warningText');
    warningText.textContent = 'Please fill in all the fields before adding an expense.';

    modal.appendChild(modalSpan);
    modalSpan.appendChild(titleInput);
    modalSpan.appendChild(dateInput);
    modalSpan.appendChild(amountInput);
    modalSpan.appendChild(descriptionInput);
    modalSpan.appendChild(expenseType);
    modalSpan.appendChild(warningText);
    expenseType.appendChild(creditType);
    expenseType.appendChild(debitType);
    modalSpan.appendChild(buttonWrapper);
    buttonWrapper.appendChild(submitButton);
    buttonWrapper.appendChild(closeModalButton);

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    submitButton.addEventListener('click', () => {
        if (
            titleInput.value.trim() !== '' &&
            dateInput.value !== '' &&
            amountInput.value.trim() !== '' &&
            descriptionInput.value.trim() !== ''
        ) {
            warningText.style.display = 'none';
            createExpense(
                titleInput.value.trim(),
                dateInput.value,
                amountInput.value.trim(),
                descriptionInput.value.trim(),
                expenseType.value
            );

            titleInput.value = '';
            dateInput.value = new Date().toISOString().split('T')[0];
            amountInput.value = '';
            descriptionInput.value = '';

            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        } else {
            warningText.style.display = 'block';
            titleInput.style.border = '2px solid red';
            dateInput.style.border = '2px solid red';
            amountInput.style.border = '2px solid red';
            descriptionInput.style.border = '2px solid red';

            setTimeout(() => {
                titleInput.style.border = '';
                dateInput.style.border = '';
                amountInput.style.border = '';
                descriptionInput.style.border = '';
            }, 2000);
        }

    });

    titleInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitButton.click();
        }
    });

    amountInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            submitButton.click();
        }
    });

    descriptionInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && event.ctrlKey) {
            event.preventDefault();
            submitButton.click();
        }
    });


    return modal;
}


const list = document.querySelector('.list')
function createExpense(title, date, amount, description, category){
    const myExpense = document.createElement('div');
        myExpense.classList.add('myExpense');
        myExpense.dataset.date = date;
        if (category === 'debit') {
            myExpense.classList.add('debit-card');
        } else {
            myExpense.classList.add('credit-card');
        }
        const myExpenseH2 = document.createElement('h2');
        myExpenseH2.classList.add('titleOfExpense');
        myExpenseH2.textContent = title;

    const newSpan = document.createElement('span');
    newSpan.classList.add('categoryy');
        if (category === 'debit') {
            newSpan.classList.add('debit-category');
            newSpan.textContent = 'Debit';
        } else {
            newSpan.classList.add('credit-category');
            newSpan.textContent = 'Credit';
        }
    
    const amountToTrack = document.createElement('p')
    amountToTrack.classList.add('amountToTrack')
    amountToTrack.textContent = amount;

    const expenseDate = document.createElement('p');
    expenseDate.classList.add('expenseDate');
    expenseDate.textContent = date;

    const desc = document.createElement('p')
    desc.classList.add('description')
    desc.textContent = description;

    const myDelBtn = document.createElement('img')
    myDelBtn.classList.add('delet')
    myDelBtn.src = 'img/close.svg';
    myDelBtn.alt = 'Delete expense';
    myDelBtn.addEventListener('click', () => myExpense.remove());


    list.appendChild(myExpense);
    myExpense.appendChild(myExpenseH2)
    myExpense.appendChild(newSpan)
    myExpense.appendChild(amountToTrack)
    myExpense.appendChild(expenseDate)
    myExpense.appendChild(desc)
    myExpense.appendChild(myDelBtn)


}

function addToExpenses() {
    const existingModal = document.querySelector('.modal');

    if (existingModal) {
        existingModal.style.display = 'flex';
        document.body.classList.add('modal-open');
        return;
    }

    const modal = createExpenseModal();
    myContainer.appendChild(modal);
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

addExpensesBtn.addEventListener('click', addToExpenses);

