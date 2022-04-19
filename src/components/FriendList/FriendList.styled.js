import styled from 'styled-components';

export const IsOnline = styled.div`
  color: tomato;
  width: 10px;
  height: 10px;

  background: ${ky => (ky.isOnline ? 'green' : 'red')};

  ${ky => {
    console.log(ky.isOnline);
    console.log(ky.a);
  }}
`;

export const FriendList = styled.ul`
  margin: 0 auto;
  width: 200px;
  border: 1px solid grey;
`;
export const FriendItem = styled.li`
  list-style: none;
`;
