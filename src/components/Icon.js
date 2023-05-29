import SVG from "react-inlinesvg"

export default function Icon ({ name, ...props }) {
    return (
        <SVG
            src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
            {...props}
        />
    )
}