module.exports = {
  apps: [
    {
      name: 'processor',
      script: 'lib/main.js',
      node_args: '--require=dotenv/config',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
    {
      name: 'api',
      script: 'sqd',
      args: 'serve:prod',
      node_args: '--require=dotenv/config',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      instances: 'max',
      exec_mode: 'cluster'
    },
    {
      name: 'processor-recovery',
      script: 'sqd',
      args: 'process:prod',
      node_args: '--require=dotenv/config',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: {
        NODE_ENV: 'production',
        DOTENV_CONFIG_PATH: '.env.recovery'
      }
    }
  ]
}
