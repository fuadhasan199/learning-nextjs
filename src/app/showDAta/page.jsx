

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

// import { useSession } from "next-auth/react";

const ShowData = async() => { 
    // const session=useSession()  
    // console.log(session) 
    const session=await getServerSession(authOptions)
    return (
        <div>
             <h2 className="font-bold">Use Server : </h2> 
             <p className="border-2 rounded-2xl p-3"> {JSON.stringify(session)}</p>
        </div>
    );
};

export default ShowData;