import {
  ProfileContainer,
  AvatarImg,
  Description,
  Name,
  Tag,
  Location,
} from './Profile.styled';
import { ProfileStats } from './ProfileStats';

export const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <AvatarImg src={avatar} alt="Аватар пользователя" />
        <Name>{name}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <ProfileStats {...stats} />
    </ProfileContainer>
  );
};
