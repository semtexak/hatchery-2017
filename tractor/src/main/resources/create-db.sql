--
-- drop table vehicle_STK;
-- drop table vehicle_REPAIR;
-- drop table LENDING;
-- drop table vehicle_CLIENT;
-- drop table vehicle;
-- drop Sequence HIBERNATE_SEQ;



CREATE SEQUENCE hibernate_seq start with 10000;
CREATE SEQUENCE SEQ_VEHICLE_ID start with 1;

create table VEHICLE (
  id number(20,0) not null,
  VIN CHAR(17 CHAR) not null,
  type varchar2(20 char) not null,
  date_of_acquisition date not null,
  last_technical_check number(20, 0),
  nickname VARCHAR2(50 char),
  state_type varchar2(20 char) not null,
  price number(14,2),

  constraint PK_vehicle_id primary key (id),
  CONSTRAINT UN_VIN UNIQUE (VIN),
  constraint chk_vehicle_001 check (state_type in  ('NEW', 'DISABLED', 'LENDED', 'BROKEN', 'IN_GARAGE'))
);

create table CLIENT (
  id number(20,0) not null,
  name varchar2(500 char) not null,
  surname varchar2(100 char),
  ico varchar2(100 char),
  registration_date date not null,
  email varchar2(150 char),
  address varchar2(150 char),
  ceil_phone varchar2(16 char) not null,

  constraint PK_vehicle_client_id primary key (id),
  constraint CHK_vehicle_client_001 check ((ico is not null and surname is null) or (ico is null and surname is not null and email is not null))
);

create table LENDING (
  id number(20,0) not null,
  vehicle number(20,0) not null,
  lend_from date not null,
  lend_to date not null,
  price number(14,2),
  client number(20) not null,
  latitude number,
  longitude number,
  constraint PK_Lending_id primary key (id),
  constraint FK_Lending_001 FOREIGN key (vehicle) REFERENCES VEHICLE (id),
  constraint FK_Lending_002 FOREIGN key (client) REFERENCES CLIENT (id)
);

create table VEHICLE_REPAIR (
  id number(20,0) not null,
  vehicle_id number(20,0) not null,
  repaired_at date not null,
  price number(14,2),
  repair_resolution varchar2(1000 char),
  
  constraint PK_vehicle_repair_id primary key (id),
  constraint FK_vehicle_repair_001 FOREIGN key (vehicle_id) REFERENCES VEHICLE (id)
);

create table VEHICLE_MOT (
  id number(20,0) not null,
  vehicle_id number(20,0) not null,
  check_date date not null,
  comment varchar2(1000 char),
  passed char(1 char),
  
  constraint PK_vehicle_stk_id primary key (id),
  constraint FK_vehicle_stk_001 FOREIGN key (vehicle_id) REFERENCES VEHICLE (id),
  constraint CHK_vehicle_stk_001 check (passed in ('Y', 'N'))
);

create table USER (
  id NUMBER(20,0) not null,
  email varchar2(150 char) not null,
  password varchar2(200 char) not null,
  role varchar2(20 char) not null,

  constraint chk_user_001 check (role in  ('ADMIN', 'EMPLOYEE'))
);

ALTER TABLE VEHICLE ADD constraint FK_Vehicle_Mot FOREIGN key (last_technical_check) REFERENCES VEHICLE_MOT (id)
