const { spawn } = require("child_process")

// 启动 UnblockNeteaseMusic
spawn("npx", [
  "@unblockneteasemusic/server",
  "-p",
  "8081",
  "-o",
  "kuwo",
  "qq"
])

// 启动 NeteaseCloudMusicApi
spawn("node", ["app.js"], {
  stdio: "inherit"
})
