import { GiftListCard } from "../card/giftListCard"

const giftList = ({data}) => {
  return (
    <div className="px-4 mt-4">
        <div className="px-4 bg-gray-800 rounded-xl py-4">
            <h3 className="text-white font-poppins font-semibold text-lg tracking-wide">Gift List</h3>

            <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-x-3 gap-y-4">
                {
                    data?.live_info.gift.list.map((item, i) => <GiftListCard key={i} item={item} />)
                }
            </div>

        </div>
    </div>
  )
}

export default giftList