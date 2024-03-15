"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.js")["development"];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const UserModel = require("./User")(sequelize, Sequelize);
const PostModel = require("./Post")(sequelize, Sequelize);
const CommentModel = require("./Comment")(sequelize, Sequelize);

// 유저 1 : 글 다
UserModel.hasMany(PostModel, {
  foreignKey: "id",
});
PostModel.belongsTo(UserModel, {
  foreignKey: "user_id",
});

// 유저 1 : 댓글 다
UserModel.hasMany(CommentModel, {
  foreignKey: "id",
});
CommentModel.belongsTo(UserModel, {
  foreignKey: "user_id",
});

// 글 1 : 댓글 다
PostModel.hasMany(CommentModel, {
  foreignKey: "id",
});
CommentModel.belongsTo(PostModel, {
  foreignKey: "post_id",
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = UserModel;
db.Post = PostModel;
db.Comment = CommentModel;

module.exports = db;
