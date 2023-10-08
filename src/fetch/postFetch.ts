import { IStudent } from '../@types/index'

export function postStudent(form: IStudent) {
  return fetch('https://learn-innodom.com/students/create', {
    method: 'POST',
    body: JSON.stringify(form)
  })
    .then((data) => data.json())
    .then((data) => {
           const student: IStudent =  data.data
           return student
    })
}
