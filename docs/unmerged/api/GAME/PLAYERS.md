# Players
todo tip player objects

:::warning
GAME.PLAYERS.findByID() and GAME.PLAYERS.list() return instances, not references.
:::

## Get player objects <Badge type="tip" text="client-side" />
```krunkscript
# Get a list of all players in the server
obj[] players = GAME.PLAYERS.list();
```

```krunkscript
# Get own player object
obj player = GAME.PLAYERS.getSelf();
```

```krunkscript
# Get player object from specified player
obj player = GAME.PLAYERS.findByID(
    player.id   # str player id
);
```


```krunkscript
# Disables player meshes (client)
GAME.PLAYERS.disableMeshes();
```

## Disable player features <Badge type="tip" text="client-side" />

:::warning
While `GAME.PLAYERS.toggleLOD` does toggle LODs, krunker itself doesnt use LODs. This feature will just make players invisible.
:::

```krunkscript (client)
# Disable the level of detail of an object.
GAME.PLAYERS.toggleLOD(
    true    # bool enable LOD's
);
```