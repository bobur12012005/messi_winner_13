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



let names = document.querySelectorAll('.names')
names.forEach((name) => {
    name.onkeyup = () => {
        if (/^[a-z ,.'-]+$/i.test(name.value) || name.value.length === 0) {
            name.parentElement.classList.remove('error-field')
        } else {
            name.parentElement.classList.add('error-field')
        }
    }
});

let y_name = document.querySelector('#name')
y_name.onkeyup = () => {
    if (/^[a-z ,.'-]+$/i.test(y_name.value) || y_name.value.length === 0) {
        y_name.parentElement.classList.remove('error-field')
    } else {
        y_name.parentElement.classList.add('error-field')
    }
}

let email = document.querySelector('#email')
email.onkeyup = () => {
    if (/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/.test(email.value) || email.value.length === 0) {
        email.parentElement.classList.remove('error-field')
    } else {
        email.parentElement.classList.add('error-field')
    }
}

let phone = document.querySelector('#tel')
phone.onkeyup = () => {
    if (/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone.value) || phone.value.length === 0) {
        phone.parentElement.classList.remove('error-field')
    } else {
        phone.parentElement.classList.add('error-field')
    }
}

let age = document.querySelector('#age')
age.onkeyup = () => {
    if (/^\S[0-9]{0,1}$/.test(age.value) || age.value.length === 0) {
        age.parentElement.classList.remove('error-field')
    } else {
        age.parentElement.classList.add('error-field')
    }
}