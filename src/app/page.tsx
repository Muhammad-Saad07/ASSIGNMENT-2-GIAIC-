export default function Home() {
  return (

    <div className='bg-[#252b42] min-h-screen'>
      {/* upper div used for bg color whole */}
      {/* Below for center content div 1 */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-8 pb-8 space-y-10 -mt-20 w-[990px] m-auto">
        <div>
          <div className="flex flex-col items-center text-center w-[550px] p-12 space-y-4">
            <h5 className="text-[#23A6F0] text-[16px] leading-[24px] tracking-[0.1px] font-montserrat mt-24 font-bold">Welcome</h5>
            <h1 className="text-[#FFFFFF] text-[53px] leading-[80px] tracking-[0.2px] pt-3 font-montserrat font-bold">Selling on the internet like a pro</h1>
            <h4 className="text-[#FFFFFF] text-[20px] leading-[30px] tracking-[0.2px] pt-3 font-montserrat">We know how large objects will act, but things on a small scale just do not act that way.</h4>
            <div className="flex space-x-2 pt-4">
              <button className="rounded-[5px] px-[25px] py-2 bg-[#23A6F0] text-[#FFFFFF] text-[14px] leading-[22px] tracking-[0.2px] font-montserrat font-bold">Get Quote Now</button>
              <button className="rounded-[5px] px-[25px] py-2 border border-[#23A6F0] text-[#FFFFFF] text-[14px] leading-[22px] tracking-[0.2px] font-montserrat font-bold">Learn More</button>
            </div>
          </div>
        </div>
        {/* below div 2 content */}
        <div className="flex space-x-6">
          <div className="grid grid-cols-3 gap-5 w-full  mt-8">
            <div className="bg-[#FFFFFF] rounded w-80 h-72 pt-8 px-12">
              <div className="flex flex-col items-start">
                <div className="w-[70px] h-[76px] bg-[#FFDCD1] rounded-lg mb-4 "></div>
                <h5 className="text-[#252B42] text-[16px] leading-[24px] tracking-[0.1px] font-Montserrat font-bold">training Courses</h5>
                <div className="w-[50px] h-[2px] bg-[#E74040] mt-4"></div>
                <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] font-[400px] pt-5 font-montserrat">The gradual accumulation of information about atomic and small-scale behaviour...</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 w-full  mt-8">
            <div className="bg-[#FFFFFF] rounded w-80 h-72 pt-8 px-12">
              <div className="flex flex-col items-start">
                <div className="w-[70px] h-[76px] bg-[#B9EAA8] rounded-lg mb-4 "></div>
                <h5 className="text-[#252B42] text-[16px] leading-[24px] tracking-[0.1px] font-montserrat font-bold">2,769 training Courses</h5>
                <div className="w-[50px] h-[2px] bg-[#E74040] mt-4"></div>
                <p className="text-[#737373] text-[14px] leading-[20px] tracking-[0.2px] font-[400px] pt-5 font-montserrat">The gradual accumulation of information about atomic and small-scale behaviour...</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 w-full  mt-8">
            <div className="bg-[#23A6F0] rounded w-80 h-72 pt-8 px-12">
              <div className="flex flex-col items-start">
                <div className="w-[70px] h-[76px] bg-[#FFFFFF] rounded-lg mb-4 "></div>
                <h5 className="text-[#FFFFFF] text-[16px] leading-[24px] tracking-[0.1px] font-montserrat font-bold">training Courses</h5>
                <div className="w-[50px] h-[2px] bg-[#FFFFFF] mt-4"></div>
                <p className="text-[#FFFFFF] text-[14px] leading-[20px] tracking-[0.2px] font-[400px] pt-5 font-montserrat">The gradual accumulation of information about atomic and small-scale behaviour...</p>
              </div>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}