# Mods
Mods allow you to replace the assets of the base game.
:::info Important resources for mods
- [mod.zip](https://krunker.io/modzip)
- [settings.txt](https://krunker.io/docs/settings.txt)
:::

## Loading/unloading a mod <Badge type="tip" text="client-side" />
```krunkscript
# Reset/unload mods
GAME.MODS.reset();
```

## Removing a mod <Badge type="tip" text="client-side" />
:::tip
`GAME.MODS.Reset()` foces a popup on your screen, which can be removed using:
```krunkscript
GAME.UI.updateDIVText("popupHolder", "");
```
:::

```krunkscript
# Load mod by URL
GAME.MODS.load(
    "https://krunker-user-assets.nyc3.cdn.digitaloceanspaces.com/md42849/mod.zip" # str mod URL
);
```
