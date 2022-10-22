
let USER_DB = []
const signUp = () =>{
    let firstName = document.getElementById('firstName').value
    let lastName = document.getElementById('lastName').value
    let phoneNumber = document.getElementById('phone-number').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let userDetails = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password
    };

    USER_DB.push(userDetails)
    document.getElementById('sign-up-form').reset()
    console.log(USER_D)
    alert('Sign Up Successfull!')

    changeNavLinks(userDetails)
} 

const signIn = () =>{
    let enteredEmail = document.getElementById('login-email').value
    let enteredPassword = document.getElementById('login-password').value

    alert(USER_DB.find(user => user.email === enteredEmail && user.password === enteredPassword)? 'Access Granted':'Access Denied')
    document.getElementById('sign-in-form').reset()
}

const goToSignUp = () =>{
    document.getElementById('home').style.display = 'none'
    document.getElementById('sign-up').style.display = 'block'
    document.getElementById('sign-in').style.display = 'none'
}

const goToHome = () =>{
    document.getElementById('sign-up').style.display = 'none'
    document.getElementById('sign-in').style.display = 'none'
    document.getElementById('home').style.display = 'block'
}

const goToSignIn = () =>{
    document.getElementById('home').style.display = 'none'
    document.getElementById('sign-in').style.display = 'block'
    document.getElementById('sign-up').style.display = 'none'
}

 const changeNavLinks = (currentUser) => {
    let { firstName, lastName } = currentUser
    document.getElementById('sign-up-nav-link').style.display = 'none'
    document.getElementById('sign-in-nav-link').style.display = 'none'

    document.getElementById('profile-nav-link').style.display = 'none'
    document.getElementById('sign-out-nav-link').style.display = 'none'

    document.getElementById('profile-nav-link').innerText = `Hi, ${firstName} ${lastName}`
 }

 const signOut = () => {

 }