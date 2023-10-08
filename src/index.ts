import { registerWorker } from './helpers/service-worker.helper'
import { IStudent } from './@types/index'
import { tableCreate } from './htmlElement/table'
import { getStudent } from './fetch/getFetch'
import {studentHtml} from './htmlElement/student'
import {addStudent} from './htmlElement/addStudent/addStudent'
import {craeteStudent} from './htmlElement/createstudent'
import { deleteStudent } from './htmlElement/deleteStudent/deleteStudent'
registerWorker()

const root = document.getElementById('root')!

export async function appStart() {
    root.replaceChildren("")
  const iStudent: IStudent[] = await getStudent()
  const table = tableCreate(iStudent,root)
  root.appendChild(table)
  table.append(...studentHtml(iStudent))
  addStudent(root) 
  craeteStudent(root,iStudent)
  deleteStudent(root,iStudent)
}
appStart() 
  
