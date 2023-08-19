import React from 'react'

export const Preview = (props) => {
    return (
        <>
            <div className=' container'>
                <p>Preview</p>

                <div className=" container" style={{ minHeight: '50px' }}>{props.length} Words....</div>
                <div className="border border-secondary rounded-2 container" style={{ height: '100px',overflowY:"scroll" }}>{props.previewText}</div>
            </div>
        </>

    )
}
