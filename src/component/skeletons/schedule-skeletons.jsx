import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ScheduleSkeleton = ({ recent }) => {
  return (
    <SkeletonTheme
      baseColor="#1E252F"         // Warna dasar gelap yang lebih lembut
      highlightColor="#313640"
      borderRadius={10} // Mengatur border radius global
    >

      <div className={`overflow-hidden relative rounded-lg border-2 border-border-color ${recent ? "lg:w-36 max-sm:w-full" : "lg:w-64 max-sm:w-full"}`}>
        {/* Skeleton for image */}
        <div className={`${recent ? "lg:w-36 max-sm:w-full" : "lg:w-60 max-sm:w-full"} h-44 overflow-hidden -mt-1`}>
          <Skeleton className="h-full w-full" />
        </div>

        {/* Skeleton for gradient and texts */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/40 to-black/60">
          {/* Skeleton for time and date */}
          <div className="absolute top-0 left-0 bg-black/40 px-2 rounded-lg">
            <Skeleton width={40} height={7} />
            <Skeleton width={70} height={7} />
          </div>

          {/* Skeleton for title */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
            <Skeleton width={150} height={17} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
