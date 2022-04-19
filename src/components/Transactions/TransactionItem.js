import PropTypes from 'prop-types';
import { Td } from './Transition.styled';

export const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
