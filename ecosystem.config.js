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
      env: {
        // fix GraphQL introspection is not allowed by Apollo Server
        NODE_ENV: 'development',
        DOTENV_CONFIG_PATH: '.env.local'
      }
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
    },
    {
      name: 'account-assets-processor',
      interpreter: 'bun',
      script: 'd9/account-assets-processor.ts',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      env: {
        NODE_ENV: 'production',
      }
    }
  ]
}

