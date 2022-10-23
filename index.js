
let USER_DB = []

let encryptionRule = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
	'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
	'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
	'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
	'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
	'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
	'Y': 'L', 'Z': 'M',
	'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
	'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
	'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
	'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
	'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
	'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
	'y': 'l', 'z': 'm',
	'0': '5', '1': '6', '2': '7', '3': '8',
	'4': '9', '5': '0', '6': '1', '7': '2',
	'8': '3', '9': '4',
	'!': '#', '$': '%', '&': '+', '-': '@',
	'_': '~', '#': '!', '%': '$', '+': '&',
	'@': '-', '~': '_'
}

const encrypt = (inputString) => {
    let encryptedString = ''
    for (let char of inputString) {
        encryptedString = encryptedString + encryptionRule[char]
    }
    return encryptedString
}

const decrypt = (encryptedString) => {
    let originalString = ''

    let keys = Object.keys(encryptionRule)
    let values = Object.values(encryptionRule)
    for (let char of encryptedString) {
        let requiredIndex = values.indexOf(char)
        originalString = originalString + keys[requiredIndex]
    }
    return originalString
}

const signUp = () => {
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let phoneNumber = document.getElementById('phone-number').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let encryptedPassword = encrypt(password)

    document.getElementById('sign-up-form').reset()

    let userDetails = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password: encryptedPassword
    };

    USER_DB.push(userDetails)

    alert('Sign Up Successfull!')

    changeNavLinks(userDetails)
}

const signIn = () => {
    let enteredEmail = document.getElementById('login-email').value
    let enteredPassword = document.getElementById('login-password').value

    let requiredUser = USER_DB.find(
        (user) => 
            user.email === enteredEmail && decrypt(user.password) === enteredPassword
    );
    if (requiredUser) {
        alert('Access Granted')
        changeNavLinks(requiredUser)
    } else {
        alert('Access Denied')
    }
    document.getElementById('sign-in-form').reset()
}

const goToSignUp = () => {
    document.getElementById('home').style.display = 'none'
    document.getElementById('sign-up').style.display = 'block'
    document.getElementById('sign-in').style.display = 'none'
}

const goToHome = () => {
    document.getElementById('sign-up').style.display = 'none'
    document.getElementById('sign-in').style.display = 'none'
    document.getElementById('home').style.display = 'block'
}

const goToSignIn = () => {
    document.getElementById('home').style.display = 'none'
    document.getElementById('sign-in').style.display = 'block'
    document.getElementById('sign-up').style.display = 'none'
}

const changeNavLinks = (currentUser) => {
    let { firstName, lastName } = currentUser
    document.getElementById('sign-up-nav-link').style.display = 'none'
    document.getElementById('sign-in-nav-link').style.display = 'none'
    document.getElementById('profile-nav-link').style.display = 'block'
    document.getElementById('sign-out-nav-link').style.display = 'block'

    document.getElementById('profile-nav-link').innerText = `Hi, ${firstName} ${lastName}`
}

const signOut = () => {
    document.getElementById('profile-nav-link').innerText = ''

    document.getElementById('sign-up-nav-link').style.display = 'block'
    document.getElementById('sign-in-nav-link').style.display = 'block'
    document.getElementById('profile-nav-link').style.display = 'none'
    document.getElementById('sign-out-nav-link').style.display = 'none'
}