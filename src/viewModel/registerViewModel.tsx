import useRegisterModel from "../model/useRegisterModel";
import RegisterView from "../view/Register/registerView";


function Register() {
    const registerModel =  useRegisterModel();

    return(
       <RegisterView
       {...registerModel}
       />
       
       
    )
}
export default  Register;