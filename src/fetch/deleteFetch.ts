
export function deleteFetch(idStudent:string): Promise<string> {
  return fetch(`https://learn-innodom.com/students/delete/${idStudent}`, {
    method: 'DELETE',
  })
    .then((data) => data.json())
    .then((data) => {
      return data
    })
}