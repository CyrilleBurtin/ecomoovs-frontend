import jwtDecode from 'jwt-decode';

const getUserInfo = () => {
    let localToken = localStorage.getItem('AUTH_TOKEN')
    if (localToken) {
        let decodedUser = (jwtDecode(localToken))
        if (decodedUser.exp > Date.now() / 1000) {
            return {
                user: decodedUser.user,
                token: localToken
            }
        }
    } else {
        return false
    }
}
export default getUserInfo