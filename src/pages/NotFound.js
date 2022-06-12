import React from "react"
import '../styles/NotFound.css'
function NotFound()
    {
        React.useEffect(() => {
            document.title = "NotFound - instagram";
          },[]);
        return (
            < div className="w-screen h-screen flex justify-center bg-[#fafafa] font-bold text-[25px]">
            NOT FOUND !
        </div>
        )
    }

export default NotFound;