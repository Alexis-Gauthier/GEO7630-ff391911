CREATE DATABASE geo7630;
\c geo7630
CREATE EXTENSION postgis;
CREATE EXTENSION postgis_raster;
CREATE schema geo7630;
SET search_path TO geo7630;
CREATE USER admin_geo SUPERUSER password 'password';
GRANT ALL ON SCHEMA geo7630 TO admin_geo;