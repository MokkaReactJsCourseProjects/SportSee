//Imports

//Types
interface DayTickProps {
    x?: number;
    y?: number;
    payload?: any;
}

//Exports
export default function DayTick({ x, y, payload }: DayTickProps) {
    const day = payload.value.split("-")[2];

    return (
        <g transform={`translate(${x},${y + 8})`}>
            <text x={0} y={0} textAnchor="middle" fontSize={14} fill="#9B9EAC">
                {Number(day)}
            </text>
        </g>
    );
}
