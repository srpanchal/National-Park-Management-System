

INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('1', 'Tour');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('11', 'Hiking');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('12', 'Tour');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('14', 'Camping');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('2', 'Camping');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('3', 'Tour');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('6', 'Camping');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('7', 'Camping');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('8', 'Camping');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('9', 'Tour');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('20', 'Hiking');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('21', 'Hiking');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('22', 'Hiking');
INSERT INTO `Activity` (`actv_id`, `actv_type`) VALUES ('23', 'Hiking');



INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('124474', '1', '2001-04-29 12:24:21');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('131091', '11', '2011-05-09 22:57:54');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('134404', '12', '1988-02-05 04:04:21');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('137347', '14', '1984-05-16 12:24:30');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('146294', '2', '1992-03-06 12:07:13');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('147873', '3', '1972-12-13 08:35:35');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('177908', '6', '1975-10-14 01:24:08');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('20870', '7', '2001-07-01 11:50:54');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('208789', '8', '2017-10-29 18:20:21');
INSERT INTO `Activity_Booking` (`tourist_id`, `actv_id`, `booking_date`) VALUES ('210733', '9', '1974-12-25 20:22:52');




INSERT INTO `Camping` (`actv_id`, `cost`, `site`) VALUES ('14', '485', 'nihil');
INSERT INTO `Camping` (`actv_id`, `cost`, `site`) VALUES ('6', '339', 'rem');
INSERT INTO `Camping` (`actv_id`, `cost`, `site`) VALUES ('7', '219', 'consequatur');
INSERT INTO `Camping` (`actv_id`, `cost`, `site`) VALUES ('8', '330', 'reiciendis');




INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('1035026', '9703618746');
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('1049406', '9538232196');
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('1138530', '9689604381');
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('1197817', '9123825048');
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('145731', '9210182691');
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('1590047', '9222384687');
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('1751972', '9383884839');
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('1895660', '9926145406');
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('2319039', '9512745822');
INSERT INTO `Emp_Phone_No` (`emp_id`, `phone_no`) VALUES ('2521344', '9644202342');



INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('1035026', '428610', 'Jameson Hills', 'Ticket issuer', 'medical', '55', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('1049406', '356424', 'Heather Kub MD', ' Department manager', 'forest', '68', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('1138530', '97454', 'Dr. Tyrell Schulist', ' Department manager', 'medical', '32', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('1197817', '344680', 'Jessica Smith', ' Accounts clerk', 'account', '33', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('145731', '111827', 'Keon Funk', 'Ticket issuer', 'hospitality', '41', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('1590047', '413544', 'Jasper Howe', 'Tour guide', 'forest', '33', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('1751972', '224046', 'Mireya Borer', ' Department manager', 'finance', '27', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('1895660', '167769', 'Enrique Konopelski', ' Department manager', 'finance', '53', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('2319039', '396961', 'Mafalda Hayes', ' Department manager', 'finance', '90', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('2521344', '327327', 'Alek Rice PhD', ' Accounts clerk', 'hospitality', '91', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('2570588', '409552', 'Mrs. Brisa Herzog IV', ' Forest officer', 'account', '67', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('265161', '295391', 'Jennifer Klein', ' Forest officer', 'finance', '97', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('2680439', '262632', 'Darrell Mayer', ' Forest officer', 'account', '61', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('2693337', '233853', 'Prof. Calista Ritchie III', ' Forest officer', 'account', '22', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('2703890', '96218', 'Kaia Kemmer', 'Ticket issuer', 'finance', '85', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('2724729', '61394', 'Prof. Granville Gerlach PhD', ' Accounts clerk', 'hospitality', '92', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('3162450', '150574', 'Orie Wuckert', ' Accounts clerk', 'forest', '76', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('3202457', '482404', 'Candace Mraz', 'Ticket issuer', 'hospitality', '48', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('3239796', '222728', 'Dr. Nia Nader I', ' Department manager', 'forest', '86', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('3343944', '297749', 'Gregory Stroman IV', 'Ticket issuer', 'finance', '23', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('3475379', '80818', 'Dr. Eladio O\'Reilly', 'Tour guide', 'forest', '51', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('3704875', '442855', 'Mr. Waldo Erdman', ' Accounts clerk', 'account', '74', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('3781558', '386243', 'Antwon McKenzie', 'Tour guide', 'finance', '64', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('3795273', '200780', 'Annamae Rau', ' Accounts clerk', 'medical', '49', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('3803429', '199271', 'Dr. Pat Fay III', ' Accounts clerk', 'account', '22', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('402525', '452703', 'Adolphus Paucek', ' Accounts clerk', 'account', '98', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('4298939', '59657', 'Elvis Towne V', ' Forest officer', 'finance', '51', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('4626084', '299413', 'Mr. Bernhard Adams', 'Tour guide', 'medical', '40', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('4855283', '107700', 'Dr. Malachi Parker', ' Accounts clerk', 'medical', '35', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('4912521', '397361', 'Zakary Beier', ' Department manager', 'medical', '88', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('5017166', '219558', 'Meggie Bogisich', 'Ticket issuer', 'hospitality', '68', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('5230080', '307409', 'Dr. Zetta Cormier', ' Accounts clerk', 'account', '84', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('5299898', '479499', 'Mr. Faustino Rolfson', ' Accounts clerk', 'medical', '75', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('5364808', '494499', 'Lyda Lind III', 'Ticket issuer', 'medical', '70', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('5908981', '387633', 'Mrs. Anya King', ' Accounts clerk', 'account', '91', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('6120072', '379810', 'Joany Rolfson I', ' Department manager', 'finance', '61', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('6330126', '115167', 'Prof. Fay Heathcote', ' Forest officer', 'account', '37', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('6344264', '220321', 'Zita Dietrich', ' Forest officer', 'medical', '18', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('6777441', '389823', 'Prof. Garnett Fisher MD', ' Accounts clerk', 'forest', '18', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('6905400', '299028', 'Mrs. Reba Wilkinson DDS', ' Forest officer', 'forest', '62', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('7112090', '351742', 'Carolyne Mann', 'Tour guide', 'account', '33', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('7289444', '109473', 'Dr. Gwendolyn McKenzie PhD', 'Ticket issuer', 'medical', '97', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('8683804', '278410', 'Sheridan Collier', ' Accounts clerk', 'medical', '27', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('870117', '75996', 'Rosanna Hodkiewicz', ' Accounts clerk', 'hospitality', '66', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('8860188', '277920', 'Nat Nienow Sr.', 'Ticket issuer', 'hospitality', '87', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('907462', '356860', 'Antonietta Heaney', ' Department manager', 'finance', '58', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('9656348', '116221', 'Maribel Spencer', ' Forest officer', 'hospitality', '36', 'female');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('9841432', '163155', 'Arvel Ankunding III', ' Accounts clerk', 'hospitality', '96', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('9912644', '207260', 'Francisca Osinski', ' Forest officer', 'account', '81', 'male');
INSERT INTO `Employee` (`emp_id`, `salary`, `emp_name`, `role`, `emp_dept`, `age`, `gender`) VALUES ('9918553', '368943', 'Amir O\'Keefe', 'Ticket issuer', 'finance', '95', 'female');



INSERT INTO `Hiking` (`actv_id`, `trail`, `elevation`, `duration`, `distance`, `difficulty_level`) VALUES ('11', 'rerum', '11.07', '106.31', '27.28', 'moderate');
INSERT INTO `Hiking` (`actv_id`, `trail`, `elevation`, `duration`, `distance`, `difficulty_level`) VALUES ('20', 'nesciunt', '16.09', '63.20', '14.35', 'moderate');
INSERT INTO `Hiking` (`actv_id`, `trail`, `elevation`, `duration`, `distance`, `difficulty_level`) VALUES ('21', 'asperiores', '11.30', '74.96', '28.61', 'easy');
INSERT INTO `Hiking` (`actv_id`, `trail`, `elevation`, `duration`, `distance`, `difficulty_level`) VALUES ('22', 'labore', '7.27', '70.27', '23.05', 'moderate');
INSERT INTO `Hiking` (`actv_id`, `trail`, `elevation`, `duration`, `distance`, `difficulty_level`) VALUES ('23', 'provident', '16.25', '78.75', '23.19', 'hard');


INSERT INTO `Languages_Known_Tour_Guide` (`emp_id`, `language`) VALUES ('1590047', 'hindi');
INSERT INTO `Languages_Known_Tour_Guide` (`emp_id`, `language`) VALUES ('3475379', 'english');
INSERT INTO `Languages_Known_Tour_Guide` (`emp_id`, `language`) VALUES ('4626084', 'espaneol');



INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('11722417', 'Repudiandae aspernatur blanditiis laudantium quaerat amet.', 'gold', '100.00', '1035026', '124474');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('15889267', 'Vel animi illum hic officia sit.', 'diamond', '400.00', '3202457', '131091');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('16051802', 'Cumque illo vitae similique voluptatibus.', 'platinum', '100.00', '3202457', '177908');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('1629000', 'Magnam quam sed aliquam totam.', 'platinum', '300.00', '145731', '137347');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('19807411', 'Placeat dolor illum et sunt.', 'diamond', '300.00', '1035026', '147873');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('2741708', 'Aut cum nihil voluptate aut.', 'gold', '100.00', '145731', '146294');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('4813741', 'Molestiae ut repellendus quod voluptatem saepe minima modi.', 'diamond', '200.00', '145731', '210733');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('5468822', 'Esse aut est aperiam quia consequuntur.', 'diamond', '300.00', '3343944', '20870');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('8854715', 'Sunt enim asperiores est velit est.', 'gold', '100.00', '3343944', '208789');
INSERT INTO `Ticket` (`ticket_id`, `description`, `tier`, `tier_price`, `issued_by`, `bought_by`) VALUES ('9622139', 'Laudantium quod voluptatem reprehenderit.', 'diamond', '400.00', '3343944', '134404');



INSERT INTO `Ticket_Issuer` (`emp_id`) VALUES ('1035026');
INSERT INTO `Ticket_Issuer` (`emp_id`) VALUES ('3202457');
INSERT INTO `Ticket_Issuer` (`emp_id`) VALUES ('3343944');
INSERT INTO `Ticket_Issuer` (`emp_id`) VALUES ('145731');



INSERT INTO `Tour` (`actv_id`, `vehicle`, `guide`, `cost`, `route`, `managed_by`) VALUES ('1', 'suv', '1590047', '204.07', 'quam', '1590047');
INSERT INTO `Tour` (`actv_id`, `vehicle`, `guide`, `cost`, `route`, `managed_by`) VALUES ('3', 'jeep', '3475379', '286.01', 'ipsam', '3475379');
INSERT INTO `Tour` (`actv_id`, `vehicle`, `guide`, `cost`, `route`, `managed_by`) VALUES ('12', 'jeep', '3781558', '264.78', 'omnis', '3781558');
INSERT INTO `Tour` (`actv_id`, `vehicle`, `guide`, `cost`, `route`, `managed_by`) VALUES ('9', 'jeep', '4626084', '249.27', 'nisi', '4626084');




INSERT INTO `Tour_Guide` (`emp_id`) VALUES ('1590047');
INSERT INTO `Tour_Guide` (`emp_id`) VALUES ('3475379');
INSERT INTO `Tour_Guide` (`emp_id`) VALUES ('3781558');
INSERT INTO `Tour_Guide` (`emp_id`) VALUES ('4626084');




INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('124474', 'Miss Lori Dach IV', '61508 Funk Circles\nWintheiserstad, CT 36873', '9623686984', 'leif.gottlieb@example.org');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('131091', 'Dr. Reymundo Ebert Sr.', '747 Romaguera Inlet Suite 802\nCorteztown, TN 63654', '9849883856', 'jalyn.brekke@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('134404', 'Lorine Hammes', '6633 Marvin Mills Apt. 477\nNorth Kallieview, ME 07840', '9931840784', 'zdaniel@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('137347', 'Mr. Rigoberto Crona', '5294 Ward Dam\nEast Paris, AK 11084-8970', '9298197896', 'jhansen@example.org');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('146294', 'Garth Lang', '9857 Georgiana Underpass Suite 615\nSouth Virginiashire, OH 52306-8070', '9752852597', 'kieran.hackett@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('147873', 'Ms. Brooke Gutmann Sr.', '61567 Royce Street\nGerholdview, MS 96766-8838', '9628490225', 'ugusikowski@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('177908', 'Prof. Juana Gottlieb II', '75780 Abigayle Courts Suite 694\nLake Hudson, AR 32049-5503', '9705270163', 'wilbert.nikolaus@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('20870', 'Ms. Lacey Maggio Jr.', '41216 Dejah Oval\nNorth Tessmouth, UT 81701-9958', '9636427358', 'kohler.sister@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('208789', 'Mr. Maxwell Klocko Jr.', '09196 Konopelski Lakes Suite 427\nNorth Everettberg, TX 94109', '9880556625', 'belle36@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('210733', 'Miss Rosemary Rippin V', '45969 Purdy Plaza\nPort Cortez, HI 38408-8155', '9613594809', 'tkeebler@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('211264', 'Cassidy Hamill', '409 Cartwright Canyon Suite 783\nBellashire, AZ 75740-0699', '9727620856', 'klocko.orlando@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('219586', 'Macy Ferry II', '786 Will Ridges\nEast Ida, FL 71183-6274', '9540359470', 'mabel.rohan@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('227116', 'Dr. Sidney Eichmann V', '98534 Flatley Common Apt. 747\nMcKenzieville, KS 18347-4232', '9942199995', 'kessler.ransom@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('231436', 'Dr. Lee Smith', '2497 Roob Mission Suite 524\nEwaldmouth, DC 28338', '9196029777', 'nannie94@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('35622', 'Laisha Towne', '12068 Danyka Stravenue\nCreminport, IA 72067', '9926854641', 'anabel.hackett@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('37271', 'Ashlynn Kutch', '3778 Consuelo Garden\nEast Dulce, MI 14809', '9895239200', 'kraig.koss@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('6982', 'Alena Grant', '31203 Rutherford Pass Suite 141\nAleenberg, GA 82291-7111', '9850342219', 'sabina.lubowitz@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('71110', 'Cary McLaughlin Jr.', '213 Alycia Plaza\nCarlieberg, AR 66175-8590', '9307778937', 'letha62@example.net');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('90773', 'Prof. Taylor Kuhlman', '027 Zieme Locks Suite 392\nKesslerstad, LA 09514', '9535035238', 'xosinski@example.com');
INSERT INTO `Tourist` (`tourist_id`, `name`, `address`, `phone_no`, `email`) VALUES ('95905', 'Leora Dooley Sr.', '98647 Ebert Curve Suite 574\nWest Santino, NH 44759', '9995910917', 'itremblay@example.org');



INSERT INTO `Tourist_Guide` (`tourist_id`, `emp_id`) VALUES ('124474', '1590047');
INSERT INTO `Tourist_Guide` (`tourist_id`, `emp_id`) VALUES ('131091', '3475379');
INSERT INTO `Tourist_Guide` (`tourist_id`, `emp_id`) VALUES ('134404', '3781558');
INSERT INTO `Tourist_Guide` (`tourist_id`, `emp_id`) VALUES ('137347', '4626084');




INSERT INTO `Types_of_Tours_Managed` (`emp_id`, `type_of_tour`) VALUES ('1590047', 'voluptas');
INSERT INTO `Types_of_Tours_Managed` (`emp_id`, `type_of_tour`) VALUES ('3475379', 'asperiores');
INSERT INTO `Types_of_Tours_Managed` (`emp_id`, `type_of_tour`) VALUES ('3781558', 'eveniet');
INSERT INTO `Types_of_Tours_Managed` (`emp_id`, `type_of_tour`) VALUES ('4626084', 'praesentium');



