import mongoose, { ConnectionOptions } from 'mongoose'

(async()=>{

  try{
    const options:ConnectionOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }

    const db = await mongoose.connect('mongodb://localhost:27017/smiledu', options)

    console.log(`Db is connected to: ${db.connection.name}`);


  }catch(err){

    console.log('Could not connect to the database');
    
    
  }

})()