const {Router} = require ("express")
const router = Router();
const usersCtrl = require("../controller/asignatura.controller")

router.get("/media/:id", usersCtrl.getMediaById);

router.get("/apuntadas/:id", usersCtrl.getApuntadaById);
        
router.get("/apuntadas", usersCtrl.getApuntadas);
        
router.get("/impartidas/:id", usersCtrl.getImpartidasById);
        
router.get("/impartidas", usersCtrl.getImpartidas); 

module.exports = router;
