# Why?

## Maintainability
The original docs were held together by ducttape from the beginning, its nearly impossible to get it to run nowadays. Vuepress was a poorly supported community project, relying on other poorly maintained dependencies. It lacked documentation, support and never got updates.
Vuepress was picked up by the Vue development team and turned into Vitepress. It builds on vuepress while making much needed improvements, fixing a lot of the problems I've had with vuepress out of the box. While not perfect, I'm hoping to drastically improve maintainability of my project using vitepress.

## Structure rework
I originally stuck to the existing structure of the krunker docs, which was designed as more of an explainer document rather than a cheatsheet, which SOTTQKD is meant to be. I am hoping this new direction will make the docs faster to use.

# How to set up?
- Install bun (or any other js runtime).
- Open terminal in project folder:
  - `bun i` to install dependencies.
  - `bun dev` to run

# How to help?
[Join DQ Krunker to discuss, its easier :)](https://discord.gg/YBnq2um)
- Feedback is always good
- Porting knowledge from the current docs to this version with the new structure
- Testing which methods do and do not work
- Datamining krunker to get missing or up to date structs (i.e. player object, trigger arguments, AI behaviour, etc.)
- Tell me about edgecases and secrets
- CI/CD / Beta enviroment
