import { IStudent } from '../@types/index'

export function getStudent(): Promise<IStudent[]> {
  return fetch('https://learn-innodom.com/students/all', {
    method: 'GET'
  })
    .then((data) => data.json())
    .then((data) => {
      const students: IStudent[] = data.data
      return students
    })
}
