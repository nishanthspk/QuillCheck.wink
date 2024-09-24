import React from 'react';
import Assets from './Assests';
import Status from './Evaluate/Status';
import Report from './Evaluate/Report';
import Info from './Evaluate/Info';

const EvaluateReport = ({ onBackClick, selectedToken, tokenAddress }) => {
  // Map tokens to corresponding asset images
  const tokenImages = {
    ETH: Assets.ETH,    
    BSC: Assets.BSC,    
    Polygon: Assets.Polygon, 
    Base: Assets.Base,
  };

  return (
    <div
      className="bg-[#18162099]/60 rounded-[10px] backdrop-filter h-full backdrop-blur-sm w-[460px] mx-auto jost text-white"
      style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.5)' }}
    >
      <div className="bg-[#181B2E] rounded-t-[10px] p-[15px] px-[20px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img className='h-5' src={Assets.Avatar} alt="" />
            <p className="text-lg text-center">Higher IMO</p>
            <p className='text-xs'>(HIGHER)</p>
          </div>
          <div className="flex rounded-[20px]">
            <button
              onClick={onBackClick}
              className="bg-[#007AFF] hover:bg-[#007AFF] rounded-[5px] text-white p-1 px-6 text-base border-y border-y-[#86AFFF]"
            >
              Back
            </button>
          </div>
        </div>
        <div className="">
          {/* Display token image, token name, and entered address */}
          <p className='text-xs text-white flex items-center'>
            {selectedToken && <span className="mr-2 bg-black p-[6px] px-4 rounded-[5px] text-sm flex gap-1 items-center">
              {selectedToken && tokenImages[selectedToken] && (
              <img
                src={tokenImages[selectedToken]}
                alt={selectedToken}
                className="h-3"
              />
            )}
              {selectedToken}</span>}
            {tokenAddress || 'Enter Token Address'}
          </p>
        </div>
      </div>

      <div className="p-[20px]">
        <div className="flex items-center justify-between h-full">
          <Status />
          <div className="border-l-2 border-white mx-5 "></div>
          <Report />
        </div>

        <div className="border-b-2 border-white my-5 "></div>

        <Info />
      </div>
    </div>
  );
};

export default EvaluateReport;