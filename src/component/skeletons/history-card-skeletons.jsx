import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const HistoryLiveSkeleton = () => {
  return (
    <SkeletonTheme
      baseColor="#161B22" highlightColor="#0D1117" 
      borderRadius={10} // Mengatur border radius global
    >
       <Skeleton height={144} width="100%" />
    </SkeletonTheme>
  );
};
