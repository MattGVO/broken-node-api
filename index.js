const express = require("express");
const app = express();
const port = 4110

//THIS IS REQUEST LEVEL MIDDLEWARE FOR THE APP.POST TO ENSURE THAT WE DON'T ADD MOBILE GAMES TO THE GAMES LIBRARY
const noMobileMiddleware = (req,res,next) =>{
    if(req.body.console === "mobile" || "phone"){
        res.status(400).send("Mobile is not a console! You casual!")
    }
}

//GET ALL GAMES FROM THE GAMES ARRAY
app.get('api/games',gamesCtrl.getAllGames)

//GET A GAME BY ITS ID
app.get('/api/games/:id',gamesCtrl)

//ADD A GAME TO THE GAME LIBRARY
app.post('/api/games', noMobileMiddleware(), gamesCtrl.addGame)

//CHANGE A GAME'S INFORMATION
app.put('/api/games/:id',gamesCtrl.updateGame)

//DELETE A GAME BY ITS ID
app.delete('/api/games/:id',gamesCtrl.deletegame)


app.listen( PORT, () => console.log(`${PORT} games ported.`))

