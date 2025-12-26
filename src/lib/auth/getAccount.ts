import Cookies from 'js-cookie';
import { UserRole, type Account } from '@/types/user';

export const getAccount = (): Account | null => {
  const userType = Cookies.get('userType');
  if (!userType || !Object.values(UserRole).includes(userType as UserRole)) {
    return null;
  }
  return { role: userType as UserRole };
};
