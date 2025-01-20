import fs from "fs"
import path from "path"
import merge from "../prefetch/merge"

import { defineConfig } from "vitepress"

import version from "../prefetch/version" with { type: "macro" }
import mergeLayout from "./sidebar_layout.json" with { type: "json" }
import krunkscriptLang from "./krunkscript-lang.json" with { type: "json" }
import krunkscriptTheme from "./krunkscript-theme.json" with { type: "json" }

// Content loaders suck so I do it this way.
fs.writeFileSync(path.join(import.meta.dir, "../merged/index.md"), await merge("../unmerged/"))

export default defineConfig({
    ignoreDeadLinks: true,
    cleanUrls: true,
    lang: "en-US",
    title: "SOTT Quick krunker docs",
    description: "For more advanced KrunkScript users",
    head: [
        ["meta", { name: "language", content: "EN" }],
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ["link", { rel: "icon", href: "/images/meta/sott_krunker.png" }],
        ["meta", { property: "og:image", content: "/images/meta/meta_logo.png" }],
        ["meta", { name: "keywords", content: "Krunker, documentation, krunkscript, wiki" }],
        ["meta", { name: "subject", content: "KrunkScript documentation" }],
        ["meta", { name: "author", content: "SwatDoge, mail@swatdoge.eu" }],

        ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "https://krdocs.swatdoge.eu/images/favicons/apple-touch-icon.png" }],
        ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "https://krdocs.swatdoge.eu/images/favicons/favicon-32x32.png" }],
        ["link", { rel: "icon", type: "image/png", sizes: "194x194", href: "https://krdocs.swatdoge.eu/images/favicons/favicon-194x194.png" }],
        ["link", { rel: "icon", type: "image/png", sizes: "192x192", href: "https://krdocs.swatdoge.eu/images/favicons/android-chrome-192x192.png" }],
        ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "https://krdocs.swatdoge.eu/images/favicons/favicon-16x16.png" }],
        ["link", { rel: "mask-icon", href: "https://krdocs.swatdoge.eu/images/favicons/safari-pinned-tab.svg", color: "#3eaf7c" }],
        ["link", { rel: "shortcut icon", href: "https://krdocs.swatdoge.eu/images/favicons/favicon.ico" }],
        ["meta", { name: "msapplication-TileColor", content: "#00a300" }],
        ["meta", { name: "msapplication-TileImage", content: "https://krdocs.swatdoge.eu/images/favicons/mstile-144x144.png" }],
        ["meta", { name: "msapplication-config", content: "https://krdocs.swatdoge.eu/images/favicons/browserconfig.xml" }],
        ["meta", { name: "theme-color", content: "#3AA675" }]
    ],
    markdown: {
        theme: krunkscriptTheme,
        shikiSetup: async (shiki) => {
            await shiki.loadLanguage(krunkscriptLang)
            await shiki.loadTheme(krunkscriptTheme)
        }
    },
    vite: {
    },
    themeConfig: {
        logo: "/images/meta/meta_logo.png",
        externalLinkIcon: true,
        aside: false,
        sidebar: mergeLayout,
        editLink: {
            pattern: ""
        },
        notFound: {
            quote: "404 ez lyf ez suiside"
        },
        siteTitle: `FRVR Krunker ${await version()}`
    }
})
