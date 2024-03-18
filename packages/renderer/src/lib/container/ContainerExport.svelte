<script lang="ts">
import { Input } from '@podman-desktop/ui-svelte';
import Button from '../ui/Button.svelte';
import FormPage from '../ui/FormPage.svelte';
import { faDownload, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { router } from 'tinro';
import ErrorMessage from '../ui/ErrorMessage.svelte';
import { createTask } from '/@/stores/tasks';
import type { ContainerInfoUI } from './ContainerInfoUI';
import { exportContainerInfo } from '/@/stores/export-container-store';
import { onMount } from 'svelte';
import { Uri } from '../uri/Uri';
let container: ContainerInfoUI;

let invalidName = false;
let invalidFolder = true;
let exportedName: string;
let exportedNameError = '';
let outputDirectory = '';
let outputUri: Uri;
let exportedError = '';

$: invalidFields = invalidName || invalidFolder;

onMount(async () => {
  // grab current value
  container = $exportContainerInfo;

  if (!container) {
    // go back to containers list
    router.goto('/containers/');
    return;
  }

  exportedName = `container-${container.name}`;
});

function checkContainerExportName(event: any) {
  const containerValue = event.target.value.trim();

  if (containerValue === '') {
    exportedNameError = `The name ${containerValue} cannot be blank.`;
    invalidName = true;
  } else {
    exportedNameError = '';
    invalidName = false;
  }
}

async function selectFolderPath() {
  const result = await window.saveDialog({
    title: 'Select the directory where to export the container content',
  });
  if (!result) {
    if (!outputDirectory) {
      invalidFolder = true;
    }
    return;
  }

  const uriAPI = Uri.revive(result);
  outputUri = uriAPI;
  outputDirectory = uriAPI.fsPath;
  invalidFolder = false;
}

async function exportContainer() {
  exportedError = '';
  const task = createTask(`Export container ${container.name}`);
  task.openFolder = () => {
    window.openDialog({
      defaultUri: outputUri,
    });
  };
  try {
    await window.exportContainer(container.engineId, {
      id: container.id,
      outputTarget: outputUri,
    });
    task.status = 'success';
    // go back to containers list
    router.goto('/containers/');
  } catch (error) {
    task.status = 'failure';
    task.error = String(error);
    exportedError = String(error);
  } finally {
    task.state = 'completed';
  }
}
</script>

{#if container}
  <FormPage title="Export container {container.name}">
    <svelte:fragment slot="icon">
      <i class="fas fa-download fa-2x" aria-hidden="true"></i>
    </svelte:fragment>

    <div slot="content" class="flex flex-col min-w-full h-fit p-5">
      <div class="bg-charcoal-600 px-6 py-4 space-y-2 lg:px-8 sm:pb-6 xl:pb-8">
        <div>
          <label for="modalContainerName" class="block mb-2 text-sm font-medium text-gray-400">Container name:</label>
          <Input
            on:input="{event => checkContainerExportName(event)}"
            bind:value="{exportedName}"
            aria-label="Exported file name"
            error="{exportedNameError}" />
        </div>
        <div>
          <label for="modalContainerName" class="block mb-2 text-sm font-medium text-gray-400">Export to:</label>
          <div class="flex w-full">
            <Input
              class="grow mr-2"
              name="{container.id}"
              readonly
              value="{outputDirectory}"
              id="input-export-container-name"
              aria-invalid="{invalidFolder}" />
            <Button
              on:click="{() => selectFolderPath()}"
              icon="{faFolderOpen}"
              title="Open dialog to select the directory where to export the container"
              aria-label="Select output directory">Browse ...</Button>
          </div>
          <div class="pt-5 border-zinc-600 border-t-2"></div>
          <Button
            on:click="{() => exportContainer()}"
            class="w-full"
            icon="{faDownload}"
            bind:disabled="{invalidFields}"
            aria-label="Export container">
            Export Container
          </Button>
          <div aria-label="createError">
            {#if exportedError}
              <ErrorMessage class="py-2 text-sm" error="{exportedError}" />
            {/if}
          </div>
        </div>
      </div>
    </div></FormPage>
{/if}
