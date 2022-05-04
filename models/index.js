const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip.js');

Traveller.hasMany(Location, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
});

Location.belongsToMany(Traveller, {
    through: '',
});

module.exports = { Traveller, Location, Trip };