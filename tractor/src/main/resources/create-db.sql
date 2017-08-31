--
-- drop table vehicle_STK;
-- drop table vehicle_REPAIR;
-- drop table LENDING;
-- drop table vehicle_CLIENT;
-- drop table vehicle;
-- drop Sequence HIBERNATE_SEQ;



CREATE SEQUENCE hibernate_seq start with 10000;

create table vehicle (
  id number(20,0) not null,
  VIN CHAR(17 CHAR) not null,
  vehicle_type varchar2(20 char) not null,
  date_of_acquisition date not null,
  last_control date,
  
  state_type varchar2(20 char) not null,
  price number(14,2),

  constraint PK_vehicle_id primary key (id),
  constraint chk_vehicle_001 check (state_type in  ('NEW', 'DISABLED', 'LENDED', 'BROKEN', 'IN_GARAGE'))
);


create table vehicle_client (
  id number(20,0) not null,
  name varchar2(500 char) not null, 
  surname varchar2(100 char),
  ico varchar2(100 char),
  registration_date date not null,
  email varchar2(150 char),
  ceil_phone  varchar2(16 char),
  
  constraint PK_vehicle_client_id primary key (id),
  constraint CHK_vehicle_client_001 check ((ico is not null and surname is null) or (ico is null and surname is not null and email is not null))
);


create table lending (
  id number(20,0) not null,
  vehicle number(20,0) not null,
  date_from date not null,
  date_to date not null,
  price number(14,2),
  vehicle_client number(20) not null,
  lattitude number,
  longitude number,
  constraint PK_Lending_id primary key (id),
  constraint FK_Lending_001 FOREIGN key (vehicle) REFERENCES vehicle (id),
  constraint FK_Lending_002 FOREIGN key (vehicle_client) REFERENCES vehicle_client (id)
);

create table vehicle_repair (
  id number(20,0) not null,
  vehicle number(20,0) not null,
  price number(14,2),
  repair_resolution varchar2(1000 char),
  
  constraint PK_vehicle_repair_id primary key (id),
  constraint FK_vehicle_repair_001 FOREIGN key (vehicle) REFERENCES vehicle (id)
);

create table vehicle_stk (
  id number(20,0) not null,
  vehicle number(20,0) not null,
  check_date date not null,
  is_pass char(1 char),
  
  constraint PK_vehicle_stk_id primary key (id),
  constraint FK_vehicle_stk_001 FOREIGN key (vehicle) REFERENCES vehicle (id),
  constraint CHK_vehicle_stk_001 check (is_pass in ('Y', 'N'))
);

