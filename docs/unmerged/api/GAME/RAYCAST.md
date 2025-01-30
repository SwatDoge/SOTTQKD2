# Raycast
A rushed in feature that never worked.

:::info Developer statement
"Added raycast support (WIP - check docs)" ~ Yendis team, patchnotes. It was never added to the docs.
:::

## Cast ray <Badge type="danger" text="broken"/>
```krunkscript
# Cast a ray from any angle/position
GAME.RAYCAST.from(
    0,                  # x position 
    0,                  # y position 
    0,                  # z position 
    Math.toRad(180),    # num radians y
    Math.toRad(90),     # num radians z
    100                 # num distance
);
```

```krunkscript
# Cast a ray from a player
GAME.RAYCAST.fromPlayer(
    player,            # obj target player
    100                # num distance
);
```