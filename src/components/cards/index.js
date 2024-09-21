export default function Cards(props) {
    const { color, title, number, need, textColor } = props;
    return (
        <div className={`p-4 rounded-md flex flex-1 flex-col justify-evenly space-y-2`} style={{ backgroundColor: color }}>
            <p className='text-sm font-semibold text-gray-600'> {title} </p>
            <p className='text-xs text-gray-600'> {number}  </p>
            <p className='text-xs font-semibold' style={{ color: textColor }}> {need} </p>
        </div>
    )
}