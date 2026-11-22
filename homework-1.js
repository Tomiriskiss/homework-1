const readline = require('readline')

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

function ticketPrice(category) {
  let price = 0

  switch (category) {
    case 1:
      price = 300
      break
    case 2:
      price = 500
      break
    case 3:
      price = 900
      break
    default:
      price = 0
  }

  return price
}

function maxTickets(budget, price) {
  let tickets = 0
  let spent = price

  while (spent <= budget) {
    tickets++
    spent += price
  }

  return tickets
}

function printTicketResult(category, budget) {
  const price = ticketPrice(category)

  if (price === 0) {
    console.log('неизвестная категория')
  } else {
    const amount = maxTickets(budget, price)
    console.log('Категория ' + category + ', билет ' + price + ' руб., бюджет ' + budget + ' руб.: можно купить ' + amount + ' шт.')
  }
}

function deliveryPrice(distance, total) {
  let cost = 0

  if (total < 3000 && distance > 3) {
    cost = 200

    if (distance > 10) {
      cost += (distance - 10) * 25
    }
  }

  return cost
}

function printDelivery(distance, total) {
  const cost = deliveryPrice(distance, total)
  console.log('Расстояние ' + distance + ' км, заказ ' + total + ' руб.: доставка ' + cost + ' руб.')
}

function printSteps(height) {
  let count = 0

  for (let i = 1; i <= height; i++) {
    if (i === 4) {
      continue
    }

    console.log('Ступень ' + i)
    count++

    if (i === 10) {
      console.log('Дальше лестница не построена')
      break
    }
  }

  console.log('Всего построено: ' + count)
}

console.log('Выберите задачу:\n1 — билетная касса\n2 — доставка заказа\n3 — лестница')

rl.question('Ваш выбор: ', (answer) => {
  const choice = answer.trim()

  switch (choice) {
    case '1':
      rl.question('Категория билета: ', (category) => {
        rl.question('Бюджет: ', (budget) => {
          printTicketResult(Number(category), Number(budget))
          rl.close()
        })
      })
      break
    case '2':
      rl.question('Расстояние: ', (distance) => {
        rl.question('Сумма заказа: ', (total) => {
          printDelivery(Number(distance), Number(total))
          rl.close()
        })
      })
      break
    case '3':
      rl.question('Высота лестницы: ', (height) => {
        printSteps(Number(height))
        rl.close()
      })
      break
    default:
      console.log('такой задачи нет')
      rl.close()
  }
})
