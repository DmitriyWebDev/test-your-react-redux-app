import PropTypes from 'prop-types';

export const START = 'START';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const RESET = 'RESET';

export const userShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
});
