
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("Employee", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        class: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        subjects: {
            type: DataTypes.ARRAY(DataTypes.STRING), // Array of subjects
            allowNull: true,
        },
        attendance: {
            type: DataTypes.JSON, // JSON to store structured data
            allowNull: true,
        }
    });
    return Employee;
};
