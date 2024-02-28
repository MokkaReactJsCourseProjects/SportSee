//Imports

//Types
interface KindTickProps {
    x: number;
    y: number;
    index: number;
    textAnchor: string;
    payload: any;
}

//Exports
export default function KindTick({
    payload,
    x,
    y,
    index,
    textAnchor,
}: KindTickProps) {
    const shift = index == 0 ? -10 : index == 3 ? 10 : 0;
    return (
        <g>
            <text
                x={x}
                y={y + 4 + shift}
                textAnchor={textAnchor}
                fill="#FFF"
                fontSize={12}
            >
                {payload.value}
            </text>
        </g>
    );
}
