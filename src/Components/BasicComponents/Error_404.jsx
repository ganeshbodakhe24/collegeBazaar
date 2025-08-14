import { Link } from "react-router";
import errorImg from "../../assets/404_error.png";
export default function Error_404(){
    return(
        <>
        <div className="flex flex-col justify-center w-full  h-dvh items-center">
            <img className="w-1/2" src={errorImg}></img>
            <Link to="/">Go To Home</Link>
        </div>

        </>
    )
}