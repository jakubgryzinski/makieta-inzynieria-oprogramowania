import Cookies from 'js-cookie';

export const logout = () => {
  Cookies.remove('userType');
  window.location.href = '/auth';
};
