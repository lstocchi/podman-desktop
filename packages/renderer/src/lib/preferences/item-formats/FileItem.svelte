<script lang="ts">
import type { OpenDialogOptions } from '@podman-desktop/api';

import FileInput from '/@/lib/ui/FileInput.svelte';

import type { IConfigurationPropertyRecordedSchema } from '../../../../../main/src/plugin/configuration-registry';
import { onMount } from 'svelte';

export let record: IConfigurationPropertyRecordedSchema;
export let value: string = '';
export let onChange = async (_id: string, _value: string) => {};

let lastValue: string;
let firstLoading = true;

$: if (value !== lastValue) {
  // if the component is loading, do not call the onChange as the value was given by the parent so there was no modification
  if (!firstLoading && record.id) {
    onChange(record.id, value).catch((_: unknown) => (invalidEntry = true));
  }
  lastValue = value;
}

let invalidEntry = false;
let dialogOptions: OpenDialogOptions = {
  title: `Select ${record.description}`,
  selectors: record.format === 'folder' ? ['openDirectory'] : ['openFile'],
};

onMount(() => {
  firstLoading = false;
});
</script>

<div class="w-full flex">
  <FileInput
    id="input-standard-{record.id}"
    name={record.id}
    bind:value={value}
    readonly={record.readonly ?? true}
    placeholder={record.placeholder}
    options={dialogOptions}
    aria-invalid={invalidEntry}
    aria-label={record.description} />
</div>
