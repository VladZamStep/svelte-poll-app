<script lang="ts">
    export let variant: "primary" | "secondary" = "primary";
    export let text: string = "Hello";
</script>

<p class={variant}>{text}</p>

<style>
    .primary {
        @apply pl-1 mt-2 mb-7 text-sm text-gray-400;
    }
    .secondary {
        @apply inline-block py-2 px-5 text-sm text-gray-700;
    }
</style>
