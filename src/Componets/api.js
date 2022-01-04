// import { useEffect } from "react";
import React,{useState, useEffect} from 'react';
// import { Table } from 'reactstrap';
const Apx = () => {

  const [data,setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://card-admin.dev.intuaition.net/chart/data').then(resp => resp.json())
  //   .then(data => {
  //     // console.log(data);
  //     setUser(data);

  //   })
  // }, [])

  // useEffect(() => {
  //   const url = "https://card-admin.dev.intuaition.net/chart/data";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setData(json['results']))
  //     .catch((error) => console.log(error));
  // }, []);
  useEffect(() => {
    const url = "https://card-admin.dev.intuaition.net/chart/data";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
       console.log(json)
      console.log('keyword==========',json.data[2].source);
        setData(json.data)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

  const gatdata = data.map( (item) => (
    <div>{item.keyword}</div>
))
const gatSource = data.map( (item) => (
  <>{item.source}</>
))

  return(
    <>
    
   <div>
    {gatdata}
    {/* {gatSource} */}
    <table

>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
      {gatSource[0]}
      </th>
      <th>
      {gatSource[1]}
      </th>
      <th>
      {gatSource[2]}
      </th>
      <th>
      {gatSource[3]}
      </th>
      <th>
      {gatSource[4]}
      </th>
      <th>
      {gatSource[5]}
      </th>
     
     
    
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        1
      </th>
      <td>
        Mark
      </td>
      <td>
        Otto
      </td>
      <td>
        @mdo
      </td>
    </tr>
    <tr>
      <th scope="row">
        2
      </th>
      <td>
        Jacob
      </td>
      <td>
        Thornton
      </td>
      <td>
        @fat
      </td>
    </tr>
    <tr>
      <th scope="row">
        3
      </th>
      <td>
        Larry
      </td>
      <td>
        the Bird
      </td>
      <td>
        @twitter
      </td>
    </tr>
  </tbody>
</table>
   </div>
    </>
  )
}



export default Apx;