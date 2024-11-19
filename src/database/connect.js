import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@apinode1.wyswn.mongodb.net/?retryWrites=true&w=majority&appName=ApiNode1`)

.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error('Erro ao conectar ao MongoDB:', err));
