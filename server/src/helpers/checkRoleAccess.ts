import { USER_ROLE } from '@prisma/client';
import { ForbiddenError } from './errors';

const rolePoints = {
  [USER_ROLE.ADMIN]: 100,
  [USER_ROLE.REGISTERED]: 0,
};

export const checkRoleAccess = (requiredRole: USER_ROLE, userRole: USER_ROLE) => {
  const requiredRolePoints = rolePoints[requiredRole];
  const userRolePoints = rolePoints[userRole];

  if (requiredRolePoints > userRolePoints) {
    throw new ForbiddenError(
      `Accés denegat. No tens permís per realitzar aquesta acció.`
    );
  }
};
