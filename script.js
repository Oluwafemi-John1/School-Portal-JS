var allStudents = []
function submit() {
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var mailphone = document.getElementById('mailphone').value
    var password = document.getElementById('password').value

    if (firstname === '' || lastname === '' || mailphone === '' || password === '') {
        alert("haba, haba, you no dey see")
    } else {
        var studentObj = {firstname,lastname,mailphone,password}
        allStudents.push(studentObj)
        console.log(allStudents);
    
        document.getElementById('firstname').value = ''
        document.getElementById('lastname').value = ''
        document.getElementById('mailphone').value = ''
        document.getElementById('password').value = ''
    }
}