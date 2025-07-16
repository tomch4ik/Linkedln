import React from 'react';
import './Network.css';

const people = [
  {
    name: 'David Jonson',
    title: 'Lead UI/UX Designer',
    username: '@JonsonCPDR',
    image: './Network_img/person1.png'
  },
  {
    name: 'Duncan Callahan',
    title: 'UI/UX Designer',
    username: '@CallahanDesign',
    image: './Network_img/person2.png'
  },
  {
    name: 'Joshua Cortez',
    title: 'UI/UX Designer',
    username: '@JoshuaCortezUIUX',
    image: './Network_img/person3.png'
  },
  {
    name: "Jennifer O'Brian",
    title: 'UI/UX Designer',
    username: '@JenniferOBrian87',
    image: './Network_img/person4.png'
  },
  {
    name: 'Emma Knight',
    title: 'Senior UI/UX Designer',
    username: '@realemmaknight',
    image: './Network_img/person5.png'
  },
  {
    name: 'Michael Kennedy',
    title: 'Junior UI/UX Designer',
    username: '@kennedylux',
    image: './Network_img/person6.png'
  },
];

export function Network() {
  const [activeTab, setActiveTab] = React.useState('connections');
  const [eventFilter, setEventFilter] = React.useState('All');
  const eventFilters = ['All', 'Vacancies', 'My publications', 'Mentions'];

  return (
    <div className="central-wrapper">
      <div className="tabsf">
        <div
          className={`tabf ${activeTab === 'connections' ? 'active' : ''}`}
          onClick={() => setActiveTab('connections')}>
          New Connections
        </div>
        <div
          className={`tabf ${activeTab === 'event' ? 'active' : ''}`}
          onClick={() => setActiveTab('event')}>
          Event
        </div>
      </div>

      <div className={activeTab === 'connections' ? 'central-container' : 'event-container'}>
        {activeTab === 'connections' && (
          <>
            <div className="section-title">
              PEOPLE IN THE “UI/UX DESIGN” YOU MAY KNOW
            </div>
            <div className="cards-grid">
              {people.map((person, index) => (
                <div className="card" key={index}>
                  <img src={person.image} alt={person.name} />
                  <div className="card-name">{person.name}</div>
                  <div className="card-title">
                    {person.title}<br />
                    <span>{person.username}</span>
                  </div>
                  <button className="contact-button">Make contact</button>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'event' && (
          <>
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
            <img src="./Network_img/bloknot.png" alt="No updates" className="event-image" />
            <h3 className="event-title">No recent updates</h3>
            <p className="event-subtext">
              As your network of contacts expands, you will receive more updates.
            </p>
            <button className="event-expand-button">Expand network of contacts</button>
          </>
        )}
      </div>
    </div>
  );
}


