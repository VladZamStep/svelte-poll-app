<script lang="ts">
    export let variant: "primary" | "submit" = "primary";
    export let text: string = "button";
    export let active: boolean = false;
</script>

<button class={variant} class:active on:click>
    {text}
</button>

<style>
    .primary {
        @apply pb-2 text-lg text-gray-600;
        border-bottom: 2px solid transparent;
    }
    .submit {
        @apply p-2 w-full text-lg text-white bg-[#da5b74] rounded transition ease-in-out duration-300;
    }
    .submit:hover {
        @apply bg-[#d91b42];
    }
    .active {
        @apply text-[#d91b42];
        border-bottom: 2px solid #d91b42;
    }
</style>
