export async function shop() {
    const opens = await setTimeout(() => {
        console.log("dokon ochiq");
    }, 5000);

    return opens
}