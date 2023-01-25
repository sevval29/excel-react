import React, { useState } from "react";
import "./App.css";
import * as XLSX from "xlsx";


import axios from 'axios';
//import DynamicTable from "./DynamicTable";



export default function Ada(){
  const [veri, setVeri]= useState("");
  let selectedFile;
  const filePathset=(event)=>{
 
  console.log(window.XLSX);

      selectedFile = event.target.files[0];
  }
  
  let data=[{
      "name":"jayanth",
      "data":"scd",
      "abc":"sdef"
  }]
  
  
  const readFile=() =>{ 
      XLSX.utils.json_to_sheet(data, 'out.xlsx');
      if(selectedFile){
          let fileReader = new FileReader();
          fileReader.readAsBinaryString(selectedFile);
          fileReader.onload = (event)=>{
           let data = event.target.result;
           let workbook = XLSX.read(data,{type:"binary"});
           console.log(workbook);
           workbook.SheetNames.forEach(sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
                console.log(rowObject);
                setVeri(rowObject);
               // console.log(JSON.stringify(rowObject));
               // document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject,undefined,4)
           });
          }
      }
  };
//console.log(veri);

  const datax = {

    veri
  
  }
console.log("zsfsdf" , JSON.stringify(datax));
  const handleSubmit=async (event) =>{
    event.preventDefault()
   
   fetch('https://localhost:44358/Values', {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body:JSON.stringify(veri),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json))

  }
    return (
      <div>
        <input
          type="file"
          id="file"
          
          onChange={filePathset}
        />
        <button
          onClick={
            readFile
          }
        >
          Read File
        </button>

        <div>
        <button onClick={handleSubmit}> gönder </button>
        </div>

        <div>

       

        </div>
      </div>
    );
  

}
