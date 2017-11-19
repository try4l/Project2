// Burger models
// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
    var Song = sequelize.define("Song", {
        id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        song_name: { type: DataTypes.STRING },
        valence: { type: DataTypes.INTEGER },
        liveliness: { type: DataTypes.INTEGER },
        energy: { type: DataTypes.INTEGER },
        duration: { type: DataTypes.INTEGER }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Song;
}