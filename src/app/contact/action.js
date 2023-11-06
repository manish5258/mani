'use server'
import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";


  export const submitContact = async (data)=>{
        try{
            await dbConn();
            console.log ("hello");
            await Contact.create(data);
            return {status: "ok" , message:"Message sent successfully!"};
           }

        catch (e) {
              return {status: "Error" , message:"server error"};
            }
    }
    

        // const body = await req.json();
        

        // return {status: "ok" , message:"Message sent successfully!"};
        //       },
        //     { }
            
        // )
       
   
    
