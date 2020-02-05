CREATE table users(
	user_id INT primary key not null auto_increment,
	user_nickName varchar(20) not null,
	user_pass varchar(20) not null,
	user_name varchar(20) not null,
	user_lastName varchar(20) not null,
	user_birth date,
	user_address_id int,
	user_profile_id int not null,
	user_create_date date not null,
	user_loged boolean not null,
	user_deleted boolean not null
	
);

CREATE table user_profiles(
	profile_id int not null auto_increment primary key,
	profile_name varchar(20) not null,
	profile_update datetime 
);

CREATE table usersMovement(
		userMovement_id int not null auto_increment primary key,
		userMovement_user_id int not null,
		userMovement_movementType varchar(10)  not null,
		userMovement_dateTime datetime not null	
);

CREATE table turns(
	turn_id int not null auto_increment primary key,
	turn_user_id int not null,
	turn_customer_id int not null,
	turn_date date,
	turn_hour time,
	turn_note varchar(50),
	turn_update datetime,
	deteted boolean not null 
);

INSERT INTO user_profiles(profile_name, profile_create_date)
	values ("admin", NOW());

INSERT INTO users(user_nickName, user_pass, user_name, user_lastName, user_create_date, user_profile_id, user_loged, user_deleted)
	values ("admin", "admin", "admin", "admin", NOW(), (select profile_id from user_profiles where profile_name = "admin"), FALSE, FALSE);