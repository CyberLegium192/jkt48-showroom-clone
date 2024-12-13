import { FaCalendarMinus } from "react-icons/fa";
import { BsFillStopwatchFill } from "react-icons/bs";
import { format, isValid } from "date-fns";
export const DetailGift = ({ data }) => {
    // Validasi data.created_at
    const createdAt = data?.created_at ? new Date(data?.created_at) : null;

    // Pastikan date valid
    const formattedDate = createdAt && isValid(createdAt)
        ? format(createdAt, "EEEE, dd MMMM yyyy")
        : "Invalid Date";

    const startTime = createdAt && isValid(createdAt)
        ? format(createdAt, "hh:mm a")
        : "Invalid Time";

    // Hitung waktu akhir (44 menit + 6 detik setelah waktu awal)
    const endTimeDate = createdAt && isValid(createdAt)
        ? new Date(createdAt.getTime() + 44 * 60 * 1000 + 6 * 1000)
        : null;

    const endTime = endTimeDate && isValid(endTimeDate)
        ? format(endTimeDate, "hh:mm a")
        : "Invalid Time";

    const duration = data?.live_info.duration;

    // Kalkulasi total detik, menit, dan jam
    const totalSeconds = Math.floor(duration / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Format teks durasi
    const durationText = hours > 0
        ? `${hours} Hours ${minutes} Minutes ${seconds} Seconds`
        : `${minutes} Minutes ${seconds} Seconds`;

    // TOTAL GIFT 
    const totalRupiah = data?.gift_rate * data?.total_gifts;
    return (

        <div className="px-4 text-white grid grid-cols-1 md:grid-cols-2 gap-5 pb-4 font-poppins">
            {/* Kolom 1 */}
            <div className="flex flex-col gap-5">
                {/* DATE LIVE */}
                <div className="bg-gray-800 py-5 px-4 flex items-center rounded-xl">
                    <div>
                        <p className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-700 bg-opacity-60 text-pink-200">
                            <FaCalendarMinus size={20} />
                        </p>
                    </div>
                    <div className="w-full text-center font-poppins">
                        <h5 className="font-medium text-[15px]">{formattedDate}</h5>
                        <span className="text-white text-sm mt-1 block text-opacity-70">
                            {startTime} - {endTime}
                        </span>
                    </div>
                </div>
                {/* DURATION */}
                <div className="bg-gray-800 py-5 px-4 flex items-center rounded-xl">
                    <div>
                        <p className="flex items-center justify-center w-12 h-12 rounded-full bg-orange bg-opacity-50 text-yellow-500">
                            <BsFillStopwatchFill size={20} />
                        </p>
                    </div>
                    <div className="w-full text-center font-poppins">
                        <h5 className="font-medium text-[15px]">{durationText}</h5>
                        <span className="text-white text-sm mt-1 block text-opacity-70 capitalize">
                            duration
                        </span>
                    </div>
                </div>
            </div>

            {/* Kolom 2 */}
            <div className="bg-gray-800 rounded-xl pt-3 px-5 pb-5">
                <h4 className="font-poppins text-lg font-medium tracking-wide">Detail</h4>
                <div className="grid grid-cols-2 mt-3 gap-y-2 text-sm">
                    <h5 className="text-gray-400 font-medium tracking-widest text-sm">Gift</h5>
                    <p className="text-primary-text font-medium tracking-wider text-sm">
                        {data?.total_gifts}G (±Rp {totalRupiah.toLocaleString("id-ID", { minimumFractionDigits: 2 })})
                    </p>

                    <h5 className="text-gray-400 font-medium tracking-widest text-sm">Viewer</h5>
                    <p className="text-primary-text font-medium">
                        {data?.live_info.viewers?.num.toLocaleString("id-ID")}
                    </p>

                    <h5 className="text-gray-400 font-medium tracking-widest">Active Viewer</h5>
                    <p className="text-primary-text font-medium">
                        {data?.live_info?.viewers?.active}
                    </p>

                    <h5 className="text-gray-400 font-medium tracking-widest">Comments</h5>
                    <p className="text-primary-text font-medium">
                        {data?.live_info.comments?.num.toLocaleString("id-ID")}
                        <span className="text-xs ml-2 text-gray-400">
                            by {data?.live_info.comments?.users.toLocaleString("id-ID")} users
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
