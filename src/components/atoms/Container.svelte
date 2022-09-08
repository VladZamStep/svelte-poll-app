<script lang="ts">
    export let variant: "main" | "footer" | "card" | "answer" = "main";
</script>

<div class={variant} on:click>
    <slot />
</div>

<style>
    .main {
        @apply max-w-[960px] my-10 mx-auto;
    }
    .footer {
        @apply p-10 text-center;
    }
    .card {
        @apply mt-10 p-5 rounded shadow-[0_0px_10px_-2px_rgba(0,0,0,0.4)];
    }
    .answer {
        @apply relative bg-slate-100 cursor-pointer my-2 select-none;
    }
    .answer:hover {
        @apply opacity-60;
    }
</style>
