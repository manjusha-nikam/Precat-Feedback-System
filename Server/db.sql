DROP DATABASE IF EXISTS feedback_system_db;
CREATE DATABASE feedback_system_db;
USE feedback_system_db;

CREATE TABLE employee(
    empid INT PRIMARY KEY,
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    email VARCHAR(100),
    mobile VARCHAR(12),
    password VARCHAR(100)
);

INSERT INTO employee VALUES 
(144,"Rohan","Paramane","rohan.paramane@sunbeaminfo.com","8983049388","sun@144"),
(180,"Manjusha","Nikam","manjusha.nikam@sunbeaminfo.com","1234567890","sun@180"),
(189,"Samruddhi","Phadnis","samruddhi.phadnis@sunbeaminfo.com","9876543210","sun@189"),
(227,"Sonal","Shinde","sonal.shinde@sunbeaminfo.com","8987643784","sun@227");

CREATE TABLE student(
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(20),
    lastName VARCHAR(20),
    email VARCHAR(100),
    mobile VARCHAR(12),
    password VARCHAR(100)
);

INSERT INTO student(firstName,lastName,email,password,mobile) VALUES
("Ajinkya","Pawade","pawadeajinkya09@gmail.com","ajinkya123",9970881504),
("Akshay","Bendale","bendaleakshay@gmail.com","askshay123",8007698738),
("Radhika","Patil","patilradha021@gmail.com","radhika123",9021302141),
("Mayuri","Dhone","mayurirajendradhone@gmail.com","mayuri123",9552697875),
("Rhutuja","Salve","rhutu17salave@gmail.com","rutu123",8805586075),
("Rutuja","Jadhav","rutum12jadhav@gmail.com","rutuja123",9730341924),
("Ruchita","Kakade","ruchitakakade202@gmail.com","ruchita123",7709402252),
("Sanket","Wagh","sanketwagh3921@gmail.com","sanket123",7972657464),
("Aboli","Kulkarni","alpanaaboli@gmail.com","aboli123",8378847522),
("Disha","Tribhuvan","dishatribhuvan20@gmail.com","disha123",8177878032),
("Darshana","Bavaskar","darshanabhavsar2001@gmail.com","darshana123",9156323922),
("Anup","Sarode","anupsarode09@gmail.com","anup123",8956356504),
("Dhanraj","Patil","dhanrajpatil2642001@gmail.com","dhanraj123",8698191623),
("Adarsh","Pal","paladarsh1130@gmail.com","adarsh123",8208645540),
("Suyash","Sanas","suyash.sanas2912@gmail.com","suyash123",9545434352),
("Shubham","Javeri","shubhamjaveri13@gmail.com","shubham123",7385727895);

CREATE TABLE course(
    id INT PRIMARY KEY AUTO_INCREMENT,
    courseName VARCHAR(30)
);

INSERT INTO course(courseName) VALUES
("OM-53-LAPTOP"),
("IIT-01-CPP"),
("CJ-O-13"),
("CJ-H-02");

CREATE TABLE module(
    id INT PRIMARY KEY AUTO_INCREMENT,
    moduleName VARCHAR(100)
);

INSERT INTO module(moduleName) VALUES
("Programming in C"),
("Data Structure"),
("OOP using CPP"),
("Basics BigData"),
("Core Java"),
("CPP");


CREATE TABLE course_module(
    course_id INT,
    module_id INT,
    FOREIGN KEY(course_id) REFERENCES course(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(module_id) REFERENCES module(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO course_module VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(3,5),
(4,5),
(2,6);

CREATE TABLE course_group(
    id INT PRIMARY KEY AUTO_INCREMENT,
    groupName VARCHAR(10)
);

INSERT INTO course_group(groupName) VALUES
("Theory"),
("C1"),
("C2"),
("C3"),
("C4");

CREATE TABLE feedback_type(
    id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(80)
);

INSERT INTO feedback_type(type) VALUES
("Theory"),
("Lab"),
("Infrastructure");

CREATE TABLE question(
    id INT PRIMARY KEY AUTO_INCREMENT,
    question TEXT
);

insert into question(question)
values("Was the lab well-organized and structured?"),
("Were the objectives of the lab clearly stated?"),
("How would you rate the organization and structure of the lab?"),
("How would you rate the difficulty level of the lab?"),
("How satisfied were you with the support materials and resources provided during the theory session?"),
("How well do you feel you understood the theoretical concepts presented?"),
("How engaged were you during the theoretical session?"),
("How relevant did you find the theoretical content to the topic being discussed?");

