import {IStudent} from "../@types/index"

/**@returns Возвращает таблицу с заголовками */
export function tableCreate(iStudent:IStudent[],root:HTMLElement): HTMLTableElement {
  const style = document.createElement('style')
  style.innerHTML = `
  table,td,tr,th{
    border: 1px solid black;
    border-collapse: collapse;
}
td,th{
  padding: 10px;
}
 `
 root.appendChild(style)
  const table = document.createElement('table')
  const tr = document.createElement('tr')
  table.appendChild(tr)
  const thName = ['',"Номер" ,'Имя', 'Фамилия', 'Почта', 'Курс', 'Рэйтинг', 'Изменить']
  thName.forEach((v) => {
    const th = document.createElement('th')
    th.textContent = v
    tr.appendChild(th)
  })
  return table
}

  