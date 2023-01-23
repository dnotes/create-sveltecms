import type { ProjectFiles } from '@stackblitz/sdk'
import type { PageServerLoad } from "./$types";

async function getProjectFiles():Promise<ProjectFiles> {
  let allFiles = import.meta.glob('/**/*.*', { as:'raw' })
  let projectFiles:ProjectFiles = {}
  let promises = Object.keys(allFiles)
    .filter(k => !k.match(/(?:node_modules|.svelte-kit|static|routes\/\+page)/))
    .forEach(async k => {
      projectFiles[k.replace(/^\//,'')] = await allFiles[k]()
    })
  await promises
  return projectFiles
}

export const load:PageServerLoad = async () => {
  let projectFiles = await getProjectFiles()
  return {
    projectFiles,
  }
}
