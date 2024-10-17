const tel = document.getElementById("tel");
const telForm = document.getElementById("telForm");
const Bd = document.getElementById("Bd");
const adress = document.getElementById("adress");
const url = document.getElementById("url");
const Pass = document.getElementById("pass");
const numberAlert = document.getElementById("numberAlert");
const bdAlert = document.getElementById("bdAlert");
const adressAlert = document.getElementById("adressAlert");
const urlAlert = document.getElementById("urlAlert");
const passAlert = document.getElementById("passAlert");

function teleCheck(tel) {
	const patterns = [
        /^06-\d{8}$/ ,
        /^06 \d{8}$/ ,
        /^06\d{8}$/ ,
        /^\+31 6 \d{8}$/,
    ];
    for (const pattern of patterns) {
        if (pattern.regex.test(tel)) {
            return true;
        }
    }
    return false;
}

function BdCheck(Bd) {
    const patterns = [
        /^\d{2}-\d{2}$/,
        /^\d{1,2} (january|february|march|april|may|june|july|august|september|october|november|december)$/i ,
        /^\d{2} (januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)$/i ,
    ];
    for (const pattern of patterns) {
        if (pattern.test(Bd)) {
            return true;
        }
    }
    return false;
}

function adressCheck(adress) {
	const pattern = new RegExp(/^[A-Za-z\s]+ \d+([A-Za-z]|-\w+)?$/);
	return pattern.test(adress);
}

function urlCheck(url) {
    const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    return pattern.test(url)
}

function passCheck(pass) {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&*]).{8,}$/;
    return pattern.test(pass);
}

telForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const phoneNumber = tel.value.trim();
    try {
        if (!teleCheck(phoneNumber)) {
            throw "Invalid Number";
        }
        console.log("Valid Number");
        numberAlert.innerHTML = "";
    } catch (error) {
        console.warn(error);
        numberAlert.innerHTML = error;
        numberAlert.style.color = "red";
    }
});

telForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const birthday = Bd.value.trim();
    try {
        if (!BdCheck(birthday)) {
            throw "Invalid Birthday";
        }
        console.log("Valid Birthday");
        bdAlert.innerHTML = "";
    } catch (error) {
        console.warn(error);
        bdAlert.innerHTML = error;
        bdAlert.style.color = "red";
    }
});

telForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const address = adress.value.trim();
    try {
        if (!adressCheck(address)) {
            throw "Invalid Address";
        }
        console.log("Valid Address");
        adressAlert.innerHTML = "";
    } catch (error) {
        console.warn(error);
        adressAlert.innerHTML = error;
        adressAlert.style.color = "red";
    }
});

telForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const Url = url.value.trim();
    try {
        if (!urlCheck(Url)) {
            throw "Invalid URL";
        }
        console.log("Valid URL");
        urlAlert.innerHTML = "";
    } catch (error) {
        console.warn(error);
        urlAlert.innerHTML = error;
        urlAlert.style.color = "red";
    }
});

telForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const pass = Pass.value.trim();
    try {
        if (!passCheck(pass)) {
            throw "Invalid Password";
        }
        console.log("Valid Password");
        passAlert.innerHTML = "";
    } catch (error) {
        console.warn(error);
        passAlert.innerHTML = error;
        passAlert.style.color = "red";
    }
});
