import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonCardNews = () => {
    return (
        <SkeletonTheme 
            baseColor="#161B22" highlightColor="#2A2E37"
            borderRadius={10} // Mengatur border radius global
        >

        <div className="rounded-lg bg-card-bg border-2 border-border-color w-full relative px-2 pt-2 pb-3">
            {/* Tema dan waktu */}
            <div className="flex items-center justify-between px-2 font-poppins font-semibold">
                <Skeleton width={50} height={10} borderRadius={10} />
                <Skeleton width={80} height={12} borderRadius={10} />
            </div>
            {/* Judul berita */}
            <div className="px-2 mt-3">
                <Skeleton count={3} height={10} borderRadius={5} style={{ marginBottom: '4px' }} />
            </div>
        </div>
        </SkeletonTheme>
    );
};
