const express=require("express")
const router=express.Router()
const Person = require('./../models/personmodel.js'); 




router.post("/",async(req,res)=>{
   try {
    const personData = req.body;
    const person = new Person(personData);
    const response = await person.save();
    res.status(200).json({response});
    console.log('Person data saved successfully:', response);
   } catch (error) {
    res.status(500).json({ error: 'Failed to save person data' });
   }
       
})
router.get("/",async(req,res)=>{
    try {
        const persons = await Person.find();
        res.status(200).json({persons});
        console.log('Fetched all persons successfully:', persons);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch persons' });
    }
});
router.get("/:work",async(req,res)=>{
    try {
        const work=req.params.work
        if(work==="cheif" || work==="Manager" || work==="waiter");
            const response= await Person.find({work})
            res.status(200).json({response})

    } catch (error) {
        res.status(404).json({error:"WorkType is not valid"})
    }
})
router.put("/:id",async(req,res)=>{
 try {
       const id = req.params.id;
       const updatedPerson=req.body
       const response=await Person.findByIdAndUpdate(id , updatedPerson,
           {
               new:true,
               runValidators:true,
           },
        )
        if(!response){
            return res.status(404).json({ eroor:"Person not Find "})
        }
        console.log(response)
        res.status(200).json({message:"Person Data Updated",response})
       
    } catch (err) {
        res.status(500).json({err:"Internal Server Error "})
    }
})
router.delete("/:id",async(req,res)=>{
try {
        const id= req.params.id
        const response=await Person.findByIdAndDelete(id)
        if(!response){
            res.status(404).json({err:"Person not found"})
        }
        res.status(200).json({response})
    } catch (error) {
        res.status(500).json({ error:"Internal Server Error"})      
    }
})

//comment for the second testing 
module.exports=router