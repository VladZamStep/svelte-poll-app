<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import Button from "../atoms/Button.svelte";
    import Container from "../atoms/Container.svelte";

    export let textArr: string[] = [];
    export let activeItem: string;

    const dispatch = createEventDispatcher();
</script>

<Container variant="btns">
    {#each textArr as text}
        <Button
            {text}
            active={text === activeItem}
            on:click={() => dispatch("change-tab", text)}
        />
    {/each}
</Container>
