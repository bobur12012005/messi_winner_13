let form = document.forms.login
let inp_reqs = form.querySelectorAll('.required input')
let success = document.querySelector('.success')
let error = document.querySelector('.error')

form.onsubmit = (event) => {
    event.preventDefault();

    let error_count = 0
    let success_count = 7

    inp_reqs.forEach(inp => {
        if (inp.value.length === 0) {
            inp.parentElement.classList.add('error-field')
            error_count++
            error.innerHTML = "Error: " + error_count + "/7"
            let answer = success_count - error_count
            success.innerHTML = "Success: " + answer + "/7"
        } else {
            inp.parentElement.classList.remove('error-field')
        }
    })

    if (error_count > 0) {
        alert('Error!')
    } else {
        submit()   
    }
}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}