<script lang="ts">
    import type { PollConfig } from "src/common/models/types/PollConfig";

    import Poll from "./Poll.svelte";

    export let polls: PollConfig[] = [];
</script>

<div class="polls">
    {#each polls as poll (poll.id)}
        <Poll {poll} />
    {/each}
</div>

<style>
    .polls {
        @apply grid grid-cols-2 gap-5;
    }
</style>
