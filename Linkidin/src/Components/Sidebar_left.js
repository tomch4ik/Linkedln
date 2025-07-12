import './Sidebar_left.css'

export function Sidebar_left(){

    return(
        <aside className='sidebar_left'>
            <div className='homesd'>
                <img src='./Header_img/Ellipse.svg'/>
                <div className='homesd_name'>Nathaniel Evans</div>
                <div className='homesd_prof'>Junior UI/UX Designer · Microsoft</div>
            </div>
            <div className='sidebar_contacts'>
                <span className='contacts_title'>Contacts</span>
                <span>
                    Expand your network of contacts
                    {/* Тут можно дописать возможные контакты учасника 09.07*/}
                </span>
            </div>

            <div className='sidebar_saved'>
                <a href='#'className='sidebar_href'>
                    <img src='./Sidebars_img/bookmark.svg'/>
                    <span> Saved elements</span>
                </a>
            </div>
        </aside>
    );
}




