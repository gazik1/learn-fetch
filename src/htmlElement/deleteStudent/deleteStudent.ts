import { deleteFetch } from 'src/fetch/deleteFetch'
import {  getStudent} from 'src/fetch/getFetch'
import { IStudent } from 'src/@types/index'
import { appStart } from 'src/index'
import { promises } from 'dns'
export function deleteStudent(root: HTMLElement, iStudent: IStudent[]) {
  const button: HTMLButtonElement = document.createElement('button')
  button.textContent = 'Удалить элементы'
  root.appendChild(button)
  button.addEventListener('click', () => {
    console.log(2);
    
    const selectDelete = Array.from(document.getElementsByClassName('delete')) as HTMLInputElement[]
    const checkedInput:Promise<string>[]=[Promise.resolve("ds")]
    selectDelete.forEach((input: HTMLInputElement, i) => {
      if (input.checked) {
        
        checkedInput.push( deleteFetch(iStudent[i].id!))
        
      }
    })
    Promise.all(checkedInput).then(v=>{
        appStart()
    })
  })
}
