import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <Profile
//     avatar={user.avatar}
//     username={user.username}
//     tag={user.tag}
//     location={user.location}
//     followers={user.stats.followers}
//     views={user.stats.views}
//     likes={user.stats.likes}
//   />,
//   document.querySelector('#root')
// );
