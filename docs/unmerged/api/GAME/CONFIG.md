# Config
## Aquire server host <Badge type="tip" text="client-side"/>
:::tip
You can only retrieve host player object if that player is spawned in.
:::

```krunkscript
# Get player object of host
obj player = GAME.CONFIG.getHost(); # player object
```

## Aquire various game configs <Badge type="danger" text="broken"/>
:::danger
Unimplemented feature, values below are assumptions.
:::
```krunkscript
# Get configs of a class
GAME.CONFIG.getClasses();   # class object

# Get configs of current match
GAME.CONFIG.getMatch();     # match object

# Get host settings of current match
GAME.CONFIG.getSettings();  # match settings object

# Get the weapon configs
GAME.CONFIG.getWeapons();   # weapon object list
```