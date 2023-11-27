let inp = document.getElementById('calc')

function display(num) {
    inp.value += num
}
function Clear() {
    inp.value = ""
}
function Delete() {
    inp.value = inp.value.slice(0, -1)
}
function calc() {
    try {
        inp.value = eval(inp.value)
    } catch (error) {
        inp.value = 'error'
    }
   
}
