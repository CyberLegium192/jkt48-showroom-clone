import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


export const ProfilePicture = () => {
    return (
        <div className='relative'>
            <Skeleton circle height={96} width={96} className='absolute -top-10 ml-3 border-[6px] border-primary-dark' />
        </div>
    )
}