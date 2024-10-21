module.exports = {
  apps: [
    {
      name: 'processor',
      script: 'lib/main.js',
      node_args: '-r dotenv/config',
      env: {
        DOTENV_CONFIG_PATH: '.env.local'
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    },
    {
      name: 'api',
      script: 'sqd',
      args: 'serve:prod',
      env: {
        DOTENV_CONFIG_PATH: '.env.local'
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ]
}
