import './Sidebar_right.css'
import React, { useState } from 'react';

export function Sidebar_right(){
    const [active, setActive] = useState(0);
    return(
        <aside className='sidebar_right'> 
            <div className='sidebar_header'>
                <div className='right_title'>
                    <img src='./Header_img/Ellipse.svg'/>
                    <span>Messages</span>
                </div>
                <div className='sidebar_icons'>
                    <img src='./Sidebars_img/mhorizontal.svg'/>
                    <img src='./Sidebars_img/edit.svg'/>
                    <img src='./Sidebars_img/CCD.svg'/>
                </div>
            </div>
            <div className='sidebar_fullsearch'>
                <form role="search" className='sidebar_search' >
                    <input name="header_search" type="search" placeholder='Search messages'></input>
                    <img src='./Header_img/search.svg'/>
                </form>
                <img src='./Sidebars_img/Sliders.svg'/>
            </div>
            <div className='sidebar_messagebox'>
                <div className='messagebox_btn'>
                    <button className={active === 1 ? 'active' : ''} onClick={() => setActive(1)}>Sorted</button>
                    <button className={active === 0 ? 'active' : ''} onClick={() => setActive(0)}>Other</button>
                </div>
                <div className='fullmessagebox'>
                    <img src='./Sidebars_img/Mail.png'/>
                    <div className='fullmessagebox_info'>
                        <span className='title'>No messages yet</span>
                        <span>Contact a member and start a discussion</span>
                        <button>Send a massage</button>
                    </div>
                </div>
            </div>
        </aside>
    );
}




























