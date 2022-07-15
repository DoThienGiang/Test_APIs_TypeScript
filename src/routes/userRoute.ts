import { Request, Response, NextFunction } from "express";
import { UserController } from "../controller/userController";

export class Routes {

    public userController: UserController = new UserController()

    public routes(app): void {

        app.route('/')
            .post(this.userController.addNewUser)
            .get(this.userController.getUsers);
        app.route('/:userId')
            // get specific contact
            .get(this.userController.getUserWithID)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser)

    }
}