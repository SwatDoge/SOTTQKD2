# Settings

## Changing settings
```krunkscript
# Set a setting for a player
GAME.SETTINGS.set(
    "defaultSkins",     # str setting name
    true               # bool setting value
);

# Get the value of a setting
GAME.SETTINGS.get(
    "defaultSkins"      # str setting name
);
```

## Listing all setting names
:::tip
You can also get all existing settings from [this site](https://krunker.io/docs/settings.txt)
:::

```krunkscript
# Get all names of settings
GAME.SETTINGS.list();
```