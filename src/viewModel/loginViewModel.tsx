import useLoginViewModel from "../model/useLoginModel"
import LoginView from "../view/Login/loginView"


function Login() {
    const loginModel = useLoginViewModel();

    return(
       <LoginView 
       {...loginModel}
       />
       
       
    )
}
export default Login