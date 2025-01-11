# Default
GAME.DEFAULT methods allow you to disable core components of krunker.

:::tip
Additional default behavour disabling methods have been added to this list. Make sure to check the player object for its disabling methods and properties.
:::

## Disable core features  <Badge type="tip" text="client-side"/> <Badge type="tip" text="server-side"/>
```krunkscript
# Disable the 3D scene. Allows you to make a game with just GAME.OVERLAY. (client)
GAME.DEFAULT.disable3D()

# Disable client prediction (client)
GAME.DEFAULT.disablePrediction();       

# Disables all player logic (client & server). Use this in onPlayerUpdate hooks.
GAME.DEFAULT.disablePlayerBehaviour();

# Disables player updates to other clients (server)
GAME.DEFAULT.disableServerSync();

# Disables inputs (client)
GAME.INPUTS.disableDefault();

# Re-enables inputs, known to be buggy (client)
GAME.INPUTS.enableDefault();

# Disables most default UI (client)
GAME.UI.hideDefault();

# Disables crosshair (client)
GAME.UI.hideCrosshair();

# Stops visually displaying players (client)
GAME.PLAYERS.disableMeshes();           
```