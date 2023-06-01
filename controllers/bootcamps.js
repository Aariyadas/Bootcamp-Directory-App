// Get all bootcamps
// get/api.v1/bootcamps
// Publuc

exports.getBootcamps=(req,res,next)=>{
    res.status(400).json({success:false,msg:"Show all bootcamps"})
}


// Get single bootcamps
// get/api.v1/bootcamps/id
// Publuc

exports.getBootcamp=(req,res,next)=>{
    res.status(400).json({success:false,msg:"Show all bootcamps"})
}

// Create new bootcamps
// post/api.v1/bootcamps
// Publuc

exports.createBootcamps=(req,res,next)=>{
    res.status(400).json({success:false,msg:"Create new bootcamps"})
}
// update bootcamps
// put/api.v1/bootcamps/:id
// Publuc

exports.updateBootcamps=(req,res,next)=>{
    res.status(400).json({success:false,msg:`Update bootcamp ${req.params.id}`})
}


// delet bootcamps
// put/api.v1/bootcamps/:id
// Publuc

exports.deleteBootcamps=(req,res,next)=>{
    res.status(400).json({success:false,msg:`Delete bootcamp ${req.params.id}`})

}

