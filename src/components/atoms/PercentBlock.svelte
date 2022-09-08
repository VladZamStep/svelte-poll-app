<script lang="ts">
    export let variant: "percent-a" | "percent-b" = "percent-a";
    export let percent: number;
</script>

<div class="percent {variant}" style="width:{percent}%" />

<style>
    .percent {
        height: 100%;
        position: absolute;
    }
    .percent-a {
        border-left: 4px solid #d91b42;
        background-color: rgba(217, 27, 66, 0.2);
    }
    .percent-b {
        border-left: 4px solid #45c496;
        background-color: rgba(69, 196, 150, 0.2);
    }
</style>
