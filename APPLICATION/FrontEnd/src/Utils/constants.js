/* SJSU CMPE 138 Spring 2021 TEAM8 */

export const API_URL = 'http://50.18.241.42';

export const USER_ROLES = {
  tourist: "Tourist",
  employee: "Employee",
  admin: "Admin"
};

export const EMPLOYEE_ROLES = {
  ticketIssuer: "Ticket issuer",
  tourGuide: "Tour guide",
  forestOfficer: "Forest officer",
  accountClerk: "Accounts clerk",
  vetDoc: "Veterinary doctor",
  deptManager: "Department manager"
};

export const VETERINARY_DOC_TYPES = {
  animalCompanion: 'Animal Companion Veterinary',
  foodAndSafety: 'Food and Safety Veterinary',
  research: 'Research Veterinary'
};

export const VETERINARY_DOC_SPECIALITIES = {
  emergency: 'Emergency and Critical Care',
  practioner: 'Practitioner',
  internalMedicine: 'Internal Medicine'
};

export const FOREST_OFFICER_POSTS = {
  restoration: 'Forest Restoration Officer',
  aviation: 'Forest Aviation Officer',
  technician: 'Forest Technician',
  fireManagement: 'Forest Fire Management Officer',
};

export const EMPLOYEE_TASKS = {
  accounting: 'Add transactions into accounts',
  manageInventory: 'Add inventory',
  addEmployee: 'Add Employees',
  issueTicket: 'Issue Tickets to offline Tourists'
};

export const EMPLOYEE_ROLE_BASED_TASKS = {
  [USER_ROLES.admin]: Object.values(EMPLOYEE_TASKS),
  [EMPLOYEE_ROLES.ticketIssuer]: [EMPLOYEE_TASKS.issueTicket],
  [EMPLOYEE_ROLES.accountClerk]: [EMPLOYEE_TASKS.accounting],
  [EMPLOYEE_ROLES.deptManager]: [EMPLOYEE_TASKS.manageInventory],
};