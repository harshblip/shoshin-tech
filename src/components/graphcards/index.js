import { LineChart, Line } from "recharts"

export default function Graphcards(props) {
    const data = [
        { name: 'Page A', uv: 200 },
        { name: 'Page A', uv: 600 },
        { name: 'Page A', uv: 300 },
        { name: 'Page A', uv: 700 }
    ]
    const { title, number, men, women, growth } = props
    return (
        <div className="flex flex-1 p-3 border border-gray-300 rounded-md justify-between">
            <div className="flex flex-col font-poppins text-gray-600">
                <p className="text-md"> {title} </p>
                <p className="text-xl mt-4"> {number} </p>
                <p className="text-xs text-gray-400 mt-4"> {men} &nbsp; men </p>
                <p className="text-xs text-gray-400 mt-1"> {women} &nbsp; women </p>
            </div>
            <div className="flex flex-col space-y-1">
                <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                    <defs>
                        <filter
                            id="shadow"
                            x="-50%"
                            y="-50%"
                            width="200%"
                            height="200%"
                        >
                            <feDropShadow
                                dx="2"
                                dy="2"
                                stdDeviation="4"
                                floodColor="#ff5151"
                            />
                        </filter>
                    </defs>
                </svg>
                <LineChart
                    width={100}
                    height={100}
                    data={data}
                >
                    <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#ff5151"
                        strokeWidth={2}
                        filter="url(#shadow)"
                    />
                </LineChart>
                <div className="bg-[#ffefe7] flex justify-center rounded-md">
                    <p className="p-1 text-[0.6rem] text-gray-600 font-poppins"> {growth} </p>
                </div>
            </div>
        </div>
    )
}