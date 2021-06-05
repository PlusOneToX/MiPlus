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


//导出路由器对象
module.exports = r;