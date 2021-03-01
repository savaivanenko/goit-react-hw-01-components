import Profile2 from './components/Profile/Profile2';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import usersData from './data/statistical-data.json';
import friends from './data/friends.json';
import transaction from './data/transaction.json';

export default function App() {
  return (
    <div>
      <Profile2
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics options={usersData} />

      <FriendList options={friends} />

      <TransactionHistory options={transaction} />
    </div>
  );
}
