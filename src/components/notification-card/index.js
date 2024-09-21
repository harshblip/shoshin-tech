import { MoreHorizontal, PinIcon } from 'lucide-react'

export default function Notification(props) {
    const { title, ago, category } = props
    return (
        <div className='bg-gray-100 border border-gray-300 rounded-md'>
            <div className='p-4 flex justify-between'>
                <div className='flex flex-col space-y-2 w-[70%]'>
                    <p className='text-gray-600 text-xs'> {title} </p>
                    <p className='text-gray-400 text-xs'> {ago} </p>
                </div>
                <div className='flex space-x-4'>
                    {
                        category === 'announcement' ? <button>
                            <PinIcon
                                className='rotate-45 w-4 text-gray-400'
                            />
                        </button> : ''
                    }
                    <button>
                        <MoreHorizontal
                            className='w-4 text-gray-400'
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}