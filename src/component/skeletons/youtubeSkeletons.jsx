import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const YoutubeSkeletonCard = () => {
  return (
    <SkeletonTheme
      baseColor="#1E252F" // Warna dasar gelap yang lebih lembut
      highlightColor="#313640"
      borderRadius={10} // Mengatur border radius global
    >
      <div className="w-full">
        {/* Skeleton for Thumbnail */}
        <div className="h-36 max-sm:h-48 w-full object-cover rounded-lg">
          <Skeleton className="h-full w-full" />
        </div>

        {/* Skeleton for Profile and Text Section */}
        <div className="pl-1 pt-3 flex gap-x-3">
          {/* Skeleton for Profile Picture */}
          <div className="overflow-hidden w-14 h-14">
            <Skeleton circle={true} height={40} width={40} />
          </div>

          {/* Skeleton for Texts */}
          <div className="w-full font-poppins">
            {/* Skeleton for Title */}
            <Skeleton className="mb-1" width={`80%`} height={15} />

            {/* Skeleton for Channel Name */}
            <Skeleton className="-mt-12" width={`60%`} height={10} />

            {/* Skeleton for View Count and Time */}
            <Skeleton width={`50%`} height={10} className="-mt-8" />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
