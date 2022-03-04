import { useEffect, useState } from "react";
import axios from 'axios'
const useFetch = (url) => {
    const [Loading,setLoading]=useState("")
    const [error,setError]=useState(null)
    const [data,setData]=useState(null)
    useEffect(()=>{
        setLoading("Loading...");
        setTimeout(() => {
            axios.get(url).then((response)=>{
                setData(response.data)
            }).catch((err)=>{
                setError(err.message);
            }).finally(()=>{
               setLoading("")
            }) 
        }, 2000);
      
    },[url]); 
    return {Loading,error,data}
}
 
export default useFetch;