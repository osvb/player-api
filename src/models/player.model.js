/**
* Player model
* @module models/player
*/

/**
* Player model - create and export the database model for the player
* including all assosiations and classmethods assiciated with this model.
* @memberof  module:models/Player
* @param  {Object} sequelize description
* @param  {Object} DataTypes description
*/
export default function (sequelize, DataTypes) {
    const Player = sequelize.define('player', {
        firstName: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        rankingPoints: {
            type: DataTypes.STRING,
            unique: false,
            defaultValue: 0,
            allowNull: false
        },
        externalId: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: true
        }
    } // , { // For reference:
    //    classMethods: {
    //        associate(models) {
    //            // Create associations here
    //        }
    //    }
    // }
    );
    return Player;
}
