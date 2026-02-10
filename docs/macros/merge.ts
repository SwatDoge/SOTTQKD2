// Vitepress contentloaders suck so im just using macros
import fs from "fs";
import fsp from "fs/promises";
import path from "path";

//Combine files into string
export default async function(unmergedPath: string) {
    const unmergedFiles = fs.readdirSync(path.join(__dirname, unmergedPath), {
        recursive: true,
        withFileTypes: true,
    })
        .filter(
            path => path.name.endsWith(".md")
        )
        .reverse()
        .sort(
            (a, b) => a.name.localeCompare(b.name)
        );

    const unmergedContent = await Promise.all(
        unmergedFiles.map(file =>
            fsp.readFile(path.join(file.parentPath, file.name), "utf-8")
        )
    );

    return unmergedContent.join("\n---\n&nbsp;\n");
}