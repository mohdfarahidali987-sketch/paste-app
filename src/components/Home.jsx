import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice.js";
import  toast from "react-hot-toast";

const Home=()=>{
    const [title,setTitle]=useState("");
    const [value, setValue]=useState("");
    const [searchParams , setSearchParams]=useSearchParams();
   
    const pasteId=searchParams.get("pasteId");
    const dispatch=useDispatch();
    const allPastes=useSelector((state)=>state.paste.pastes);
    useEffect(()=>{
         if(pasteId){
            const paste=allPastes.find((p)=> p._id === pasteId);
        setTitle(paste.title);
        setValue(paste.content);
         }
        

    },[pasteId])
    function createMyPaste(){
        <style>
            background-color:"red"
        </style>
        const paste={
            title:title,
            content:value,
            _id: pasteId || crypto.randomUUID(),
            createAt:new Date().toISOString()
            

       
        }

        if(pasteId){
            //update
            dispatch(updateToPastes(paste));
            toast.success("Paste Updated")
          
        }
            else{
               // carete
               dispatch(addToPastes(paste))
                toast.success("Paste Created")
              
            }
            // after creation or updation 
            setTitle(''); 
            setValue('');
            setSearchParams({});
        
    }
    return (

    <div className="
        min-h-screen
        bg-black
        text-white
        p-6
    ">

        <div className="
            max-w-5xl
            mx-auto
            flex
            flex-col
            gap-6
        ">

            {/* Top Section */}
            <div className="
                flex
                flex-col
                md:flex-row
                gap-4
            ">

                <input
                    className="
                    flex-1
                    p-4
                    rounded-2xl
                    border
                    border-gray-700
                    bg-gray-900
                    text-white
                    placeholder-gray-400
                    focus:outline-none
                    focus:border-blue-500
                    text-lg
                    "
                    type="text"
                    placeholder="Enter title here..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button
                    onClick={createMyPaste}
                    className="
                    bg-blue-600
                    hover:bg-blue-700
                    transition-all
                    duration-200
                    px-6
                    py-4
                    rounded-2xl
                    font-semibold
                    text-lg
                    shadow-lg
                    "
                >
                    {
                        pasteId
                            ? "Update Paste"
                            : "Create Paste"
                    }
                </button>

            </div>

            {/* Textarea */}
            <div>

                <textarea
                    className="
                    w-full
                    min-h-[500px]
                    p-5
                    rounded-2xl
                    border
                    border-gray-700
                    bg-gray-900
                    text-gray-300
                    placeholder-gray-500
                    text-lg
                    resize-none
                    focus:outline-none
                    focus:border-blue-500
                    "
                    value={value}
                    placeholder="Write your content here..."
                    onChange={(e) => setValue(e.target.value)}
                />

            </div>

        </div>

    </div>
)
}
export default Home