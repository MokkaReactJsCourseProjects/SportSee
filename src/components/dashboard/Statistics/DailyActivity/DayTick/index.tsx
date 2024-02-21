//Imports

//Types
interface DayTickProps {
    x?: number;
    y?: number;
    stroke?: any;
    payload?: any;
}

//Exports
export default function DayTick({ x, y, stroke, payload }: DayTickProps) {
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} textAnchor="middle" fontSize={14} fill="#9B9EAC">
                {payload.index + 1}
            </text>
        </g>
    );
}
