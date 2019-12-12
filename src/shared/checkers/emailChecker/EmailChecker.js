const emailChecker = (inputEmail, setEmailIsValid) => {
    var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
         if (inputEmail.match(emailRegex)) {
            setEmailIsValid({})
            return true;
        } else {
            setEmailIsValid({borderColor:"#F00"})
            return false;
        }
}

export default emailChecker