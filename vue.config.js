const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      fallback: { 
        'path': require.resolve('path-browserify'), 
        'fs': false ,
        "timers": require.resolve("timers-browserify"),
        "stream": require.resolve("stream-browserify"),
        "tty": require.resolve("tty-browserify"),
        "crypto": require.resolve("crypto-browserify")
      },
        
      extensions: ['.jsx', '.js', '.tsx', '.ts'],
    }
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        extraFiles: [
          "base.db"
        ]
      }
    }
  }
});