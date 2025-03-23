// Vitepress contentloaders suck so im just using macros
import fs from "fs";
import path from "path";

export default async (unmergedPath: string) => {
    const unmergedFiles = fs.readdirSync(path.join(__dirname, unmergedPath), {
        recursive: true,
        withFileTypes: true,
    })
        .filter(path => path.name.endsWith(".md"))
        .reverse()
        .sort((a, b) => a.name.localeCompare(b.name))

    const unmergedContent = unmergedFiles.map(file => fs.readFileSync(path.join(file.parentPath, file.name), "utf-8"));

    return unmergedContent.join("\n---\n&nbsp;\n");
}
