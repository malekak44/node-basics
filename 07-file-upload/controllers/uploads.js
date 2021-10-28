const cloudinary = require('cloudinary').v2;

const uploadFile = async (req, res) => {
    try {
        // cloudinary.uploader.upload("./images/computer-1.jpeg", (error, result) => {
        //     console.log(result, error);
        // });
        console.log(req.body);
    } catch (err) {
        console.error(err);
    }
}

module.exports = uploadFile;