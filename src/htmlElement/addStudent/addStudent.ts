import {form} from '../form/index'
import { sub } from './submit'
export function addStudent(root:HTMLElement){
    const addStudentButton=document.createElement("button")
    const boxForm=document.createElement("div")
    boxForm.style.position="relative"
    let boole=false
    addStudentButton.innerHTML="Добавить студента"
    
    addStudentButton.addEventListener("click",(event)=>{

        if(!boole&&event.target===addStudentButton){
            const formAdd=form()
            formAdd.addEventListener("submit",sub)
            boole=true
            boxForm.replaceChildren(formAdd)
        }
        else{
            boole=false
            boxForm.replaceChildren("")
        }
    }) 

    
    //потом перенестии в root
    root.append(addStudentButton,boxForm)
}