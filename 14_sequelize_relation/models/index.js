"use strict";

const Sequelize = require("sequelize");
// const config = require(__dirname + "/../config/config.json")["development"]; // config.json 안의 db정보 가져오는 것
const config = require(__dirname + "/../config/config.js")["development"]; // env 사용할 때는 js 파일과 같이 사용
const db = {};

// (1) Sequelize 클래스를 이용해서 sequelize 인스턴스 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// (2) 모델 만들어진 후에 모델 불러오기, sequelize 인스턴스와 Sequelize 모듈을 전달
const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const TeamModel = require("./Team")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// (3) 모델간 관계 설정
// hasOne, hasMany, belongsTo, belongMany
// (3-1) 1:1 관계 설정, Player:Profile
PlayerModel.hasOne(ProfileModel, {
  // 두 모델을 연결하는 외래키 설정
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(PlayerModel, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});

// (3-2) 1:다 관계 설정, Team:Player
TeamModel.hasMany(PlayerModel, {
  sourceKey: "team_id",
  foreignKey: "teamid", // 이름 변경 가능
});
PlayerModel.belongsTo(TeamModel, {
  targetKey: "team_id",
  foreignKey: "teamid",
});

// (3-3) 다:다 관계 설정, Game:Team
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreignKey: "team_id",
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: "game_id",
});

// (4) db를 컨트롤러에 가져가져 쓰기 위해 (db 객체에 모델 추가)
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeamModel;
db.Game = GameModel;
db.TeamGame = TeamGameModel;

module.exports = db;
