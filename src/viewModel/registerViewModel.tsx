import useRegisterModel from "../model/useRegisterModel";
import RegisterView from "../view/Register/register";


function Register() {
    const registerModel =  useRegisterModel();

    return(
       <RegisterView
       {...registerModel}
       />
       
       
    )
}
export default  Register;