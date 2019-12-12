const passwordChecker = (inputPassword, setPasswordIsValid) => {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/])[A-Za-z\d@$!%*?&/]{8,16}$/;
         if (inputPassword.match(passwordRegex)) {
            setPasswordIsValid({})
            return true;
        } else {
            setPasswordIsValid({borderColor:"#F00"})
            return false;
        }
}

export default passwordChecker