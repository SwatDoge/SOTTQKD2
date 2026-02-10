# Default
GAME.DEFAULT methods allow you to disable core components of krunker.

:::tip
Additional default behavour disabling methods have been added to this list. Make sure to check the player object for its disabling methods and properties.
:::

## Disable core features  <Badge type="tip" text="client-side"/> <Badge type="tip" text="server-side"/>
```krunkscript
# Disable the 3D scene. Allows you to make a game with just GAME.OVERLAY. (client)
GAME.DEFAULT.disable3D();
```

```krunkscript
# Disable client prediction (client)
GAME.DEFAULT.disablePrediction();       
```

```krunkscript
# Disables all player logic (client & server). Use this in onPlayerUpdate hooks.
GAME.DEFAULT.disablePlayerBehaviour();
```

```krunkscript
# Disables player updates to other clients (server)
GAME.DEFAULT.disableServerSync();
```

```krunkscript
# Disables inputs (client)
GAME.INPUTS.disableDefault();
```

```krunkscript
# Re-enables inputs, known to be buggy (client)
GAME.INPUTS.enableDefault();
```

```krunkscript
# Disables most default UI (client)
GAME.UI.hideDefault();
```

```krunkscript
# Disables crosshair (client)
GAME.UI.hideCrosshair();
```

```krunkscript
# Stops visually displaying players (client)
GAME.PLAYERS.disableMeshes();           
```

:::warning
While `GAME.PLAYERS.toggleLOD` does toggle LODs, krunker itself doesnt use LODs. This feature will just make players invisible.
:::

```krunkscript (client)
# Disable the level of detail of an object.
GAME.PLAYERS.toggleLOD(
    true    # bool enable LOD's
);
```