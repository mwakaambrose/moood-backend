'use strict';

module.exports = (sequelize, DataTypes) => {
    const Mood = sequelize.define('Mood', {
        author: DataTypes.STRING,
        mood: { type: DataTypes.STRING, allowNull: false },
    }, {});
    Mood.associate = function(models) {
        // associations can be defined here
    };
    return Mood;
};