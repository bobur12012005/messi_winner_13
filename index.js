let btn_submit = document.querySelector('.submit')
let necessary_rows = document.querySelectorAll('.personality input')

btn_submit.onclick = () => {
    necessary_rows.forEach((row) => {
        if (row.value.length === 0) {
            row.style.border = "2px solid red"
            btn_submit.setAttribute('type', 'button')
        } else if (row.value.length > 0 ) {
            row.style.border = "2px solid green"
            btn_submit.setAttribute('type', 'submit')
        }
    })
}