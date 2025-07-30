import { exec } from 'child_process'

exec('npx y-webrtc', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    return
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`)
    return
  }
  console.log(`Output:\n${stdout}`)
})
