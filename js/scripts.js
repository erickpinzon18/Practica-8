var form = document.getElementById("login");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    var nombre = document.getElementById("nombre");
    var password = document.getElementById("password");
    var radio = document.getElementsByName("option");
    var check = document.getElementsByName("optionCb");
    
    console.log(nombre.value);
    console.log(password.value);

    console.log(valOption(radio).value);
    console.log(valOptionCb(check).value);
});

function valOption (radio) {
    radio.forEach(element => {
        if (element.checked) {
            console.log("For Each: " + element.value)
        }
    });
    
    for (i = 0; i<radio.length; i++) {
        if(radio[i].checked) {
            return radio[i];
        }
    }
}

function valOptionCb (check) {
    check.forEach(element => {
        if (element.checked) {
            console.log("For Each: " + element.value)
        }
    });

    for (i = 0; i<check.length; i++) {
        if(check[i].checked) {
            return check[i];
        }
    }
}