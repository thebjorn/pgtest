<script>
    let {
        data
    } = $props()
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<pre>{JSON.stringify(data, null, 4)}</pre>

<style>
    h1 {
        color: red;
    }
</style>
