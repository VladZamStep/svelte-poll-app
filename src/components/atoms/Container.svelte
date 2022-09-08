<script lang="ts">
    export let variant:
        | "header"
        | "main"
        | "footer"
        | "card"
        | "answer"
        | "btns"
        | "polls" = "main";
</script>

<div class={variant} on:click>
    <slot />
</div>

<style>
    .header {
        @apply flex gap-10 justify-center items-center bg-gradient-to-b from-slate-200 to-white p-5;
        border-bottom: 1px solid #e2e8f0;
    }
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
        @apply relative bg-slate-100 cursor-pointer my-2 select-none transition duration-200;
    }
    .answer:hover {
        @apply opacity-60;
    }
    .btns {
        @apply flex justify-center items-center gap-10;
    }
    .polls {
        @apply grid grid-cols-2 gap-5;
    }
</style>
