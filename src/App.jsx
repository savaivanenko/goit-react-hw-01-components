import Profile2 from './components/Profile/Profile2';
import Stats from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './user.json';
import usersData from './statistical-data.json';
import friends from './friends.json';
import transaction from './transaction.json';

export default function App() {
  // console.log(props);
  return (
    <div>
      <Profile2
        // key={i}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Stats options={usersData} />

      <FriendList options={friends} />

      <TransactionHistory options={transaction} />
    </div>
  );
}
