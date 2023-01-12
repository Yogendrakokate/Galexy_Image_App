import React,{useState,useEffect} from "react";
import { useSearchParams } from "react-router-dom"

const Filter = () => {
 
  
  const [searchparams, setSearchparams] = useSearchParams();

  const initialfilter = searchparams.getAll("query")
  const [query, setcategori] = useState(initialfilter || ["nasa"])
  console.log(initialfilter)
  const handlefilter = (e) => {
    const getfilter = [...query]
    if (getfilter.includes(e.target.value)) {
      getfilter.splice(getfilter.indexOf(e.target.value),1)
    }
    else {
      getfilter.push(e.target.value)
    }
    setcategori(getfilter)
  }
  console.log(query)
  useEffect(() => {
    let params = {}
    params.query = query
    setSearchparams(params)
  },[setSearchparams,query])
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="india" checked={query.includes('India')}  onChange={handlefilter} />
          <label>India</label>
        </div>
        <div>
          <input type="checkbox" value="nasa" checked={query.includes('Nasa')}  onChange={handlefilter} />
          <label>Nasa</label>
        </div>
        <div>
          <input type="checkbox" value="gurgaon" checked={query.includes('Gurgaon')}  onChange={handlefilter} />
          <label>Gurgaon</label>
        </div>
        <div>
          <input type="checkbox" value="software" checked={query.includes('Software')} onChange={handlefilter} />
          <label>Software</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;