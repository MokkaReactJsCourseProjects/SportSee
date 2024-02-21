//Imports

//Types
interface ActiveDotProps {
    cx?: number;
    cy?: number;
}

//Exports
export default function ActiveDot({ cx, cy }: ActiveDotProps) {
    return (
        <g>
            <circle cx={cx} cy={cy} r={9} fill="#FFFFFF33" />
            <circle cx={cx} cy={cy} r={4} fill="#FFFFFF" />
        </g>
    );
}
