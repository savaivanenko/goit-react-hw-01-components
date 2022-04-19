import user from './data/user.json';
import data from './data/statData.json';
import friends from './data/friends.json';
import transactions from './data/transaction.json';
import { Statistic } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import { Profile } from './Profile/Profile';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      {/* React homework template */}
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistic options={data} />
      <FriendList options={friends} />
      <TransactionHistory options={transactions} />
    </Container>
  );
};
