module.exports = {
  apps: [
    {
      name: 'processor',
      script: 'lib/main.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    },
    {
      name: 'api',
      script: 'sqd',
      args: 'serve:prod',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    },
    {
      name: 'new-api',
      script: 'sqd',
      args: 'new-serve:prod',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ]
}
