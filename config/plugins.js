    module.exports = ({ env }) => ({
      // Cloudinary
      upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
      // ... Database NEON
      'strapi-neon-tech-db-branches': {
        enabled: true,
        config: {
          neonApiKey: "10jir5u7t2jxsn54jwq15xgcxu1dqe4gu4qghaj2e107cvrma6q4gsn9xubgyvu0", // get it from here: https://console.neon.tech/app/settings/api-keys
          neonProjectName: "project-bussines", // the neon project under wich your DB runs
          neonRole: "neondb_owner", // create it manually under roles for your project first
          //(gitBranch: "main") // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
        }
      },
      // ... Vercel
      "vercel-deploy": {
        enabled: true,
        config: {
          deployHook:
            "https://api.vercel.com/v1/integrations/deploy/prj_XmY0CxladBMEltZJqOIxX7NSkxW6/5qQJL5UU0U",
          apiToken: "TVIDi5YcBHjmfU7TDsIFT1kl",
          appFilter: "strapi-neon",
          teamFilter: "prj_XmY0CxladBMEltZJqOIxX7NSkxW6",
          roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
        },
      },
    });