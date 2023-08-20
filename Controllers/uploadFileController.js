

function uploadFile(req ,res){
    const file = req.file
    console.log(req.file)
   return  res.status(200).json({message:"File Uploaded Successfully",filename:file.filename})
// res.json({message:"Recieved"})
}

module.exports = uploadFile