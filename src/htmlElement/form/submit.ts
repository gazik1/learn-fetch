import { IStudent } from '../../@types/index'

export function submit(event: SubmitEvent){
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const stud: IStudent = {
    first_name: form.first_name.value,
    last_name: form.last_name.value,
    email: form.email.value,
    courses: [form.courses.selectedOptions[0].value],
    rating: Number(form.rating.value)
  }
return stud
}
