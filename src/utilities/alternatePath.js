import React from "react";
import "../styles/login.css";
import {Link} from 'react-router-dom'
function Alternate(props){
    return (
    <>
    <div className="bg-[#FFFFFF] border-2 border-[#DBDBDB] w-screen formsm:w-[348px] flex flex-wrap justify-center gap-y-[30px] items-center h-auto formsm:h-[50px] pt-[10px] pb-[10px] rounded">
        <pre className="font-sans text-[15px]">{props.query}</pre>
        <Link to = {props.path} className="text-[#0095F6]" >{props.solution}</Link>
    </div>
    </>
    );
}

export default Alternate