import { formatAmount } from './utilities'

const $listTransactions = document.querySelector('.list-history')

export function addTransactionDOM({ uuid, text, amount }) {
  const sign = amount < 0 ? '-' : '+'
  const item = document.createElement('li')

  item.classList.add(amount < 0 ? 'expense' : 'income')
  item.setAttribute('data-id', uuid)

  item.innerHTML = `
    <span>${text}</span>
    <div>
      <span>${sign} ${formatAmount(amount)}</span>
      <button>
        X
      </button>
    </div> 
  `

  $listTransactions.appendChild(item)
}
