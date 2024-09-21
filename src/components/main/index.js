import { ChevronDown } from 'lucide-react'
import data from '../../dummyData.json'
import Cards from '../cards'
import Graphcards from '../graphcards'
import Activity from '../activity-card'
import Notification from '../notification-card'

export default function Main() {
    return (
        <div className="p-4 mt-8 flex flex-col font-poppins">
            <div className="font-poppins text-gray-600 font-bold text-lg ml-4">
                Dashboard
            </div>
            <div className=" flex flex-col lg:flex-row w-full">
                <div className="sm:w-[55%] p-0 sm:p-4">
                    <div className=' flex flex-col sm:flex-row sm:space-y-0 space-y-4 space-x-2'>
                        {
                            data.map((x, i) => i < 3 ? <Cards
                                title={x.title}
                                number={x.number}
                                need={x.need}
                                color={x.color}
                                textColor={x.textColor}
                            /> : <></>)
                        }
                    </div>
                    <div className='w-full flex flex-col sm:flex-row sm:space-y-0 space-y-4 flex-1 space-x-2 mt-4'>
                        {
                            data.map((x, i) => i >= 3 && i < 5 ? <Graphcards
                                title={x.title}
                                number={x.number}
                                men={x.men}
                                women={x.women}
                                growth={x.growth}
                            /> : '')
                        }
                    </div>
                    <div className=' border border-gray-300 rounded-md font-poppins mt-4'>
                        <div className='p-4 flex justify-between'>
                            <p className='text-lg text-gray-600'> Announcement </p>
                            <button className='flex border border-gray-300 p-2 rounded-md text-xs text-gray-600'> Today 13 Sept 2021 <span> <ChevronDown className='w-4 ml-2 -mt-1 text-gray-400' /> </span> </button>
                        </div>
                        <div className='flex flex-col space-y-4 p-4 basis-1/4'>
                            {
                                data.map((x, i) => i > 4 && i < 8 ? <Notification
                                    title={x.title}
                                    ago={x.ago}
                                    category="announcement"
                                /> : '')
                            }
                            <p className='flex justify-center font-semibold text-[#ff5151] text-sm'> See All Announcement  </p>
                        </div>
                    </div>
                </div>
                <div className=" flex-1 flex-col p-4">
                    <Activity />
                    <div className='border border-gray-300 rounded-md font-poppins mt-4'>
                        <div className='p-4 flex justify-between'>
                            <p className='text-base mt-2 text-gray-600'> Upcoming Schedule </p>
                            <button className='flex border border-gray-300 p-2 rounded-md text-xs text-gray-600'> Today 13 Sept 2021 <span> <ChevronDown className='w-4 ml-2 -mt-1 text-gray-400' /> </span> </button>
                        </div>
                        <div className='flex flex-col space-y-4 p-4'>
                            <p className="text-xs text-gray-400"> Priority </p>
                            {
                                data.map((x, i) => i > 7 && x.status === 'priority' ? <Notification
                                    title={x.title}
                                    ago={x.ago}
                                    category="schedule"
                                /> : '')
                            }
                            <p className="text-xs text-gray-400"> Other </p>
                            {
                                data.map((x, i) => i > 7 && x.status === 'other' ? <Notification
                                    title={x.title}
                                    ago={x.ago}
                                    category="schedule"
                                /> : '')
                            }
                            <p className='flex justify-center font-semibold text-[#ff5151] text-sm'> See All Announcement  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}