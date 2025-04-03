import { useDashboardModel } from "../model/useDashboardModel";
import DashboardView from "../view/Dashboard/dashboardView";


function Dashboard() {
    const dashboardModel = useDashboardModel();

    return(
       <DashboardView 
       {...dashboardModel}
       />
       
       
    )
}
export default Dashboard;