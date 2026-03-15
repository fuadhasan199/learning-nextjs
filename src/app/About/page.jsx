import React from 'react';

const page = async () => { 
   const response=await fetch('https://jsonplaceholder.typicode.com/todos') 
   const Data=await response.json() 
   console.log(Data)
    return (
        <div>
        {Data.map((item)=>(
             <p key={item.id}>{item.title} </p> 
            
        ))}
        </div>
    );
};

export default page;