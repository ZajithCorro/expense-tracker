import { formatAmount } from './utilities'
import updateInfo from './updateInfo'

const $listTransactions = document.querySelector('.list-history')

function addListeners(callback) {
  document.querySelectorAll('.btn-delete').forEach((element) => {
    element.removeEventListener('click', callback)
    element.addEventListener('click', callback)
  })
}

export default function addTransactionDOM(
  { uuid, text, amount },
  callback,
  transactions
) {
  const sign = amount < 0 ? '-' : '+'
  const item = document.createElement('li')

  item.classList.add(amount < 0 ? 'expense' : 'income')
  item.setAttribute('data-id', uuid)

  item.innerHTML = `
    <span>${text}</span>
    <div>
      <span>${sign} ${formatAmount(amount)}</span>
      <button class="btn-delete">
        X
      </button>
    </div> 
  `

  $listTransactions.appendChild(item)
  addListeners(callback)
  updateInfo(transactions)
}
