import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { removeFromPastes } from "../redux/pasteSlice";
import toast, { Toaster } from "react-hot-toast";

const Pastes = () => {
    const pastes = useSelector((state) =>
        state.paste.pastes);
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const filtredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  function HandleDelete(pasteId) {

    dispatch(removeFromPastes(pasteId));

    toast.success("Paste Deleted");
}
   async function handleShare(paste) {

    const shareData = {
        title: paste.title,
        text: paste.content,
        url: `${window.location.origin}/pastes/${paste._id}`
    };

    try {

        if (navigator.share) {

            await navigator.share(shareData);

            toast.success("Shared Successfully");

        } 
        
        else {

            navigator.clipboard.writeText(shareData.url);

            toast.success("Link Copied");
        }

    } 
    
    catch (error) {

        toast.error("Sharing Failed");
    }
}



   return (
    <div className="max-w-5xl mx-auto p-6">

        <input
            className="w-full p-4 rounded-2xl border-2 border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            type="search"
            placeholder="Search your paste here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-col gap-6 mt-8">

            {
                filtredData.length > 0 &&
                filtredData.map((paste) => {

                    return (

                        <div
                            key={paste?._id}
                            className="bg-gray-900 border border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                        >

                            {/* Title */}
                            <div className="text-2xl font-bold text-white">
                                {paste.title}
                            </div>

                            {/* Content */}
                            <div className="text-gray-300 mt-3 break-words">
                                {paste.content}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 justify-end mt-6">

                                {/* Edit */}
                                <a
                                    href={`/?pasteId=${paste?._id}`}
                                    className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-xl transition-all duration-200"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/1827/1827933.png"
                                        style={{ height: "22px" }}
                                    />
                                </a>

                                {/* View */}
                                <a
                                    href={`/pastes/${paste?._id}`}
                                    className="bg-green-500 hover:bg-green-600 p-3 rounded-xl transition-all duration-200"
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/709/709612.png"
                                        style={{ height: "22px" }}
                                    />
                                </a>

                                {/* Delete */}
                                <button
                                    className="bg-red-500 hover:bg-red-600 p-3 rounded-xl transition-all duration-200"
                                    onClick={() => HandleDelete(paste?._id)}
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/18214/18214589.png"
                                        style={{ height: "22px" }}
                                    />
                                </button>

                               {/* Copy Button */}
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 p-3 rounded-xl transition-all duration-200"
                                    onClick={() => {
                                        navigator.clipboard.writeText(paste?.content)
                                        toast.success("Content Copied")
                                    }}
                                >
                                    <img
                                        src="https://img.icons8.com/?size=100&id=30&format=png"
                                        style={{ height: "22px" }}
                                    />
                                </button>

                                {/* Share button */}
                                <button
                                    className="bg-purple-500 hover:bg-purple-600 p-3 rounded-xl transition-all duration-200"
                                    onClick={() => handleShare(paste)}
                                >
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/128/2550/2550207.png"
                                        style={{ height: "22px" }}
                                    />
                                </button>

                            </div>

                            {/* Date */}
                            <div className="text-gray-400 text-sm mt-5 text-right">
                                {paste.createAt}
                            </div>

                        </div>
                    )
                })
            }

        </div>
    </div>
)
}
export default Pastes