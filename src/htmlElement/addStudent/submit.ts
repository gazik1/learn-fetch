import { submit } from '../form/submit'
import {postStudent} from '../../fetch/postFetch'
import { appStart } from '../../index'

export function sub (event: SubmitEvent){
    event.preventDefault()
    postStudent(submit(event)).then(v=>{
     appStart()
     }).catch(v=>{
        return
     })
 }