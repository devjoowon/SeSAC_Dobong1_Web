const Visitor = function (sequelize, DataTypes) {
  // sequelize는 index.js에서 전달되는 Sequelize 객체입니다.
  // DataTypes는 index.js에서 전달되는 Sequelize 객체의 DataTypes 속성입니다.

  // const model = sequelize.define(params1, params2, params3);
  //   CREATE TABLE visitor (
  //     id int PRIMARY KEY AUTO_INCREMENT,
  //     name VARCHAR(10) NOT NULL,
  //     comment MEDIUMTEXT
  // );
  // params1: 모델 이름 설정
  // params2: 컬럼 정의, (CREATE TABLE 제약 조건 참고)
  // params3: 모델 옵션
  const model = sequelize.define(
    "Visitor",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return model;
};

module.exports = Visitor; // Visitor 모델을 외부에서 사용할 수 있도록 내보냅니다.
