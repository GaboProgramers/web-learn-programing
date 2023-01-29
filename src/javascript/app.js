let date = document.getElementById('date')
const year = new Date()
const yearFull = year.getFullYear()

date.innerHTML += `${yearFull}`