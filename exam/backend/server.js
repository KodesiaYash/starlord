const express = require('express') ;
const cors = require('cors');
require('dotenv').config() ;

const app = express() ;
const port = process.env.PORT || 5008 ;
const uuid =  require('uuid') ;
app.use(express.json()) ;
app.use(cors());

const db = require('./models') ;

db.sequelize.sync({force:false}).then( () =>{
  console.log('Database works fine') ;
}).catch( (err) =>{
  console.log('Error' + err ) ;
}) ;


let apiRouter = require('./routes/api') ;

app.use('/api', apiRouter);
// app.use('/user' , userRouter ) ;
// app.use('/admin' , orgAdminRouter ) ;
// app.use('/exam' , examRouter ) ;
app.listen(port,() =>
    {console.log(`Server is running on port : ${port}`)}) ;

//358ab7f0-b758-11ea-97e5-87ba4b5fa945

//300ea560-b759-11ea-97e5-87ba4b5fa945
    // {
    //   "agency_id" : "1" , 
    //   "name" : "IIT" ,
    //   "details" : "Mains + Adnaced" ,
    //   "max_marks" : "360",
    //   "time" : "240" ,
    //   "avg_marks": "150" 
    // }	
    // {
    //   "name" : "MockPaper1" ,
    //   "examId" : "1" ,
    //   "totalQns" : "10"
    // }
    // {
    //   "name": "Resonance" ,
    //   "email": "resoran@resonance.com",
    //   "role":"1",
    //   "password":"bhakk"	
    //   }