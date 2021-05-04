-- SJSU CMPE 138Spring2021TEAM8

drop database if exists national_park;
create database national_park;
use national_park;


create table Employee (
	emp_id		varchar(10),
	salary		numeric(6),
	emp_name	varchar(50),
	role		varchar(20),
	emp_dept	varchar(20),
	age			numeric(2),
	gender		varchar(10),
	email 		varchar(50) not null,
	primary key (emp_id)
	);

create table Emp_Phone_No (
	emp_id		varchar(10),
	phone_no 	numeric(10),
	primary key (emp_id, phone_no),
	foreign key (emp_id) references Employee(emp_id) on delete cascade
	);

create table Ticket_Issuer (
	emp_id		varchar(10),
	primary key (emp_id),
	foreign key (emp_id) references Employee(emp_id) on delete cascade on update cascade
	);

create table Tourist (
	tourist_id		varchar(10),
	name 			varchar(50),
	address			varchar(100),
	phone_no 		numeric(10),
	email			varchar(30) not null,
	primary key (tourist_id)
	);

create table Ticket (
	ticket_id		varchar(20),
	description		varchar(100),
	tier			varchar(10),
	tier_price		numeric(5,2),
	issued_by		varchar(10),
	bought_by		varchar(10),
	primary key (ticket_id),
	foreign key (issued_by) references Ticket_Issuer(emp_id) on delete set null on update cascade,
	foreign key (bought_by) references Tourist(tourist_id) on delete set null on update cascade
	);

create table Activity (
	actv_id	varchar(10),
	actv_type	varchar(20),
	primary key (actv_id)
	);

create table Activity_Booking (
	tourist_id		varchar(10),
	actv_id			varchar(10),
	booking_date	datetime,
	status 			varchar(20) default 'ACTIVE' check (status in ('ACTIVE', 'CANCELLED')),
	primary key (tourist_id, actv_id, booking_date),
	foreign key (tourist_id) references Tourist(tourist_id) on delete cascade on update cascade,
	foreign key (actv_id) references Activity(actv_id) on delete cascade on update cascade
	);

create table Camping (
	actv_id	varchar(10),
	cost		numeric(5),
	site		varchar(20),
	primary key (actv_id),
	foreign key (actv_id) references Activity(actv_id) on delete cascade on update cascade
	);

create table Hiking (
	actv_id	varchar(10),
	trail		varchar(20),
	elevation	numeric(5,2),
	duration	numeric(5,2),
	distance	numeric(5,2),
	difficulty_level	varchar(20) check (difficulty_level in ('Easy', 'Moderate', 'Hard')), 
	primary key (actv_id),
	foreign key (actv_id) references Activity(actv_id) on delete cascade on update cascade
	);

create table Tour_Guide (
	emp_id		varchar(10),
	primary key (emp_id),
	foreign key (emp_id) references Employee(emp_id) on delete cascade on update cascade
	);

create table Types_of_Tours_Managed (
	emp_id			varchar(10),
	type_of_tour 	varchar(20),
	primary key (emp_id, type_of_tour),
	foreign key (emp_id) references Tour_Guide(emp_id) on delete cascade on update cascade
	);

create table Languages_Known_Tour_Guide (
	emp_id			varchar(10),
	language 	varchar(20),
	primary key (emp_id, language),
	foreign key (emp_id) references Tour_Guide(emp_id) on delete cascade on update cascade
	);

create table Tour (
	actv_id	varchar(10),
	vehicle		varchar(20),
	guide		varchar(10),
	cost		numeric(5,2),
	route		varchar(20),
	managed_by	varchar(10),
	primary key (actv_id),
	foreign key (guide) references Employee(emp_id) on delete set null on update cascade,
	foreign key (managed_by) references Tour_Guide(emp_id) on delete set null on update cascade
	);

create table Tourist_Guide (
	tourist_id		varchar(10),
	emp_id			varchar(10),
	primary key (tourist_id, emp_id),
	foreign key (tourist_id) references Tourist(tourist_id) on delete cascade on update cascade,
	foreign key (emp_id) references Tour_Guide(emp_id) on delete cascade on update cascade
	);


create table Department_Manager (
	emp_id		varchar(10),
	primary key (emp_id),
	foreign key (emp_id) references Employee(emp_id) on delete cascade on update cascade
);

create table Department (
	dept_id		varchar(10),
	dept_name	varchar(50),
	dept_mgr	varchar(10),
	primary key (dept_id),
	foreign key (dept_mgr) references Department_Manager(emp_id) on delete cascade on update cascade
);

create table Inventory (
	inv_id			varchar(10),
	name			varchar(50),
	category		varchar(50),
	quantity		int,
	cost_per_item	numeric,
	primary key (inv_id)
);

create table Manage_Inventory (
	emp_id		varchar(10),
	inv_id		varchar(10),
	primary key (emp_id, inv_id),
	foreign key (emp_id) references Department_Manager(emp_id) on delete cascade on update cascade,
	foreign key (inv_id) references Inventory(inv_id) on delete cascade on update cascade
);


create table Accounts_Clerk (
	emp_id		varchar(10),
	primary key (emp_id),
	foreign key (emp_id) references Employee(emp_id) on delete cascade on update cascade
);


create table Account (
	transaction_id	varchar(10),
	type			varchar(50),
	pupose			varchar(50),
	amount			numeric,
	details			varchar(50),
	primary key (transaction_id)
);


create table Manage_Account (
	emp_id				varchar(10),
	transaction_id		varchar(10),
	primary key (emp_id, transaction_id),
	foreign key (emp_id) references Accounts_Clerk(emp_id) on delete cascade on update cascade,
	foreign key (transaction_id) references Account(transaction_id) on delete cascade on update cascade
);


create table Forest_Officer (
	emp_id		varchar(10),
	post		varchar(20),
	primary key (emp_id),
	foreign key (emp_id) references Employee(emp_id) on delete cascade on update cascade
);

create table Species (
	species_id		varchar(10),
	name			varchar(50),
	age				int,
	description		varchar(100),
	gender			varchar(10),
	category		varchar(50),
	primary key (species_id)
);

create table Document_Species (
	emp_id			varchar(10),
	species_id		varchar(10),
	primary key (emp_id, species_id),
	foreign key (emp_id) references Forest_Officer(emp_id) on delete cascade on update cascade,
	foreign key (species_id) references Species(species_id) on delete cascade on update cascade
);

create table Veterinary_Doctor (
	emp_id		varchar(10),
	vet_type	varchar(30),
	speciality	varchar(30),
	degree		varchar(20),
	primary key (emp_id),
	foreign key (emp_id) references Employee(emp_id) on delete cascade on update cascade
);

create table Veterinary_Doc_Office_Hours (
	emp_id			varchar(10),
	office_hour		varchar(20),
	primary key (emp_id, office_hour),
	foreign key (emp_id) references Veterinary_Doctor(emp_id) on delete cascade on update cascade
);


create table Species_Doctor (
	emp_id			varchar(10),
	species_id		varchar(10),
	primary key (emp_id, species_id),
	foreign key (emp_id) references Veterinary_Doctor(emp_id) on delete cascade on update cascade,
	foreign key (species_id) references Species(species_id) on delete cascade on update cascade
);


create table User (
  id  		int auto_increment,
  role  	varchar(20),
  email 	varchar(50) not null,
  password 	varchar(300) not null,
  fullname 	varchar(100),
  phone 	numeric(10),
  address 	varchar(100),
  emp_id 	varchar(10),
  foreign key (emp_id) references Employee(emp_id) on delete cascade on update cascade,
  primary key (id)
);
