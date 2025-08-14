import UserSideBar from "./UserAdminDashboardComponent/UserSideBar";
import UserHome from "./UserAdminDashboardComponent/UserHome";
import Footer from "./BasicComponents/footer";
import Nav from "./BasicComponents/Nav";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import MsgPopUp from "./MsgPopUp";
import API from "./API";


const fetchDashboardData = async () => {
  const response = await API.get("user/profile"); // protected endpoint
  return response.data;
};


export default function UserDashboard(){
    const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userProfile"], // unique key
    queryFn: fetchDashboardData,
    retry: false, // optional: don’t retry if token is invalid
  });

    if(isLoading){ return <Loading></Loading>}
    if (isError) return <MsgPopUp message={error.message || "Error"} msgType="error" />;
    return (
        <> 
            <Nav></Nav>
            <UserSideBar userImg={data.profile_photo || "img"} userName={data.full_name || "img"}  ></UserSideBar>
            <UserHome></UserHome>
            <Footer></Footer>
        </>
    )
}