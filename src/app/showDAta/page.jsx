"use client"

import { useSession } from "next-auth/react";

const ShowData = () => { 
    const session=useSession()  
    console.log(session)
    return (
        <div>
             <h2 className="font-bold">Use Client : </h2> 
             <p className="border-2 rounded-2xl p-3"> {JSON.stringify(session)}</p>
        </div>
    );
};

export default ShowData;