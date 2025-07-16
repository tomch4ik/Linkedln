import './Notification.css'
import React from 'react';

export function Notification() {
    const [eventFilter, setEventFilter] = React.useState('All');
    const eventFilters = ['All', 'Career changes', 'Birthdays', 'Education'];
  return (
    <div className="notification-wrapper">
        <div className="notification-tabs">
            <div className="event-filters">
                    {eventFilters.map((filter) => (
                        <button
                        key={filter}
                        className={`filter ${eventFilter === filter ? 'active' : ''}`}
                        onClick={() => setEventFilter(filter)}
                        >
                        {filter}
                        </button>
                    ))}
                    </div>
        </div>
      <div className="notification-box">
        <img src="./Pages_img/Frame_16.svg" alt="No notifications" className="notification-image" />
        <h2 className="notification-title">No new notifications</h2>
        <p className="notification-text">Check out the other updates on the home page</p>
        <button className="notification-home-button">Home page</button>
      </div>
    </div>
  );
}