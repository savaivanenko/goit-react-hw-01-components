import { StatsList, StatsListItem } from './Profile.styled';

export const ProfileStats = ({ followers, views, likes }) => {
  return (
    <StatsList>
      <StatsListItem>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </StatsListItem>
      <StatsListItem>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </StatsListItem>
      <StatsListItem>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </StatsListItem>
    </StatsList>
  );
};
