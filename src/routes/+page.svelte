<script lang="ts">
  import sdk from '@stackblitz/sdk'
  import type { Project, OpenOptions } from '@stackblitz/sdk'

  export let data:PageData
  let projectFiles = data.projectFiles
  let version = JSON.parse(projectFiles['package.json'])?.dependencies?.sveltecms

  let projectOptions:OpenOptions = {
  }
  let projectConfig:Project = {
    title: 'SvelteCMS Starter',
    description: 'A new site running SvelteCMS ' + version,
    template: 'node',
    files: projectFiles,
  }

  function stackblitz() {
    sdk.openProject(projectConfig, projectOptions)
  }
</script>

<div class="prose dark:prose-invert prose-xl mx-auto w-full">
  <button class="not-prose mx-auto text-xl block p-4 rounded-full border-2 border-green-600" type="button" on:click={stackblitz}>New Project on StackBlitz</button>

  <pre class="text-xs">
    <code>
      {JSON.stringify(projectConfig, null, 2)}
    </code>
  </pre>
</div>
