<script lang="ts">
    export let text: string = "Hello";
    export let variant: "header" | "footer" | "question" = "header";
</script>

<h1 class={variant}>{text}</h1>

<style>
    .header {
        @apply m-0 text-center text-2xl text-[#464243];
    }
    .footer {
        @apply text-gray-400 text-sm inline-block p-10;
        border-top: 1px solid #ddd;
    }
    .question {
        @apply pl-1 font-bold text-gray-600;
    }
</style>
