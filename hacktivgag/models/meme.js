'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meme extends Model {
    static associate(models) {
      Meme.belongsTo(models.Category)
    }

    createCaption(title, author) {
      return `${title} by ${author}`
    }
  };
  
  Meme.init({
    author: { type: DataTypes.STRING, validate: { notEmpty: { args: true, msg: 'Author is required'}}},
    title: { type: DataTypes.STRING, validate: { notEmpty: { args: true, msg: 'Title is required'}}},
    imageURL: { type: DataTypes.STRING, validate: { notEmpty: { args: true, msg: 'ImageURL is required'} ,isUrl: { args: true, msg: 'Image URL must be a valid URL'}}},
    CategoryId: { type: DataTypes.INTEGER, validate: { notEmpty: { args: true, msg: 'Category is required'}}},
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Meme',
  });

  Meme.addHook('beforeCreate', instance => {
    instance.status = 'Published'
  })

  return Meme;
};