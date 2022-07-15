import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/userRoute";
import * as mongoose from "mongoose";



class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    // public mongoUrl: string = 'mongodb://localhost/CRMdb';  

    constructor() {
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void {
        // mongoose.Promise = global.Promise;
        mongoose
            .connect(process.env.mongoUrl)
            .then(res => {
                console.log("MongoDB Connected successfully.")
            })
            .catch(err => {
                console.log("MongoDB Connection failed")
                throw err
            })

    }
}

export default new App().app;