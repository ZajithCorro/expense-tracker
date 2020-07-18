import './main.scss'

import { uuid } from './app/utilities'
import addTransactionDOM from './app/addTransaction'
import updateInfo from './app/updateInfo'

const $formTransaction = document.querySelector('.form-new-transaction')
const $inputTransaction = document.querySelector('#transaction')
const $inputAmount = document.querySelector('#amount')

let transactions = []

$formTransaction.addEventListener('submit', () => {
  event.preventDefault()

  const newTransaction = {
    uuid: uuid(),
    text: $inputTransaction.value,
    amount: parseInt($inputAmount.value),
  }

  transactions.push(newTransaction)
  addTransactionDOM(newTransaction)
  updateInfo(transactions)
  $formTransaction.reset()
})
