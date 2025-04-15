const UploadController = (res, req) => {
  try {
    console.log("From upload controller");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default UploadController;
