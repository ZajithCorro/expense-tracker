import './main.scss'

import { uuid } from './app/utilities'
import addTransactionDOM from './app/addTransaction'
import updateInfo from './app/updateInfo'

const $formTransaction = document.querySelector('.form-new-transaction')
const $inputTransaction = document.querySelector('#transaction')
const $inputAmount = document.querySelector('#amount')
const $listTransactions = document.querySelector('.list-history')

let transactions = []

function handlerDeleteTransaction() {
  const item = event.target.closest('li')
  const idItem = item.getAttribute('data-id')

  transactions = transactions.filter(
    (transaction) => transaction.uuid != idItem
  )

  $listTransactions.removeChild(item)
  updateInfo(transactions)
}

$formTransaction.addEventListener('submit', () => {
  event.preventDefault()

  const newTransaction = {
    uuid: uuid(),
    text: $inputTransaction.value,
    amount: parseInt($inputAmount.value),
  }

  transactions.push(newTransaction)
  addTransactionDOM(newTransaction, handlerDeleteTransaction)
  updateInfo(transactions)
  $formTransaction.reset()
})
