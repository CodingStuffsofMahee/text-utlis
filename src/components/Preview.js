import React from 'react'

export const Preview = (props) => {
    return (
        <>
            <div className=' container'>
                <p>Preview</p>

                <div className="border border-secondary rounded-2 container" style={{ height: '50px' }}>{props.previewText}</div>
            </div>
        </>

    )
}
