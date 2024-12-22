import IDNLOGO from "../../assets/IDN_Live.png";


export const VidoePlayer = ({videoRef, nameMember}) => {
    return (
        <div className="relative w-full max-sm:w-[80%] flex items-center justify-center overflow-hidden rounded-xl">
            <video
                autoPlay
                ref={videoRef}
                controls
                className="w-full h-[60%] rounded-md  shadow-lg "
                referrerPolicy="no-referrer"
            />
            {/* Overlay untuk logo */}
            <div className="absolute top-2 right-2 font-semibold bg-black bg-opacity-60 font-poppins text-white px-3 py-1 rounded-md text-sm">
                {nameMember}
            </div>
            <img src={IDNLOGO} alt="" className="absolute top-2 left-2 w-20"/>
        </div>
    )
}
