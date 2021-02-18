module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    profileImage: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lastIntegers: {
      type: DataTypes.STRING
    },
    wrongQuestions: {
      type: DataTypes.STRING 
    },
    age: {
      type: DataTypes.INTEGER
    },
    technicalAssistance: {
      type: DataTypes.BOOLEAN
    },
    outcome: {
      type: DataTypes.STRING
    }
  });

  return User;
};
