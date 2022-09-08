<script lang="ts">
    import Container from "../atoms/Container.svelte";
    import Label from "../atoms/Label.svelte";
    import PercentBlock from "../atoms/PercentBlock.svelte";

    export let answer: string;
    export let votes: number;
    export let percent: number;
    export let variant: "percent-a" | "percent-b" = "percent-a";
</script>

<Container variant="answer" on:click>
    <PercentBlock {variant} {percent} />
    <Label variant="secondary" text="{answer} ({votes})" />
</Container>
