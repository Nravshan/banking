
let form = document.forms.add_transaction
let select = form.querySelector('select')
let user = JSON.parse(localStorage.getItem('user'))

getData("/cards?user_id=" + user.id)
    .then(res => {
        for(let item of res.data) {
            let opt = new Option(item.name, JSON.stringify(item))
            select.append(opt)
        }
    })


// form.onsubmit = (e) => {
//     e.preventDefault()
//     let date = new Date()

//     let transaction = {
//         id: Math.random(),
//         user_id: user.id,
//         date: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
//     }

//     let fm = new FormData(form)

//     fm.forEach((value, key) => {
//         transaction[key] = value
//     })
