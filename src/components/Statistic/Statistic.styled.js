import styled from 'styled-components';

function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
export const StatisticSection = styled.section`
  border: 1px solid black;
  width: max-content;
  margin: 20px auto;
`;

export const StatisticListItem = styled.li`
  list-style: none;
  background-color: ${generateRandomColor};
`;
