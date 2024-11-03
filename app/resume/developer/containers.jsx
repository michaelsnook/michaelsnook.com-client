import { Socials } from '../page'

export function Wrapper({ children }) {
  return (
    <div className="bg-gray-300 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 md:shadow-[rgba(0,_0,_0,_0.3)_0px_0px_15px_5px] md:rounded bg-white p-2 mx-auto md:max-w-[1050px] md:h-[1485px]">
        {children}
      </div>
    </div>
  )
}

export function LeftContainer({ children }) {
  return (
    <div className="md:col-span-1 md:w-[260px] bg-lilac-soft/50 h-full pt-10 md:pt-16 pb-6 md:pb-10 px-6 flex flex-col gap-4 md:gap-10 font-display">
      {children}
      <div className="flex-end flex flex-row justify-around text-lilac">
        <Socials />
      </div>
    </div>
  )
}

export function RightContainer({ children }) {
  return (
    <div className="md:col-span-3 space-y-4 pb-4 md:pb-10 pt-10 md:px-16">
      {children}
    </div>
  )
}
