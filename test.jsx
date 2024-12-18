import React from 'react';

const GiftInfo = ({ gifts }) => {
  // Menghitung total hadiah
  const totalAllGifts = gifts.reduce((a, b) => a + (b.num * b.point), 0);

  // Menghitung hadiah berbayar
  const paidGifts = gifts
    .filter((gift) => !gift.free)
    .reduce((a, b) => a + (b.num * b.point), 0);

  // Menghitung hadiah gratis
  const freeGifts = gifts
    .filter((gift) => gift.free)
    .reduce((a, b) => a + (b.num * b.point), 0);

  return (
    <div className="rounded-xl mx-3 md:mx-4 bg-container p-3 md:p-4 space-y-1 md:space-y-2">
      <div className="flex gap-3 justify-between items-center">
        <div className="font-bold text-lg xl:text-xl">Total Gifts</div>
        <div className="text-sm">{totalAllGifts} pts</div>
      </div>
      <div className="bg-yellow-400 h-2 rounded-full overflow-hidden">
        <div
          className="bg-red-400 h-full text-base"
          style={{
            width: `${(paidGifts / totalAllGifts) * 100}%`,
          }}
        />
      </div>
      <div className="space-y-1 text-sm pt-1">
        <div className="text-red-400 flex gap-1.5 items-center">
          <i className="fas fa-gift" />
          <div className="text-sm">
            Paid gifts ({Math.round((paidGifts / totalAllGifts) * 100)}%)
          </div>
        </div>
        <div className="text-yellow-400 flex gap-1.5 items-center">
          <i className="fas fa-star" />
          <div className="text-sm">
            Free gifts ({Math.round((freeGifts / totalAllGifts) * 100)}%)
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftInfo;
