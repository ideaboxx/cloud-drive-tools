# cloud-drive-tools

Collection of scripts for cloud drive storage

## Generate Master Key file

To generate master key file for using with `cloud-drive-fs` or `cloud-drive-browser`

1. Clone this repo on google cloud `cloud shell`
2. Run `npm i` and `npm run generate-key`

if your service account creation was aborted due to any reason to resume the key generation use:
`npm run generate-key <cloud_project_name>`
