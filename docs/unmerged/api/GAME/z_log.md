# Log
Logs messages to the inspect element developer console. Useful for debugging.
The developer console can be opened with `F12` or `CTRL + SHIFT + I`

```krunkscript
# Log to inspect element console
GAME.log(
    "title"         # any
);
```

```krunkscript
# An infinte amount of arguments can be logged of all types.
GAME.log(
    0, 
    "test", 
    GAME.PLAYERS.getSelf()
);
```