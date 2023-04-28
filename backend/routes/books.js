const {Router}=require('express')
const router= Router();

const Book= require('../models/Book')

router.get('/', async (req, res)=> {
    const books= await Book.find();
    res.json(books);
});

router.post('/', async(req, res)=>{
    //console.log(req.body);
    const {title,author,isbn}= req.body;
    const newbook=new Book({title,author,isbn})
    await newbook.save();
    res.json({message:'Book Saved'})
});

router.delete('/:id',async(req, res)=>{
    await Book.findByIdAndDelete(req.params.id);
    res.json({message:'Book Deleted'})
})

module.exports= router;