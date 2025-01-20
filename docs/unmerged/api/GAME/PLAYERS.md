# Players
todo tip player objects

## Get player objects <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Get a list of all players in the server
obj[] players = GAME.PLAYERS.getSelf();

# Get own player object
obj player = GAME.PLAYERS.list();

# Get player object from specified player
GAME.PLAYERS.findByID(
    player.id   # str player id
);
```

## Disable player meshes <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Disables player meshes
GAME.PLAYERS.disableMeshes();
```

## Remove LOD's <Badge type="danger" text="broken" vertical="middle" />
```krunkscript
GAME.PLAYERS.toggleLOD(
    true    # bool enable LOD's
);
```