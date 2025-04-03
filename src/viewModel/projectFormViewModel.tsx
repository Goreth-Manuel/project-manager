import { useProjectFormModel } from "../model/useProjectFormModal";
import ProjectFormView from "../view/ProjectForm/projectFormView";


function ProjectForm() {
    const ProjectFormModel =  useProjectFormModel();

    return(
       <ProjectFormView
       {...ProjectFormModel}
       />
       
       
    )
}
export default  ProjectForm;