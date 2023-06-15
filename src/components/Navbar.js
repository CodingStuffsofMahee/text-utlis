import React, { useState } from 'react'
import { ColorTheme } from "./ColorTheme";

export const Navbar = () => {
    let deafultStyle = {
        navbarBg: {
            backgroundColor:"#212121"
        },
        textColor: {
            color:"#fff"
        }
    }
    const [theme, setTheme] = useState(deafultStyle)

    function changeTheme(themeStyle) {
        console.log(themeStyle.bodyBg['backgroundColor']);
        setTheme(themeStyle)
        console.log(theme.navbarBg);
        document.body.style.backgroundColor=themeStyle.bodyBg['backgroundColor']

    }
    return (
       
        <>
            <nav className="navbar navbar-expand-lg  m-1 rounded-4 " style={theme.navbarBg} data-bs-theme="dark">
                <div className="container-fluid ">
                    <a className={`navbar-brand`} style={theme.textColor} href="#">Text Utlis</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-white" href="#">Link</a>
                            </li> */}
                        </ul>
                        <form className="d-flex" role="search">
                            <ColorTheme changeTheme={changeTheme} />
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
