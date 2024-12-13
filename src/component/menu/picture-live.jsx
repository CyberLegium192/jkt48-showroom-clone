import IDNlogo from '../../assets/IDN_Live.png'

export const PictureLive = ({data}) => {
  return (
    <div className="flex max-sm:flex-col gap-4 p-4 max-w-6xl mx-auto mb-3">
    {/* Kolom kiri */}
    <div className="w-80 h-64 max-sm:h-80 max-sm:w-full overflow-hidden rounded-xl relative">
        <img src={data?.idn?.image} alt="live image poster" className="w-full h-full object-cover"/>
        <h4 className="absolute top-2 left-2 font-poppins text-lg tracking-wide text-white font-semibold">{data?.idn?.title}</h4>
        <img src={IDNlogo} alt="IDN LOGO" className='absolute bottom-2 right-2 w-16'/>
    </div>

    {/* Kolom kanan */}
    <div className="bg-gray-800 rounded-xl flex items-center justify-center w-full">
        <p className="text-gray-400">Tidak ada screenshot</p>
    </div>
</div>

  )
}
