import { Link } from "react-router-dom"

const formatViewCount = (num) => {
    if (num >= 1_000_000_000) {
        return (num / 1_000_000_000).toFixed(1) + "b"; // Miliar
    } else if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1) + "m"; // Juta
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1) + "k"; // Ribu
    }
    return num.toString(); // Tidak diubah jika di bawah 1.000
};
export const YoutubeVideo = ({ item }) => {
    const viewCount = parseInt(item?.viewCount || "0", 10); // Pastikan viewCount dalam bentuk angka
    const formattedViewCount = formatViewCount(viewCount);

    return (
        <div className="w-full">
            <Link to="/">
                <img src={item?.thumbnail[3]?.url} alt="thumnail" className="h-36 max-sm:h-48 w-full object-cover rounded-lg" />
            </Link>
            <div className="pl-1 pt-3 flex  gap-x-3">
                <Link to="https://www.youtube.com/@JKT48TV" className="overflow-hidden w-12 h-10">
                    <img src="https://yt3.googleusercontent.com/eFmDTrRup0j5sSqoPSuscvE6MSeGefH5Extvc-xo_CtgEgyIrUphg9sfpaUMcmnln5maDeP6=s160-c-k-c0x00ffffff-no-rj" alt="profile channel" className="rounded-full object-cover" />
                </Link>
                <div className="w-full font-poppins">
                    <Link className="text-primary-text text-sm font-poppins font-semibold line-clamp-2">{item.title}</Link>
                    <Link to="https://www.youtube.com/@JKT48TV" className="text-gray-400 mt-1 text-xs block leading-none">JKT48 TV</Link>
                    <span className="text-gray-400 text-xs ">{formattedViewCount} views • {item.publishedTimeText}</span>
                </div>


            </div>
        </div>
    )
}
