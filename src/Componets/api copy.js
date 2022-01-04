import React,{useState,useEffect} from 'react';


const DataApi = () =>{
  const [Post,setPost] = useState([]);

  useEffect(() => {
    const url="https://card-admin.dev.intuaition.net/chart/data";

    fetch (url).then(resp => resp.json())
    .then(resp => setPost(resp.data))
  }, [])


const getKeyword =  Post.map((item) =>(
  <h1>{item.keyword}</h1>
  // console.log(item.source)
))
  return(
    <>
      {
        getKeyword[0]
      }
    </>
  )
}


export default DataApi;