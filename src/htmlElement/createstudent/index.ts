import { IStudent } from 'src/@types'
import { patchStudent } from '../../fetch/patchFetch'
import { getStudent } from '../../fetch/getFetch'
import { form } from 'src/htmlElement/form/index'
import { appStart } from 'src/index'

export function craeteStudent(root: HTMLElement, iStudent: IStudent[]) {
  const createEle = document.getElementsByClassName('createButton')

  Array.from(createEle).forEach((button, i) => {
    button.addEventListener('click', () => {
      const formPatch = form()

      formPatch.first_name.value = iStudent[i].first_name
      formPatch.last_name.value = iStudent[i].last_name
      formPatch.email.value = iStudent[i].email
      formPatch.rating.value = iStudent[i].rating
      const options: HTMLOptionsCollection = formPatch.courses.options
      Array.from(options).forEach((option: HTMLOptionElement) => {
        if (option.value == iStudent[i].courses[0]) {
          option.setAttribute('select', 'true')
        } else {
          option.removeAttribute('select')
        }
      })
      root.append(formPatch)

      formPatch.addEventListener("submit",(eve)=>{
        eve.preventDefault()
        const stud: IStudent = {
            first_name: formPatch.first_name.value,
            last_name: formPatch.last_name.value,
            email: formPatch.email.value,
            courses: [formPatch.courses.selectedOptions[0].value],
            rating: Number(formPatch.rating.value)
          }
    
          patchStudent(iStudent[i].id!,stud).then(v=>{
            appStart()
        })
      })
      
    })
  })
}
