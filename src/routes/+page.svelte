<script lang="ts">
    export let data;

    const url = `https://${data.host}/`;
    const title = `${data.name} Arroganz...`;
    const description = data.pun;

    console.log(data.headers);
</script>

<svelte:head>
    <title>{title}</title>

    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content="arroganz" />
    <meta name="robots" content="noindex, nofollow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="German" />
    <meta name="author" content="DreamTexX" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
</svelte:head>

<main>
    <h1>{description}</h1>
</main>

<style>
    :global(body) {
        margin: 0;
        overflow: hidden;
    }

    :global(*) {
        box-sizing: border-box;
    }

    main {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    h1 {
        font-size: 1.8em;
        font-weight: 900;
        font-family: sans-serif;
        text-align: center;
        max-width: 1000px;
    }
</style>
