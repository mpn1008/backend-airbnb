module.exports = function (sequelize, type ){
    return sequelize.define(
        'informs',{
            id:{
                type:type.INTEGER,
                primaryKey:true,
            },
            place:{
                type:type.STRING,
                allowNull: false,
            },
            checkIn:{
                type:type.DATEONLY,
                allowNull: false,
            },
            checkOut:{
                type:type.DATEONLY,
                allowNull: false
            },
            adult:{
                type:type.INTEGER,
                allowNull: false,
            },
            children:{
                type:type.INTEGER,
                allowNull: false,
            }
        },{
            timestamps: false
        }
    );
}
