import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ScheduleSkeleton = () => {
  return (
    <SkeletonTheme
      baseColor="#1E252F"
      highlightColor="#313640"
      borderRadius={10}
    >
      <div className='overflow-hidden relative rounded-lg p-3 bg-gray-800'>
        {/* Skeleton for image */}
        <div className='w-full h-40 overflow-hidden relative'>
          <Skeleton className='object-center object-cover w-full h-full rounded-lg' />
          <span className='absolute top-0 left-0 text-sm py-1 px-5  bg-opacity-90 rounded-tl-lg rounded-br-lg font-poppins text-white'>
            <Skeleton width={50} height={15} />
          </span>
        </div>

        {/* Skeleton for text content */}
        <div className='mt-3 pl-1 relative'>
          {/* Skeleton for title */}
          <p className='font-poppins text-sm text-white font-medium'>
            <Skeleton width={150} height={17} />
          </p>
          
          {/* Skeleton for date */}
          <p className='text-xs text-gray-300 my-2 font-poppins font-normal'>
            <Skeleton width={100} height={12} />
          </p>

          {/* Skeleton for member count */}
          <p className='text-xs inline-block font-poppins text-white  px-3 py-1 rounded-xl'>
            <Skeleton width={70} height={12} />
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};
