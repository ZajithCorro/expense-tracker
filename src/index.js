import './main.scss'

import { uuid } from './app/utilities'
import { addTransactionDOM } from './app/addTransaction'

const $formTransaction = document.querySelector('.form-new-transaction')
const $inputTransaction = document.querySelector('#transaction')
const $inputAmount = document.querySelector('#amount')

let transactions = []

$formTransaction.addEventListener('submit', () => {
  event.preventDefault()

  const newTransaction = {
    uuid: uuid(),
    text: $inputTransaction.value,
    amount: $inputAmount.value,
  }

  transactions.push(newTransaction)
  addTransactionDOM(newTransaction)
  $formTransaction.reset()
})
