import { IStudent } from '../@types/index'

export function patchStudent(idStudent:string,form:IStudent): Promise<IStudent[]> {
  return fetch(`https://learn-innodom.com/students/update/${idStudent}`, {
    method: 'PATCH',
    body: JSON.stringify(form)
  })
    .then((data) => data.json())
    .then((data) => {
      const students: IStudent[] = data.data
      console.log(students);
      
      return students
    })
}