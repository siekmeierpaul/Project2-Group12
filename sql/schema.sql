-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE one_star_restaurant (
    "name" VARCHAR   ,
    "year" INT   ,
    "latitude" FLOAT   ,
    "longitude" FLOAT   ,
    "city" VARCHAR   ,
    "region" VARCHAR   ,
    "zipCode" VARCHAR   ,
    "cuisine" VARCHAR   ,
    "price" VARCHAR   ,
    "url" VARCHAR   ,
    PRIMARY KEY (name, region)
);

CREATE TABLE two_star_restaurant (
    "name" VARCHAR   ,
    "year" INT   ,
    "latitude" FLOAT   ,
    "longitude" FLOAT   ,
    "city" VARCHAR   ,
    "region" VARCHAR   ,
    "zipCode" VARCHAR   ,
    "cuisine" VARCHAR   ,
    "price" VARCHAR   ,
    "url" VARCHAR   ,
  	PRIMARY KEY (name, region)
);

CREATE TABLE three_star_restaurant (
    "name" VARCHAR   ,
    "year" INT   ,
    "latitude" FLOAT   ,
    "longitude" FLOAT   ,
    "city" VARCHAR   ,
    "region" VARCHAR   ,
    "zipCode" VARCHAR   ,
    "cuisine" VARCHAR   ,
    "price" VARCHAR   ,
    "url" VARCHAR  ,
	PRIMARY KEY (name, region)   
);

