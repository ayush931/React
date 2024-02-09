/* eslint-disable jsx-a11y/alt-text */

function Avatar ({ src, width, height, children }) {
    return (
        <>
            <img src={src} width={width} height={height} />
            {children}
        </>
    )
}

export default Avatar