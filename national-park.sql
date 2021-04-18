drop database if exists national_park;
create database national_park;
use national_park;

create type id_type varchar(10) not null;

create table Employee;
	(emp_id		id_type,
	salary		numeric(6),
	emp_name	varchar(50),
	role		varchar(20),
	emp_dept	varchar(20) not null,
	age			numeric(2),
	gender		varchar(10),
	primary key (emp_id)
	);


create table Emp_Phone_No;
	(emp_id		id_type,
	phone_no 	numeric(10),
	primary key (emp_id, phone_no),
	foreign key (emp_id) references Employee(emp_id) on delete cascade
	);

create table Ticket_Issuer;
	(emp_id		id_type,
	primary key (emp_id)
	);

create table Tourist;
	(tourist_id		id_type,
	name 			varchar(50),
	address			varchar(100),
	phone_no 		numeric(10),
	email			varchar(30) not null,
	primary key (tourist_id)
	);

create table Ticket;
	(ticket_id		varchar(20),
	description		varchar(100),
	tier			varchar(10),
	tier_price		numeric(5,2),
	issued_by		id_type not null,
	bought_by		varchar(10),
	primary key (ticket_id),
	foreign key (issued_by) references Employee(emp_id) on delete set null,
	foreign key (bought_by) references Tourist(tourist_id) on delete set null
	);

create table Activity;
	(actv_id	id_type,
	actv_type	varchar(20),
	primary key (actv_id)
	);

create table Activity_Booking;
	(tourist_id		id_type,
	actv_id			id_type,
	booking_date	datetime,
	foreign key (tourist_id) references Tourist(tourist_id) on delete set null,
	foreign key (actv_id) references Activity(actv_id) on delete set null
	);

create table Camping;
	(actv_id	id_type,
	cost		numeric(5),
	site		varchar(20),
	primary key (actv_id)
	);

create table Hiking;
	(actv_id	id_type,
	trail		varchar(20),
	elevation	numeric(5,2),
	duration	numeric(5,2),
	distance	numeric(5,2),
	difficulty_level	varchar(20) check (difficulty_level in ('Easy', 'Moderate', 'Hard')), 
	primary key (actv_id)
	);

create table Tour_Guide;
	(emp_id		id_type,
	primary key (emp_id)
	);

create table Types_of_Tours_Managed;
	(emp_id			id_type,
	type_of_tour 	varchar(20),
	foreign key emp_id references Tour_Guide(emp_id) on delete cascade
	);

create table Languages_Known_Tour_Guide;
	(emp_id			id_type,
	language 	varchar(20),
	foreign key (emp_id) references Tour_Guide(emp_id) on delete cascade
	);

create table Tour;
	(actv_id	id_type,
	vehicle		varchar(20),
	guide		id_type,
	cost		numeric(5,2),
	route		varchar(20),
	managed_by	id_type,
	primary key (actv_id),
	foreign key (guide) references Employee(emp_id) on delete set null,
	foreign key (managed_by) references Tour_Guide(emp_id) on delete set null
	);

create table Tourist_Guided_By;
	(tourist_id		id_type,
	emp_id		id_type,
	primary key (tourist_id, emp_id),
	foreign key (tourist_id) references Tourist(tourist_id) on delete set null,
	foreign key (emp_id) references Tour_Guide(emp_id) on delete set null,
	);





------------------------------------

