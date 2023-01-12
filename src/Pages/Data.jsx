import React, { useEffect, useState } from "react";
import { getdata } from "../Redux/Appreducer/action";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";
import DataCard from "../Components/DataCard";
import { useLocation } from "react-router-dom";
import "./data.Module.css";



const Data = () => {
  const datas = useSelector((store) => store.Appreducer.data);
 
  
 const [page1, setpage] = useState(1);
 const [search, setsearch] = useState("" || "india");
 const dispatch = useDispatch();
 const location = useLocation();
 useEffect(() => {
  if (location || datas.length == 0) {
   const getparam = {
    params: {
     query: search,
     page: page1,
     per_page: 21,
    },
   };
   dispatch(getdata(getparam));
  }
 }, [datas.length, dispatch, location.search, page1, search]);

 const Prevpage = () => {
  setpage(page1 - 1);
 };
 const Nextpage = () => {
  setpage(page1 + 1);
 };
 

 return (
  <div>
   

   {/* search bar*/}
   <div className="searchbox">
    <label htmlFor="" className="search">
     searc here
    </label>
    <input
     type="text"
     value={search}
     onChange={(e) => setsearch(e.target.value)}
     className="searchinp"
    />
     </div>
     {/*search bar end here*/ }
   <div className="showh1">
    <div>
     <h1 className="showing">
      showing images of :<span className="result1">{search}</span>{" "}
     </h1>
    </div>
           {/*pagination*/}
    <div className="pagination">
     <button disabled={page1 === 1} onClick={Prevpage} className="prevpage">
      Prev
     </button>
     <h1 className="pagenum">{page1}</h1>
     <button disabled={page1 === 10} onClick={Nextpage} className="nextpage">
      Next
     </button>
       </div>
       {/*pagination end here*/}
   </div>
   <shorwrapper>
       
       {/*image card start here*/}
    <div>
         <div className="imagegrid">
          
             {
               datas.length > 0 &&
                 datas.map((item) => {
                   return (
                 <DataCard
                       dataId={item.id}
                       dataimg={item.urls.small}
                       dataname={item.alt_description}
                     />
                   );
                 })
             }
           
         </div>
         
       </div>
       {/*image card end here*/}
       <div className="foot">
       <h4 className="name">Desined and developed by Yogendra Kokate</h4>
       </div>
       
   </shorwrapper>
  </div>
 );
};

export default Data;
