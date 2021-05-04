/* SJSU CMPE 138 Spring 2021 TEAM8 */

import { EMPLOYEE_ROLES, USER_ROLES } from './constants';

export const storeUser = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}

export const removeUser = () => {
  localStorage.removeItem("user");
}

export const isEmployee = () => {
  const user = getUser();

  return user && user.role === USER_ROLES.employee;
}

export const isAdmin = () => {
  const user = getUser();

  return user && user.role === USER_ROLES.admin;
}

export const isTourist = () => {
  const user = getUser();

  return user && user.role === USER_ROLES.tourist;
}

export const isAccountClerk = () => {
  const user = getUser();

  return user && user.role === EMPLOYEE_ROLES.accountClerk;
}

export const isDepartmentManager = () => {
  const user = getUser();

  return user && user.role === EMPLOYEE_ROLES.deptManager;
}

export const isTicketIssuer = () => {
  const user = getUser();

  return user && user.role === EMPLOYEE_ROLES.ticketIssuer;
}

export const canIssueOrBookTicket = () => isTourist() || isTicketIssuer() || isAdmin();