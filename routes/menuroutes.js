const express=require("express")
const router=express.Router()
const Menu=require("./../models/manumodel.js")


router.post("/",async(req,res)=>{
try {
        const menudata= req.body;
        const menu=new Menu(menudata)
        const result=await menu.save()
        
        res.status(200).json({result})
        console.log(result)
}
 catch (error) {
    res.status(500).json({error:'Failed to Add Menu Item'})
    }
})
router.get("/",async(req,res)=>{
    try {
        const menu = await Menu.find()
        res.status(200).json({menu})
        console.log(menu)
    } catch (error) {
        res.status(500).json({error:"Failed to Load Menu"})
    }
})
router.get("/:test",async(req,res)=>{
    try {
        const test=req.params.test
        if(test==="spicy"|| test==="sour" || test==="sweet");
        const response= await  Menu.find({test})
        res.status(200).json({response})
        
    } catch (error) {
        res.status(400).json({error})
        
    }
})
router.put("/:id",async(req,res)=>{
  try {
      const id= req.params.id
      const UpadatedMenu= req.body
      const response=await Menu.findByIdAndUpdate(id,UpadatedMenu,{
          new:true,
          runValidators:true,
      })
      if(!response){
          res.status(404).json({err:"Menu not Found"})
      }
      res.status(200).json({message:"Menu Upadtig",response})
  } catch (error) {
    res.status(500).json({error:"Internal Server Error"})
  }
    })
router.delete("/:id",async(req,res)=>{
try {
        const id= req.params.id
        const response=await Menu.findByIdAndDelete(id)
        if(!response){
            res.status(404).json({err:" not found"})
        }
        res.status(200).json({response})
    } catch (error) {
        res.status(500).json({ error:"Internal Server Error"})      
    }
})


module.exports=router