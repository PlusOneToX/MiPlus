#客户端连接服务器端使用的编码是UTF8
SET NAMES UTF8;

#丢弃数据库xz
DROP DATABASE IF EXISTS mi;

#创建数据库xz并设置存储的编码为UTF8
CREATE DATABASE mi CHARSET=UTF8;

#进入数据库xz
USE mi;

#创建保存用户数据的表miuser并添加字段及其字段类型
CREATE TABLE miuser(
miid INT PRIMARY KEY AUTO_INCREMENT,
miname VARCHAR(50),
mipwd VARCHAR(50),
miemail VARCHAR(50),
miphone VARCHAR(30)
);

#添加数据
INSERT INTO miuser VALUES(1,"李知恩","iu123456","iu123@163.com",18888888881);
INSERT INTO miuser VALUES(2,"王祖贤","wzx123456","wzx123@163.com",18888888882);
INSERT INTO miuser VALUES(3,"张曼玉","zmy123456","zmy123@163.com",18888888883);
INSERT INTO miuser VALUES(4,"李嘉欣","ljx123456","ljx123@163.com",18888888885);
INSERT INTO miuser VALUES(5,"李若彤","lrt123456","lrt123@163.com",18888888886);