import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 300px;
  text-align: center;
  outline: 1px solid grey;
  padding: 20px;
  border-radius: 5px;
  margin: auto;
  border: 1px solid gray;
`;
export const AvatarImg = styled.img`
  width: 300px;
  border: 1px solid black;
  border-radius: 50%;
`;
export const Description = styled.div`
  // display: inline-block;

  justify-content: center;
  text-align: center;
`;
export const Name = styled.p`
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  margin: 10px;
  color: #2a2828;
`;
export const Tag = styled.p`
  text-align: center;
  color: grey;
  font-size: 18px;
`;
export const Location = styled.p`
  font-weight: 500;
`;
export const StatsList = styled.ul``;

export const StatsListItem = styled.li`
  list-style: none;
`;
