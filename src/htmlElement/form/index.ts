export function form():HTMLFormElement{
    const form=document.createElement("form")
    form.innerHTML = `
        <style>
            p {
                margin: 10px;
            }
        
        </style>
        <p>Имя
            <input name="first_name" type="text">
        </p>
        <p>Фамилия
            <input name="last_name" type="text">
        </p>
        <p>
            Почта
            <input name="email" type="email">
        </p>
        <p>Язык программирования
            <select name="courses">
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
            </select>
        </p>
        <p>
        Рейтинг
        <input name="rating" type="text">
        </p>
        <button type="submit">Отправить</button>
        <button type="reset">Удалить данные</button>
    `
    form.style.position="absolute"
    form.style.left="50%"
    form.style.top="10px"
    form.style.transform="translateX(-50%)"
    form.style.backgroundColor="white"
    form.style.padding="10px"
    form.style.border="black solid 1px"
    form.style.display="flex"
    form.style.flexDirection="column"

    return form
}