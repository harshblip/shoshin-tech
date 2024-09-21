export default function Activity() {
    return (
        <>
            <div className='w-full bg-[#1b2049] rounded-md rounded-b-none'>
                <p className='text-white text-lg p-2 ml-2'> Recent Activity </p>
            </div>
            <div className='bg-[#111843] p-4 rounded-md rounded-t-none'>
                <div className='flex flex-col space-y-2'>
                    <p className='text-xs text-gray-500'> 10.40 AM, Fri 10 Sept 2021 </p>
                    <p className='text-white'> You Posted a New Job </p>
                    <p className='text-gray-300 text-xs'> Kindly check the requirements and terms of work and make sure everything is right. </p>
                </div>
                <div className='flex flex-col sm:flex-row justify-between mt-6'>
                    <p className='text-xs text-white mt-2'> Today you makes 12 Activity </p>
                    <button className='p-2 text-xs bg-red-500 w-1/3  mt-2 sm:mt-0 text-white font-semibold rounded-md'> See All Activity </button>
                </div>
            </div>
        </>
    )
}