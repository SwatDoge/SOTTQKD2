# Time 

## Unix time <Badge type="tip" text="server-side" /> <Badge type="tip" text="client-side" />
:::warning
GAME.TIME.now() is based on system time. Its recommended to sync with server time
:::
```krunkscript
# Get unix time in miliseconds
num unixTime = GAME.TIME.now();
```
```krunkscript
# Convert unix time to a pretty time format
str formattedTime = GAME.TIME.getReadable(GAME.TIME.now());
```

## Timer freeze <Badge type="tip" text="server-side" />
The ingame timer can be paused and unpaused.

```krunkscript
# Pause the ingame timer
GAME.TIME.freeze();
```

```krunkscript
# Resume the ingame timer
GAME.TIME.unfreeze();
```

## Fixed delta <Badge type="danger" text="broken" />
Game speed used to affect delta negatively, returning broken and negative delta values. Game speed was removed as a feature, this broken method is likely a remainder from that time.
```krunkscript
# Returns regular delta
num delta = GAME.TIME.fixedDelta();
```