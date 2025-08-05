import AdminHome from "./Admin/AdminHome";
import AdminSideBar from "./Admin/AdminSideBar";
import AdminProfile from "./Admin/AdminProfile";
import AdminProfileEdit from "./Admin/AdminProfileEdit";
export default function AdminDashboard(){
    return (
        <>
        <AdminSideBar></AdminSideBar>
        <AdminHome></AdminHome>
        <AdminProfile></AdminProfile>
        <AdminProfileEdit></AdminProfileEdit>
        </>
    )
}