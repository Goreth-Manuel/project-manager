import { useTaskFormModel } from "../model/useTaskFormModel";
import TaskFormView from "../view/TaskForm/taskFormView";


function TaskForm() {
    const taskFormModel = useTaskFormModel();

    return(
       <TaskFormView
       {...taskFormModel}
       />
       
       
    )
}
export default TaskForm;