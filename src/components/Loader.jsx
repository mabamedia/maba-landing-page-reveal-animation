const Loader = ({children}) => {
  return (
    <>
      <div class='loader fixed top-0 left-0 w-screen h-screen bg-black text-white flex items-end overflow-hidden'>
        <div className="count-wrapper relative w-[180px] h-[360px] [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] will-change-transform">
          <div className="count relative w-[1080px] h-[360px flex translate-x-[-1080px] will-change-transform">
            <div className="digit relative w-[180px] h-[360px]">
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter">9</h1>
            </div>

            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>8</h1>
            </div>

            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>7</h1>
            </div>

            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>4</h1>
            </div>

            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>2</h1>
            </div>

            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>0</h1>
            </div>
          </div>
        </div>

        <div className="count-wrapper relative w-[180px] h-[360px] [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] will-change-transform">
          <div className="count relative w-[1080px] h-[360px flex translate-x-[-1080px] will-change-transform">
            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>9</h1>
            </div>

            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>5</h1>
            </div>

            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>9</h1>
            </div>

            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>7</h1>
            </div>

            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>4</h1>
            </div>

            <div className="digit relative w-[180px] h-[360px]">
              <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-[180px] font-lighter'>0</h1>
            </div>
          </div>
        </div>

        <div className="revealer revealer-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="2362" height="2742" viewBox="0 0 2362 2742" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path id="Vector" d="M2361.99 1227.2C2364.82 1215.53 1546.13 1268.61 1385.32 1128.68C1214.81 980.555 1237.55 0 1237.55 0C1237.55 0 1173.55 935.608 929.651 1212.41C692.948 1481.03 0.459082 1519.43 0.00728682 1514.65C-2.81643 1526.32 815.874 1473.24 976.713 1613.2C1147.23 1761.44 1124.45 2742 1124.45 2742C1124.45 2742 1205.51 1719.32 1457.01 1514.05C1708.51 1308.77 2129.13 1260.36 2129.13 1260.36L2361.99 1227.2Z" fill="white"/>
          </svg>
        </div>

        <div className="revealer revealer-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="2362" height="2742" viewBox="0 0 2362 2742" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M2361.99 1227.2C2364.82 1215.53 1546.13 1268.61 1385.32 1128.68C1214.81 980.555 1237.55 0 1237.55 0C1237.55 0 1173.55 935.608 929.651 1212.41C692.948 1481.03 0.459082 1519.43 0.00728682 1514.65C-2.81643 1526.32 815.874 1473.24 976.713 1613.2C1147.23 1761.44 1124.45 2742 1124.45 2742C1124.45 2742 1205.51 1719.32 1457.01 1514.05C1708.51 1308.77 2129.13 1260.36 2129.13 1260.36L2361.99 1227.2Z" fill="green"/>
          </svg>
        </div>

        <div className="revealer revealer-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg width="2362" height="2742" viewBox="0 0 2362 2742" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M2361.99 1227.2C2364.82 1215.53 1546.13 1268.61 1385.32 1128.68C1214.81 980.555 1237.55 0 1237.55 0C1237.55 0 1173.55 935.608 929.651 1212.41C692.948 1481.03 0.459082 1519.43 0.00728682 1514.65C-2.81643 1526.32 815.874 1473.24 976.713 1613.2C1147.23 1761.44 1124.45 2742 1124.45 2742C1124.45 2742 1205.51 1719.32 1457.01 1514.05C1708.51 1308.77 2129.13 1260.36 2129.13 1260.36L2361.99 1227.2Z" fill="black"/>
          </svg>
        </div>
      </div>

      <div className="container relative w-screen h-screen overflow-hidden">{children}</div>
    </>
  )
}

export default Loader