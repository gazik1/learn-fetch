import { IStudent } from '../@types/index'
/**
 * @returns Массив строк 
 */
export function studentHtml(iStudent: IStudent[]): HTMLElement[] {
  return iStudent.map((student, index) => {
    const tr = document.createElement('tr')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = 'delete'

    const createButton = document.createElement('button')
    createButton.innerHTML = 'Изменить'
    createButton.className = 'createButton'
    let td: (string | HTMLInputElement | HTMLButtonElement | HTMLTableCellElement)[] = [
      checkbox,
      index.toString(),
      student.first_name,
      student.last_name,
      student.email,
      student.courses.join(''),
      student.rating.toString(),
      createButton
    ]
    td = td.map((ele) => {

      const tdElem = document.createElement('td')
      tdElem.append(ele)
      return tdElem
    })

    tr.append(...td)
    return tr
  })
}
