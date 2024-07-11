import { DataTypes, Model } from 'sequelize';
import {sequelize} from '../sequelize'

export interface ProductAttributes {
  id: number; 
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date; 
}


export const Product = sequelize.define<Model<ProductAttributes>>(
  'products',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
     
  }
  },
 
  
);
