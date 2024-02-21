//Imports

//Types
interface OverlayCursorProps {
    points?: any[];
    width?: number;
    height?: number;
}

//Exports
export default function OverlayCursor({
    points,
    width,
    height,
}: OverlayCursorProps) {
    if (!points || points.length === 0) {
        return null;
    }

    const x = points[0].x;

    return (
        <rect
            x={x}
            y={0}
            width={width - x}
            height={height + 300}
            fill="black"
            fillOpacity={0.1}
        />
    );
}
