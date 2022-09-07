<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import Button from "../atoms/Button.svelte";

    export let textArr: string[] = [];
    export let activeItem: string;

    const dispatch = createEventDispatcher();
</script>

<div class="btns">
    {#each textArr as text}
        <Button
            {text}
            active={text === activeItem}
            on:click={() => dispatch("change-tab", text)}
        />
    {/each}
</div>

<style>
    .btns {
        @apply flex justify-center items-center gap-5;
    }
</style>
