// import './Messages.css'
// import ChatSidebar from '../Components/ChatSidebar';

// // export function Messages(){
// //     return(
// //         <div>
// //             <h1>Messages Page</h1>
// //         </div>
// //     );
// // }


// export default Messages;

import React from 'react';
import ChatSidebar from '../Components/ChatSidebar';
import ChatMain from '../Components/ChatMain';
import './Messages.css';

function Messages() {
  return (
    <div style={{ display: 'flex' }}>
      <ChatSidebar />
    <div style={{ flex: 1 }}>
      <ChatMain />
    </div>
    </div>
  );
}

export default Messages;
