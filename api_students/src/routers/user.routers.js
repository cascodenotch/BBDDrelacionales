const {Router} = require ("express")
const router = Router();
const usersCtrl = require("../controller/user.controller")

router.get("/alumnos", usersCtrl.getAllUsers);

router.get("/alumnos/:id", usersCtrl.getUserById);
        
router.post("/alumnos", usersCtrl.postUser);
        
router.put("/alumnos", usersCtrl.putUser);
        
router.delete("/alumnos", usersCtrl.deleteUser); 

module.exports = router;
