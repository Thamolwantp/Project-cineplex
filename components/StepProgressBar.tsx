const StepProgressBar = () => {
    return (
      <div className="flex items-center justify-center w-full py-4 bg-gradient-to-b from-[#9D8527] to-[#D6BB56] shadow-md fixed top-0 z-50">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black">1</div>
          <p className="text-black mt-2">เลือกรอบภาพยนตร์</p>
        </div>
        <div className="h-0.5 w-16 bg-gray-400 mx-2"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black">2</div>
          <p className="text-black mt-2">เลือกที่นั่ง</p>
        </div>
        <div className="h-0.5 w-16 bg-gray-400 mx-2"></div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 flex items-center justify-center rounded-full  bg-black text-white">3</div>
          <p className="text-black mt-2">ชำระเงิน</p>
        </div>
      </div>
    );
  };
  
  export default StepProgressBar;
  