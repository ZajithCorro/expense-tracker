import { formatAmount } from './utilities'

const $income = document.querySelector('#income')
const $expense = document.querySelector('#expense')
const $balance = document.querySelector('.balance')

function updateBalance(total) {
  if (total >= 0) {
    $balance.classList.contains('negative') &&
      $balance.classList.remove('negative')
    $balance.classList.add('positive')

    $balance.innerHTML = `${formatAmount(total)}`
  } else {
    $balance.classList.contains('positive') &&
      $balance.classList.remove('positive')
    $balance.classList.add('negative')

    $balance.innerHTML = `- ${formatAmount(total)}`
  }
}

export default function updateInfo(transactions) {
  const amounts = transactions.map((transaction) => transaction.amount)

  const total = amounts.reduce((sum, current) => sum + current, 0)

  const incomes = amounts
    .filter((amount) => amount > 0)
    .reduce((sum, current) => sum + current, 0)

  const expenses = amounts
    .filter((amount) => amount < 0)
    .reduce((sum, current) => sum + current, 0)

  $income.innerHTML = formatAmount(incomes)
  $expense.innerHTML = formatAmount(expenses)
  updateBalance(total)
}
