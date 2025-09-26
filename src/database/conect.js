const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {    
    const connectionString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.lqtb9me.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0`;
    
    // Remova o callback e use apenas o await
    await mongoose.connect(connectionString);
    
    console.log("Conexão ao MongoDB realizada com sucesso");
    return mongoose.connection;
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar com o banco de dados:", error);
    throw error;
  }
};

module.exports = connectToDatabase;