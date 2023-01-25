import { useEffect } from "react";

function DynamicTable(){


    var TableData=[{"POLICY_NO":"3012304","CONCLUSION_DATE":"10/11/10 0:00"},{"POLICY_NO":"3012308","CONCLUSION_DATE":"1/12/18 0:00"},{"POLICY_NO":"3012312","CONCLUSION_DATE":"5/23/17 0:00"},{"POLICY_NO":"3012317","CONCLUSION_DATE":"5/21/17 0:00"},{"POLICY_NO":"3012322","CONCLUSION_DATE":"5/20/17 0:00"},{"POLICY_NO":"3012327","CONCLUSION_DATE":"10/12/10 0:00"}]
// get table column
 const column = Object.keys(TableData[0]);
 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data}>{data}</th>
     })
 }
// get table row data
const tdData =() =>{
   
     return TableData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td>{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}
  return (
      <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
  )
}
export default DynamicTable;