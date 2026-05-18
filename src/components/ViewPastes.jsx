import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPastes = () => {

    const { id } = useParams();

    const allPastes = useSelector(
        (state) => state.paste.pastes
    );

    const paste = allPastes.filter(
        (p) => p._id === id
    )[0];

    return (

        <div className="min-h-screen bg-black text-white p-6">

            <div className="max-w-4xl mx-auto">


                <div className="mb-6">

                    <input
                        className="
                        w-full
                        p-4
                        rounded-2xl
                        border
                        border-gray-700
                        bg-gray-900
                        text-white
                        text-2xl
                        font-bold
                        focus:outline-none
                        "
                        type="text"
                        value={paste.title}
                        disabled
                    />

                </div>


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
                        text-lg
                        resize-none
                        focus:outline-none
                        "
                        value={paste.content}
                        disabled
                    />

                </div>


                <div className="text-gray-500 mt-4 text-right">

                    Created At :
                    {" "}
                    {paste.createAt}

                </div>

            </div>

        </div>
    )
}

export default ViewPastes