import React from "react";
import { Link } from "react-router-dom"
import "./image.Module.css"



const DataCard = ({ dataId , dataimg, dataname } ) => {
  return (
      <>
          <div className="imagebox"> 
     <div>
     <Link to={`/shoes/${dataId}`}>
         <img  src={dataimg} alt="" />
         </Link>
       </div> 
   <div>
     <div >{dataname}</div>
   </div>
     </div>
    </>
       
  );
};

export default DataCard;