const express = require('express');
//引入连接池模块
const pool = require('../pool.js');
//创建路由器对象
const r = express.Router();
//1.登录模块
r.get("/login/:miname&:mipwd", (req, res) => {
    var miname = req.params.miname;
    var mipwd = req.params.mipwd;
    console.log(miname, mipwd);
    console.log(req.params);
    var sql = "select * from miuser where miname=? and mipwd=?";
    pool.query(sql, [miname, mipwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

//注册用户
r.post("/register", (req, res) => {
    var obj = req.body;
    var sql = "INSERT INTO miuser (miid,miname,miphone,mipwd) VALUES(null,?,?,?)";
    console.log(obj);
    pool.query(sql, [obj.miname, obj.miphone, obj.mipwd], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
            // res.sendStatus(201);
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

//判断用户名是否存在
r.get("/register/isexists", (req, res) => {
    var obj = req.query;
    var sql = "SELECT miid FROM miuser WHERE miphone = ?";
    console.log(sql, obj);
    pool.query(sql, [obj.miphone], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send("1");
        } else {
            res.send("0");
        }
    });
});

//导出路由器对象
module.exports = r;