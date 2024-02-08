//Exports
export default function hexToRgba(hex: string, opacity: number) {
    const r = parseInt(hex[1] + hex[2], 16);
    const g = parseInt(hex[3] + hex[4], 16);
    const b = parseInt(hex[5] + hex[6], 16);
    return `rgba(${r},${g},${b},${opacity})`;
}
