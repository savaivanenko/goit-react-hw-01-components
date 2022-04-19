import { StatisticSection, StatisticListItem } from './Statistic.styled';

export const Statistic = ({ options }) => {
  return (
    <StatisticSection>
      <h2>Upload stats</h2>

      <ul>
        {options.map(option => (
          <StatisticListItem key={option.id}>
            <span>{option.label}</span>
            <span>{option.percentage}</span>
          </StatisticListItem>
        ))}
      </ul>
    </StatisticSection>
  );
};
