/*
 Navicat Premium Data Transfer

 Source Server         : mongo-tencent
 Source Server Type    : MongoDB
 Source Server Version : 40406
 Source Host           : 42.192.48.202:27017
 Source Schema         : blog

 Target Server Type    : MongoDB
 Target Server Version : 40406
 File Encoding         : 65001

 Date: 31/03/2022 16:23:55
*/


// ----------------------------
// Collection structure for apps
// ----------------------------
db.getCollection("apps").drop();
db.createCollection("apps");

// ----------------------------
// Collection structure for articles
// ----------------------------
db.getCollection("articles").drop();
db.createCollection("articles");

// ----------------------------
// Collection structure for blog
// ----------------------------
db.getCollection("blog").drop();
db.createCollection("blog");

// ----------------------------
// Collection structure for test
// ----------------------------
db.getCollection("test").drop();
db.createCollection("test");

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");
