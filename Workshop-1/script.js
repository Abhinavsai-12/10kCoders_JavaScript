
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let balance = document.getElementById('balance');
const form = document.getElementById('form');
const des = document.getElementById('des');
const amt = document.getElementById('amt');
const ttype = document.getElementById('type');
const table = document.getElementById('tTable').getElementsByTagName('tbody')[0];
const PdfBtn = document.getElementById('pdf_btn');


function updateBal() {
    let balance = transactions.reduce((total, transaction) => {
        return transaction.type === 'income' 
            ? total + transaction.amount 
            : total - transaction.amount;
    }, 0);
    balance.innerHTML = `Balance: Rs ${balance}`;
}




