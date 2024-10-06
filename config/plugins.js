    module.exports = ({ env }) => ({
      // ...
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
      // ...
      'strapi-neon-tech-db-branches': {
        enabled: true,
        config: {
          neonApiKey: "piy3y3sbdugt22tm27ome0bc8gsxi78keupfl25883qm7oyxciw2g5b97kwcwfob", // get it from here: https://console.neon.tech/app/settings/api-keys
          neonProjectName: "project-kusen", // the neon project under wich your DB runs
          neonRole: "strapi-data_owner", // create it manually under roles for your project first
          //(gitBranch: "main") // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
        }
      },
    });