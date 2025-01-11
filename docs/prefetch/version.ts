export default async () => {
    const changelogs = await (await fetch("https://krunker.io/docs/versions.txt")).text();
    const version = changelogs.match(/UPDATE (.*?) /)?.[1];

    if (!version) {
        throw "Couldn't get the krunker version from the changelogs."
    }

    return version
}
