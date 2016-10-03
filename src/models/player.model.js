/**
* Example model
* @module models/example
*/

/**
* Example model - create and export the database model for the example
* including all assosiations and classmethods assiciated with this model.
* @memberof  module:models/Example
* @param  {Object} sequelize description
* @param  {Object} DataTypes description
*/
export default function (sequelize, DataTypes) {
    const Example = sequelize.define('player', {
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
        }
    } // , { // For reference:
    //    classMethods: {
    //        associate(models) {
    //            // Create associations here
    //        }
    //    }
    // }
    );
    return Example;
}
