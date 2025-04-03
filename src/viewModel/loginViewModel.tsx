import useLoginModel from "../model/useLoginModel"
import LoginView from "../view/Login/loginView"


function Login() {
    const loginModel = useLoginModel();

    return(
       <LoginView 
       {...loginModel}
       />
       
       
    )
}
export default Login