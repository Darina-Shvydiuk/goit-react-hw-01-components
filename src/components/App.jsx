import { Profile } from './Profile/Profile';
import user from './Profile/user';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
