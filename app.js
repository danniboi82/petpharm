var PORT = process.env.PORT || 3001; // Sets an initial port. We'll use this later in our listener

// Requiring our models for syncing
import db from './server/models';
// ensure environment variables are loaded
import App from './server';



const app = App(__dirname);

//use sync({force:true}) to drop all tables before trying to create
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
  });
});
