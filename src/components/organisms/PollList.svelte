<script lang="ts">
    import { fade, slide, scale } from "svelte/transition";
    import { flip } from "svelte/animate";
    import PollStore from "../../stores/PollStore";
    import Container from "../atoms/Container.svelte";
    import Poll from "../molecules/Poll.svelte";
</script>

<Container variant="polls">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
            <Poll {poll} />
        </div>
    {/each}
</Container>
