import mongoose from "mongoose";

let cachedConnection:mongoose.Connection|null = null;
export async function connectToMongoDB() {
  if (cachedConnection) {
    console.log('Нашла коннект в кэше, использую его вместо нового подключения')
    return cachedConnection;
  }
  //
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI as string);
    cachedConnection = connection.connection;
    console.log('Я подключилась к MongoDB, сохраняю подключение в кэш');
    return cachedConnection;
  } catch (error:any) {
    console.log('Я не смогла подключиться к MongoDB =(\n', error.message);
    throw error;
  }
}