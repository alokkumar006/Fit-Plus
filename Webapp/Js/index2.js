const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = process.env.PORT || 8000;


app.get('/start_pose_detection', (req, res) => {
  const pythonProcess = spawn('python', ["E:\\poseEstimationProject2\\AiTrainerProject2.py"]);

  pythonProcess.stdout.on('data', (data) => {
    console.log(`Python Script Output: ${data}`);
  });

  pythonProcess.stderr.on('data', (data) => {
    console.error(`Python Script Error: ${data}`);
  });

  pythonProcess.on('close', (code) => {
    console.log(`Python Script Exited with Code: ${code}`);
    res.send('Pose detection ended.');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
