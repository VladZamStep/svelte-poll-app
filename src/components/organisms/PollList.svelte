<script lang="ts">
    import PollStore from "../../stores/PollStore";
    import Container from "../atoms/Container.svelte";
    import Poll from "../molecules/Poll.svelte";
</script>

<Container variant="polls">
    {#each $PollStore as poll (poll.id)}
        <Poll {poll} on:upvote />
    {/each}
</Container>
