-- SJSU CMPE 138Spring2021TEAM8



INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('1', 'Tour');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('2', 'Tour');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('3', 'Tour');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('4', 'Camping');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('5', 'Camping');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('6', 'Camping');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('7', 'Hiking');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('8', 'Hiking');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('9', 'Hiking');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('10', 'Hiking');



INSERT INTO `Camping` (`actv_id`, `cost`, `site`) VALUES ('4', '100', 'Campsite 1');
INSERT INTO `Camping` (`actv_id`, `cost`, `site`) VALUES ('6', '200', 'Campground');
INSERT INTO `Camping` (`actv_id`, `cost`, `site`) VALUES ('5', '300', 'Campsite 2');



INSERT INTO `Hiking` (`actv_id`, `trail`, `elevation`, `duration`, `distance`, `difficulty_level`) VALUES ('7', 'half dome', '11.07', '106.31', '27.28', 'moderate');
INSERT INTO `Hiking` (`actv_id`, `trail`, `elevation`, `duration`, `distance`, `difficulty_level`) VALUES ('8', 'mirror lake', '16.09', '63.20', '14.35', 'moderate');
INSERT INTO `Hiking` (`actv_id`, `trail`, `elevation`, `duration`, `distance`, `difficulty_level`) VALUES ('9', 'trail 1', '11.30', '74.96', '28.61', 'easy');
INSERT INTO `Hiking` (`actv_id`, `trail`, `elevation`, `duration`, `distance`, `difficulty_level`) VALUES ('10', 'trail 2', '7.27', '70.27', '23.05', 'moderate');



INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('1', 'Miss Lori Dach IV', '61508 Funk Circles\nWintheiserstad, CT 36873', '9623686984', 'leif.gottlieb@example.org');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('2', 'Dr. Reymundo Ebert Sr.', '747 Romaguera Inlet Suite 802\nCorteztown, TN 63654', '9849883856', 'jalyn.brekke@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('3', 'Lorine Hammes', '6633 Marvin Mills Apt. 477\nNorth Kallieview, ME 07840', '9931840784', 'zdaniel@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('4', 'Mr. Rigoberto Crona', '5294 Ward Dam\nEast Paris, AK 11084-8970', '9298197896', 'jhansen@example.org');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('5', 'Garth Lang', '9857 Georgiana Underpass Suite 615\nSouth Virginiashire, OH 52306-8070', '9752852597', 'kieran.hackett@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('6', 'Ms. Brooke Gutmann Sr.', '61567 Royce Street\nGerholdview, MS 96766-8838', '9628490225', 'ugusikowski@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('7', 'Prof. Juana Gottlieb II', '75780 Abigayle Courts Suite 694\nLake Hudson, AR 32049-5503', '9705270163', 'wilbert.nikolaus@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('8', 'Ms. Lacey Maggio Jr.', '41216 Dejah Oval\nNorth Tessmouth, UT 81701-9958', '9636427358', 'kohler.sister@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('9', 'Mr. Maxwell Klocko Jr.', '09196 Konopelski Lakes Suite 427\nNorth Everettberg, TX 94109', '9880556625', 'belle36@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('10', 'Miss Rosemary Rippin V', '45969 Purdy Plaza\nPort Cortez, HI 38408-8155', '9613594809', 'tkeebler@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('11', 'Cassidy Hamill', '409 Cartwright Canyon Suite 783\nBellashire, AZ 75740-0699', '9727620856', 'klocko.orlando@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('12', 'Macy Ferry II', '786 Will Ridges\nEast Ida, FL 71183-6274', '9540359470', 'mabel.rohan@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('13', 'Dr. Sidney Eichmann V', '98534 Flatley Common Apt. 747\nMcKenzieville, KS 18347-4232', '9942199995', 'kessler.ransom@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('14', 'Dr. Lee Smith', '2497 Roob Mission Suite 524\nEwaldmouth, DC 28338', '9196029777', 'nannie94@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('15', 'Laisha Towne', '12068 Danyka Stravenue\nCreminport, IA 72067', '9926854641', 'anabel.hackett@example.com');




INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('1', '1', '2001-04-29 12:24:21');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('2', '2', '2011-05-09 22:57:54');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('3', '1', '1988-02-05 04:04:21');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('4', '3', '1984-05-16 12:24:30');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('4', '4', '1992-03-06 12:07:13');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('1', '4', '1972-12-13 08:35:35');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('1', '7', '1975-10-14 01:24:08');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('2', '7', '2001-07-01 11:50:54');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('3', '8', '2017-10-29 18:20:21');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('4', '9', '1974-12-25 20:22:52');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('4', '6', '1974-12-25 20:22:52');





INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('1', '100000', 'Meena', 'Department manager', 'medical', '55', 'female', 'meena@gmail.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('2', '428610', 'Jameson Hills', 'Department manager', 'account', '55', 'male','enintend@msn.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('3', '356424', 'Heather Kub MD', 'Department manager', 'forest', '68', 'female','nasarius@sbcglobal.net');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('4', '97454', 'Dr. Tyrell Schulist', 'Department manager', 'finance', '32', 'female','sacraver@me.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('5', '344680', 'Jessica Smith', 'Department manager', 'tourism', '33', 'male','cparis@hotmail.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('6', '111827', 'Keon Funk', 'Ticket issuer', 'hospitality', '41', 'female','hachi@aol.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('7', '413544', 'Jasper Howe', 'Ticket issuer', 'hospitality', '33', 'female','scottlee@verizon.net');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('8', '224046', 'Mireya Borer', 'Ticket issuer', 'hospitality', '27', 'male','skippy@att.net');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('9', '167769', 'Enrique Konopelski', 'Tour guide', 'hospitality', '53', 'female','suresh@att.net');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('10', '396961', 'Mafalda Hayes', 'Tour guide', 'tourism', '90', 'male','ahuillet@outlook.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('11', '327327', 'Alek Rice PhD', 'Tour guide', 'hospitality', '91', 'male','janusfury@verizon.net');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('12', '409552', 'Mrs. Brisa Herzog IV', 'Forest officer', 'forest', '67', 'female','codex@outlook.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('13', '295391', 'Jennifer Klein', 'Forest officer', 'forest', '97', 'male','arnold@verizon.net');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('14', '262632', 'Darrell Mayer', 'Forest officer', 'forest', '61', 'female','okroeger@yahoo.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('15', '233853', 'Prof. Calista Ritchie III', 'Accounts clerk', 'account', '22', 'female','reeds@sbcglobal.net');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('16', '96218', 'Kaia Kemmer', 'Accounts clerk', 'finance', '85', 'male','oneiros@gmail.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('17', '61394', 'Prof. Granville Gerlach PhD', 'Accounts clerk', 'account', '92', 'male','dbrobins@mac.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('18', '150574', 'Orie Wuckert', 'Veterinary doctor', 'medical', '76', 'male','staikos@icloud.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('19', '482404', 'Candace Mraz', 'Veterinary doctor', 'medical', '48', 'female','rhavyn@yahoo.ca');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('20', '222728', 'Dr. Nia Nader I', 'Veterinary doctor', 'medical', '86', 'female','squirrel@mac.com');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`, `email`) VALUES ('21', '222728', 'Boss', 'Department manager', 'admin', '21', 'female','boss@boss.com');




INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('1', 9703618746);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('2', 9538232196);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('3', 9689604381);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('4', 9123825048);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('5', 9210182691);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('6', 9222384687);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('7', 9383884839);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('8', 9926145406);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('9', 9512745822);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('10', 9644202342);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('11', 8399875148);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('12', 9318232196);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('13', 9657704381);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('14', 9123905048);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('15', 9010182691);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('16', 9722384687);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('17', 9183884839);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('18', 9226145406);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('19', 9612745822);
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('20', 9044202342);



INSERT INTO `Tour_Guide` (`emp_id`) VALUES ('9');
INSERT INTO `Tour_Guide` (`emp_id`) VALUES ('10');
INSERT INTO `Tour_Guide` (`emp_id`) VALUES ('11');
INSERT INTO `Tour_Guide` (`emp_id`) VALUES ('21');



INSERT INTO `Tour` (`actv_id`, `vehicle`, `guide`, `cost`, `route`, `managed_by`) VALUES ('1', 'Caravan', '5', '200', 'half dome', '9');
INSERT INTO `Tour` (`actv_id`, `vehicle`, `guide`, `cost`, `route`, `managed_by`) VALUES ('3', 'Passenger car', '10', '280', 'mirror lake', '10');
INSERT INTO `Tour` (`actv_id`, `vehicle`, `guide`, `cost`, `route`, `managed_by`) VALUES ('12', 'Bus', '11', '260', 'valley point', '11');



INSERT INTO `Tourist_Guide` (`tourist_id`, `emp_id`) VALUES ('1', '9');
INSERT INTO `Tourist_Guide` (`tourist_id`, `emp_id`) VALUES ('2', '10');
INSERT INTO `Tourist_Guide` (`tourist_id`, `emp_id`) VALUES ('3', '11');



INSERT INTO `Types_of_Tours_Managed` (`emp_id`, `type_of_tour`) VALUES ('9', 'guided tour');
INSERT INTO `Types_of_Tours_Managed` (`emp_id`, `type_of_tour`) VALUES ('10', 'camping');
INSERT INTO `Types_of_Tours_Managed` (`emp_id`, `type_of_tour`) VALUES ('11', 'guided tour');




INSERT INTO `Languages_Known_Tour_Guide` (`emp_id`, `language`) VALUES ('9', 'hindi');
INSERT INTO `Languages_Known_Tour_Guide` (`emp_id`, `language`) VALUES ('10', 'english');
INSERT INTO `Languages_Known_Tour_Guide` (`emp_id`, `language`) VALUES ('11', 'espaneol');



INSERT INTO `Ticket_Issuer` (`emp_id`) VALUES ('6');
INSERT INTO `Ticket_Issuer` (`emp_id`) VALUES ('7');
INSERT INTO `Ticket_Issuer` (`emp_id`) VALUES ('8');
INSERT INTO `Ticket_Issuer` (`emp_id`) VALUES ('21');




INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('1', 'Repudiandae aspernatur blanditiis laudantium quaerat amet.', 'gold', '100.00', '6', '1');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('2', 'Vel animi illum hic officia sit.', 'diamond', '400.00', '6', '2');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('3', 'Cumque illo vitae similique voluptatibus.', 'platinum', '300.00', '7', '2');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('4', 'Magnam quam sed aliquam totam.', 'platinum', '300.00', '7', '3');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('5', 'Placeat dolor illum et sunt.', 'diamond', '400.00', '7', '4');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('6', 'Aut cum nihil voluptate aut.', 'gold', '100.00', '7', '5');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('7', 'Molestiae ut repellendus quod voluptatem saepe minima modi.', 'diamond', '400.00', '6', '5');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('8', 'Esse aut est aperiam quia consequuntur.', 'diamond', '400.00', '8', '5');



INSERT INTO `Inventory` VALUES ('10','Goods van and truck','Vehicle',20,100),
('1','Caravan','Vehicle',25,80),('2','Boats','Vehicle',50,50),
('3','Tractor','Vehicle',30,100),('4','Agricultural vehicle','Vehicle',30,75),(
'5','Bus','Vehicle',22,10),('6','Motorcycle','Vehicle',45,55),
('7','Moped','Vehicle',37,60),('8','Passenger car/van','Vehicle',24,58),('9','Trailer','Vehicle',38,80),
('11','Trash receptables','Camping utilities',34,15),('12','Life jackets','Camping utilities',16,40),
('13','Safety lines(ropes)','Camping utilities',13,17),
('14','Fire pan','Camping utilities',33,43),('15','Paddles','Camping utilities',12,14),
('16','First aid kit','Camping utilities',26,47),('17','Sleeping bags','Camping utilities',24,33),
('18','Flash light','Camping utilities',13,35),('19','Lanterns','Camping utilities',27,42),
('20','Barbecue grills','Camping utilities',0,44),('21','Maps and navigation tools','Camping utilities',31,35),
('22','Picnic tables','Camping utilities',35,21),('23','Tent','Camping utilities',11,19),
('24','Lubricants and compounds','Park tools',12,13),('25','Stationary set','Park tools',43,15),
('26','Hammer and saw','Park tools',49,35),('27','Sickle bar','Park tools',41,12),
('28','Fertilizers','Park tools',36,21),('29','Tool kits','Park tools',33,35),
('30','Pipes','Park tools',21,39),('31','Torque tool box','Park tools',40,43),('32','Stump grinder','Park tools',25,12);



INSERT INTO `Department_Manager` VALUES
('1'),('2'),('3'),('4'),('5'),('21');



INSERT INTO `Department` (`dept_id`,`dept_name`,`dept_mgr`) VALUES ("1","medical","1"),
("4","finance","4"),("2","account","2"),("3","forest","3"),("5","tourism","5");



INSERT INTO `Manage_Inventory`
(`emp_id`,
`inv_id`)
VALUES
('1','1'),('2','10'),('3','2'),('4','3'),('4','4'),('5','5'),
('1','6'),('2','7'),('3','8'),('4','9'),('4','11'),('5','12');



Insert into Accounts_Clerk(emp_id) 
values('15'),('16'),('17'),('21');



Insert into Account values
('1',	'Debit',	'Repair',	5000,	'Building repair for veterinary doctor'),
('2',	'Debit',	'Repair',	2000,	'Fencing repair'),
('3',	'Debit',	'Salary',	9000000,	'For year 2018'),
('4',	'Debit',	'Salary',	9000000,	'For year 2017'),
('5',	'Debit',	'Repair',	800,	'Vehicles servicing'),
('6',	'Debit',	'Salary',	9000000,	'For year 2019'),
('7',	'Debit',	'Construction',	10000,	'Constructing office building'),
('8',	'Debit',	'Logistics',	20000,	'Misc');



Insert into Manage_Account(transaction_id, emp_id) values
('1','15'),
('2','15'),
('5','16'),
('6','16'),
('7','16'),
('8','17'),
('3','17');



Insert into Forest_Officer(emp_id, post) values ('12', 'Forest Restoration Officer'), 
('13', 'Forest Aviation Officer'), ('14', 'Forest Fire Management Officer'), ('21', '');



Insert into Species values
('1',	'Pronghorn',	23	,'Antilocapridae',	'male',	'Mammal'),
('2',	'Bighorn Sheep',	42	,'Bovidae',	'male',	'Mammal'),
('3',	'Elk',	11	,'Cervidae',	'male',	'Mammal'),
('4',	'Mule Deer',	44	,'Cervidae',	'male',	'Mammal'),
('5',	'Coyote',	5	,'Canidae',	'male',	'Mammal'),
('6',	'Common Gray Fox',	22	,'Canidae',	'male',	'Mammal'),
('7',	'Kit Fox',	1	,'Canidae',	'male',	'Mammal'),
('8',	'Red Fox',	6	,'Canidae',	'male',	'Mammal'),
('9',	'Bobcat',	7	,'Felidae',	'male',	'Mammal'),
('10',	'Mountain Lion',	8	,'Felidae',	'male',	'Mammal'),
('11',	'Striped Skunk',	21	,'Mephitidae',	'male',	'Mammal'),
('12',	'Western Spotted Skunk',	24	,'Mephitidae',	'male',	'Mammal'),
('13',	'Northern River Otter',	21	,'Mustelidae',	'male',	'Mammal'),
('14',	'Long-tailed Weasel',	16	,'Mustelidae',	'male',	'Mammal'),
('15',	'American Mink',	78	,'Mustelidae',	'male',	'Mammal'),
('16',	'American Badger',	43	,'Mustelidae',	'female',	'Mammal'),
('17',	'Ringtail',	3	,'Procyonidae',	'female',	'Mammal'),
('18',	'Northern Raccoon',	7	,'Procyonidae',	'female',	'Mammal'),
('19',	'American Black Bear',	87	,'Ursidae',	'male',	'Mammal'),
('20',	'Big Free-tailed Bat',	6	,'Molossidae',	'male',	'Mammal'),
('21',	'Brazilian Free-tailed Bat',	41	,'Molossidae',	'male',	'Reptiles'),
('22',	'Pallid Bat',	32	,'Vespertilionidae',	'female',	'Reptiles'),
('23',	'Townsend''s Big-eared Bat',	14	,'Vespertilionidae',	'male',	'Reptiles'),
('24',	'Big Brown Bat',	16	,'Vespertilionidae',	'male',	'Reptiles'),
('25',	'Spotted Bat',	41	,'Vespertilionidae',	'male',	'Reptiles'),
('26',	'Allen''s Big-eared Bat',	19	,'Vespertilionidae',	'female',	'Reptiles'),
('27',	'Silver-haired Bat',	20	,'Vespertilionidae',	'female',	'Reptiles'),
('28',	'Hoary Bat',	32	,'Vespertilionidae',	'female',	'Reptiles'),
('29',	'California Myotis',	4	,'Vespertilionidae',	'female',	'Reptiles'),
('30',	'Western Small-footed Myotis',	2	,'Vespertilionidae',	'female',	'Reptiles'),
('31',	'Long-eared Myotis',	6	,'Vespertilionidae',	'female',	'Dinosaur'),
('32',	'Little Brown Myotis',	26	,'Vespertilionidae',	'male',	'Dinosaur'),
('33',	'Fringed Myotis',	63	,'Vespertilionidae',	'female',	'Dinosaur'),
('34',	'Long-legged Myotis',	46	,'Vespertilionidae',	'male',	'Dinosaur'),
('35',	'Yuma Myotis',	63	,'Vespertilionidae',	'male',	'Dinosaur'),
('36',	'Western Pipistrelle',	5	,'Vespertilionidae',	'male',	'Dinosaur'),
('37',	'Black-tailed Jackrabbit',	22	,'Leporidae',	'female',	'Dinosaur'),
('38',	'Desert Cottontail',	60	,'Leporidae',	'female',	'Dinosaur'),
('39',	'American Beaver',	15	,'Castoridae',	'female',	'Dinosaur');



INSERT INTO `Veterinary_Doctor` VALUES ('18','Veterinary specialist','Internal medicine','MBBS'),
('19','Food safety and insp','Critical care','MBBS'),
('20','Companion-animal vet','Vet practitioners','MBBS'),
('21','','','');



INSERT INTO `Veterinary_Doc_Office_Hours` VALUES ('18','11AM-3PM'),('19','10PM-10AM'),('20','2PM-12AM');



INSERT INTO `Species_Doctor` VALUES
('18','39'),('19','7'),('20','1'),
('18','33'),
('19','2'),('20','6'),
('18','15'),
('19','20'),('20','36');



INSERT INTO `Document_Species` VALUES
('12','39'),('13','7'),('14','1'),
('12','33'),
('12','2'),('14','6'),
('13','15'),
('13','20'),('14','36');



INSERT INTO User VALUES (1, 'Admin', 'boss@boss.com', 'sha256$8roJDq8r$0d1b53a2d9d680b052444d5fb80af441025a3952de82c6915b1e63eb9854e16b', 'Admin', 9090909090, '', '21');


