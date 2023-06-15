import React from 'react'

export const ColorTheme = (props) => {
    let theme1 = {
        bodyBg: {
            backgroundColor: "#9DB2BF",
            
        },
        navbarBg: {
            backgroundColor:"#27374D"
        },
        textColor: {
            color:"#DDE6ED"
        }
    }
    let theme2 = {
        bodyBg: {
            backgroundColor: "#E57C23",
            
        },
        navbarBg: {
            backgroundColor:"#025464"
        },
        textColor: {
            color:"#F8F1F1"
        }
    }
    let theme3 = {
        bodyBg: {
            backgroundColor: "#F3E99F",
            
        },
        navbarBg: {
            backgroundColor:"#FF6D60"
        },
        textColor: {
            color:"#F3E99F"
        }
    }
    let theme4 = {
        bodyBg: {
            backgroundColor: "#22A699",
            
        },
        navbarBg: {
            backgroundColor:"#F2BE22"
        },
        textColor: {
            color:"#F24C3D"
        }
    }

return (
    <>
        <div className="d-flex flex-wrap">
            <div className='btn m-2' onClick={() => { props.changeTheme(theme1) }} style={{ height: '50px', width: '50px', backgroundColor: "#27374D",border:'2px solid white' }} ></div>

            <div className='btn btn-secondary m-2' onClick={() => { props.changeTheme(theme2) }} style={{ height: '50px', width: '50px',border:'2px solid white',backgroundColor: "#025464" }} ></div>

            <div className='btn btn-danger m-2' onClick={() => { props.changeTheme(theme3) }} style={{ height: '50px', width: '50px',border:'2px solid white', backgroundColor: "#FF6D60" }}></div>

            <div className='btn btn-warning m-2' onClick={() => { props.changeTheme(theme4) }} style={{ height: '50px', width: '50px',border:'2px solid white' }}></div>

        </div>
    </>
)
}
