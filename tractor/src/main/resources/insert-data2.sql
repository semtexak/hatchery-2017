--------------------------------------------------------
--  File created - 07-12-2016
--------------------------------------------------------
INSERT INTO VEHICLE (id,VIN,type,date_of_acquisition,last_technical_check,nickname,state_type,price) values ('1','AHTBB3CD001726540','RECLAIMER',PARSEDATETIME('23.08.2007','dd.MM.yyyy'), null, '','IN_GARAGE','5200000');
INSERT INTO VEHICLE (id,VIN,type,date_of_acquisition,last_technical_check,nickname,state_type,price) values ('2','DBAGE6TF081160633','DREDGING',PARSEDATETIME('14.06.2004','dd.MM.yyyy'), null, '','IN_GARAGE','7000000');

--------------------------------------------------------
--  File created - 07-12-2016
--------------------------------------------------------

-- INSERT INTO VEHICLE_REPAIR (id,vehicle_id,price,repair_resolution,repaired_at) values ('1','1','18000','klimatizace',PARSEDATETIME('16.05.2001','dd.MM.yyyy'));
-- INSERT INTO VEHICLE_REPAIR (id,vehicle_id,price,repair_resolution,repaired_at) values ('2','1','12000','rozbite skla',PARSEDATETIME('16.05.2001','dd.MM.yyyy'));
-- INSERT INTO VEHICLE_REPAIR (id,vehicle_id,price,repair_resolution,repaired_at) values ('3','1','31000','Hydraulika',PARSEDATETIME('16.05.2001','dd.MM.yyyy'));
-- INSERT INTO VEHICLE_REPAIR (id,vehicle_id,price,repair_resolution,repaired_at) values ('4','1','56000','koroze',PARSEDATETIME('16.05.2001','dd.MM.yyyy'));
-- INSERT INTO VEHICLE_REPAIR (id,vehicle_id,price,repair_resolution,repaired_at) values ('5','2','31000','original service',PARSEDATETIME('16.05.2001','dd.MM.yyyy'));
-- INSERT INTO VEHICLE_REPAIR (id,vehicle_id,price,repair_resolution,repaired_at) values ('6','3','12000','original service',PARSEDATETIME('16.05.2001','dd.MM.yyyy'));
-- INSERT INTO VEHICLE_REPAIR (id,vehicle_id,price,repair_resolution,repaired_at) values ('7','3','53000','pisty',PARSEDATETIME('16.05.2001','dd.MM.yyyy'));

--------------------------------------------------------
--  File created - 07-12-2016
--------------------------------------------------------
INSERT INTO VEHICLE_MOT (id,vehicle_id,check_date,passed,comment) values ('1','1',PARSEDATETIME('01.11.2016','dd.MM.yyyy'),'Y',null);
INSERT INTO VEHICLE_MOT (id,vehicle_id,check_date,passed,comment) values ('2','1',PARSEDATETIME('17.06.2015','dd.MM.yyyy'),'N',null);
INSERT INTO VEHICLE_MOT (id,vehicle_id,check_date,passed,comment) values ('3','2',PARSEDATETIME('15.01.2015','dd.MM.yyyy'),'Y',null);
INSERT INTO VEHICLE_MOT (id,vehicle_id,check_date,passed,comment) values ('4','2',PARSEDATETIME('18.08.2015','dd.MM.yyyy'),'Y',null);
INSERT INTO VEHICLE_MOT (id,vehicle_id,check_date,passed,comment) values ('5','3',PARSEDATETIME('24.02.2017','dd.MM.yyyy'),'Y',null);
INSERT INTO VEHICLE_MOT (id,vehicle_id,check_date,passed,comment) values ('6','3',PARSEDATETIME('27.12.2017','dd.MM.yyyy'),'Y',null);

--------------------------------------------------------
--  File created - 07-12-2016
--------------------------------------------------------

INSERT INTO CLIENT (id,name,surname,email,registration_date,ico,ceil_phone,address) values ('1','Obchodní centrum Praha',null,'info@rodinne-domky.com',PARSEDATETIME('16.01.2010','dd.MM.yyyy'),'44726226',602355657, 'Kobzanova 1613');
INSERT INTO CLIENT (id,name,surname,email,registration_date,ico,ceil_phone,address) values ('2','Gradus',null,'info@gradus-sro.cz',PARSEDATETIME('13.09.2014','dd.MM.yyyy'),'29099137',281865773, 'Kobzanova 1613');
INSERT INTO CLIENT (id,name,surname,email,registration_date,ico,ceil_phone,address) values ('3','LLENTAB - Stavíme montované haly',null,'info@ocelovehaly.cz',PARSEDATETIME('11.08.2009','dd.MM.yyyy'),'36963903',267267811, 'Kobzanova 1613');
INSERT INTO CLIENT (id,name,surname,email,registration_date,ico,ceil_phone,address) values ('4','CANABA a.s.',null,'info@canaba.cz',PARSEDATETIME('27.05.2016','dd.MM.yyyy'),'42256933',234096234, 'Kobzanova 1613');
INSERT INTO CLIENT (id,name,surname,email,registration_date,ico,ceil_phone,address) values ('5','Profima interiery',null,'info@profima-interiery.cz',PARSEDATETIME('12.03.1998','dd.MM.yyyy'),'32332979',601203023, 'Kobzanova 1613');
INSERT INTO CLIENT (id,name,surname,email,registration_date,ico,ceil_phone,address) values ('6','energyDOMY.cz',null,'info@energy-domy.cz',PARSEDATETIME('09.12.1998','dd.MM.yyyy'),'27724094',466310591, 'Kobzanova 1613');
INSERT INTO CLIENT (id,name,surname,email,registration_date,ico,ceil_phone,address) values ('7','FUTUR, s.r.o.',null,'info@futur.cz',PARSEDATETIME('16.02.2008','dd.MM.yyyy'),'25570979',466304615, 'Kobzanova 1613');

--------------------------------------------------------
--  File created - 07-12-2016
--------------------------------------------------------

INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('551','1',PARSEDATETIME('27.07.2017','dd.MM.yyyy'),PARSEDATETIME('01.08.2017','dd.MM.yyyy'),'40000','1',49.170270695968,12.470270695968);
INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('552','1',PARSEDATETIME('04.05.2016','dd.MM.yyyy'),PARSEDATETIME('12.05.2016','dd.MM.yyyy'),'106000','2',49.170270695968,12.470270695968);
INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('553','1',PARSEDATETIME('14.07.2016','dd.MM.yyyy'),PARSEDATETIME('15.07.2016','dd.MM.yyyy'),'72000','3',49.170270695968,12.470270695968);
INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('554','1',PARSEDATETIME('18.04.2015','dd.MM.yyyy'),PARSEDATETIME('25.04.2015','dd.MM.yyyy'),'203000','3',49.170270695968,12.470270695968);
INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('555','1',PARSEDATETIME('11.03.2016','dd.MM.yyyy'),PARSEDATETIME('21.03.2016','dd.MM.yyyy'),'180000','3',49.170270695968,12.470270695968);
INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('556','1',PARSEDATETIME('04.12.2016','dd.MM.yyyy'),PARSEDATETIME('11.12.2016','dd.MM.yyyy'),'156000','4',49.170270695968,12.470270695968);
INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('557','1',PARSEDATETIME('20.11.2017','dd.MM.yyyy'),PARSEDATETIME('21.11.2017','dd.MM.yyyy'),'197000','5',49.170270695968,12.470270695968);
INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('558','1',PARSEDATETIME('30.11.2017','dd.MM.yyyy'),PARSEDATETIME('06.12.2017','dd.MM.yyyy'),'41000','6',49.170270695968,12.470270695968);
INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('559','2',PARSEDATETIME('18.04.2011','dd.MM.yyyy'),PARSEDATETIME('21.04.2011','dd.MM.yyyy'),'29000','6',49.170270695968,12.470270695968);
INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('560','3',PARSEDATETIME('14.05.2016','dd.MM.yyyy'),PARSEDATETIME('23.05.2016','dd.MM.yyyy'),'115000','6',49.170270695968,12.470270695968);
INSERT INTO LENDING (id,vehicle,lend_from,lend_to,price,client,latitude,longitude) values ('561','3',PARSEDATETIME('27.10.2015','dd.MM.yyyy'),PARSEDATETIME('06.11.2015','dd.MM.yyyy'),'32000','6',49.170270695968,12.470270695968);


-- UPDATE VEHICLE SET last_technical_check = 2 WHERE id = 1;
-- UPDATE VEHICLE SET last_technical_check = 4 WHERE id = 2;
-- UPDATE VEHICLE SET last_technical_check = 6 WHERE id = 3;

-- UPDATE VEHICLE SET current_lending = 559 WHERE id = 2;
-- UPDATE VEHICLE SET current_lending = 800 WHERE id = 4;
-- UPDATE VEHICLE SET current_lending = 900 WHERE id = 5;