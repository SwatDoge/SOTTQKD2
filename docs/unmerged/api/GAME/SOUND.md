# Sound
:::tip
The sound asset id parameter will automatically convert str's to num's as of update 5.5.0
:::
## Playing sound <Badge type="tip" text="client-side" />
```krunkscript
# Play sound globally (doesn't fade over distance)
obj sound = GAME.SOUND.play2D(
    0,      # num sound asset id
    1,      # num volume (0 - 1)
    1,      # num rate (0 - 1)
    true    # bool loops
);
```

```krunkscript
# Play sound somewhere ingame
obj sound = GAME.SOUND.play3D(
    37204,  # num sound asset id
    1,      # num volume (0 - 1) 
    5,      # num x position
    0,      # num y position
    5,      # num z position
    0.9,    # num rate (0 - 1)
    true    # bool loops
);
```

## Stopping audio <Badge type="tip" text="client-side" />
```krunkscript
GAME.SOUND.stop(
    37204   # str asset id
);
```