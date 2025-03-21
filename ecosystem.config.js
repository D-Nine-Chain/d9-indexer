module.exports = {
  apps: [
    // {
    //   name: 'processor',
    //   script: 'lib/main.js',
    //   node_args: '--require=dotenv/config',
    //   log_date_format: 'YYYY-MM-DD HH:mm Z',
    // },
    {
      name: 'api',
      script: 'sqd',
      args: 'serve:prod',
      node_args: '--require=dotenv/config',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      // instances: 'max',
      // exec_mode: 'cluster'
    },
    {
      name: 'new-api',
      script: 'sqd',
      args: 'new-serve:prod',
      node_args: '--require=dotenv/config',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      // instances: 'max',
      // exec_mode: 'cluster'
      env: {
        NODE_ENV: 'production',
        DOTENV_CONFIG_PATH: '.env.local'
      }
    },
    {
      name: 'processor-v2',
      script: 'lib/main.js',
      node_args: '--require=dotenv/config',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: {
        NODE_ENV: 'production',
        DOTENV_CONFIG_PATH: '.env.local'
      }
    }
  ]
}

