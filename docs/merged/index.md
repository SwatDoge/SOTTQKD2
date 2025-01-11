# Admin
## Kicking and banning users <Badge type="tip" text="server-side"/>

```krunkscript
# Detach camera
GAME.ADMIN.ban(
    player.id # Player id
)

# Attach camera
GAME.ADMIN.kick(
    player.id # Player id
)
```
---
&nbsp;
# Ads
## Video advertisement <Badge type="danger" text="broken"/>
:::tip
You're (supposed to) be able to play a video ad every 5 minutes.
:::

```krunkscript
# Play a video ad
GAME.ADS.playVideo()
```
---
&nbsp;
# AI
## Creation and deletion <Badge type="tip" text="server-side"/>
:::warning
You are currently limited to 40 active AIs per game
:::

:::tip
Modifying AI should be done within the [render](#render) hook
:::

```krunkscript
# Create an AI/NPC
obj robot = GAME.AI.spawn(
    "11441g",   # str asset id
    "AI 1",     # str name
    0,          # num x position
    0,          # num y position
    0,          # num z position
    {}          # obj AI configuration object
);

GAME.AI.remove(
    robot.sid # AI object sid
);
```

## Getting all AI <Badge type="tip" text="server-side"/>
```krunkscript
# List AI on your map
obj[] robots = GAME.AI.list(); # AI object list
```
---
&nbsp;
# Anim
## Playing and stopping animations <Badge type="tip" text="client-side"/>
You can play animations on any imported 3d model.
:::tip
Scene objects, players and AI have access to the `playAnim` and `stopAnim` method, which is a recommended shorthand for the functions                    below.
:::

```krunkscript
# Spawn object with baked in animation
obj object = GAME.SCENE.addAsset("11441g", 0, 0, 0, 1);

# Play animation
GAME.ANIM.playClip(
    object,     # Scene object, player object or AI object
    "Jump",     # Animation name
    0           # x time the animation repeats (0 = infinite)
);

# Stop animation
GAME.ANIM.stopClip(
    object,     # Scene object, player object or AI object
    "Jump"      # Animation name
);
```
---
&nbsp;
# Camera
## Detaching cameras <Badge type="tip" text="client-side"/>
A camera can be detached from the player, allowing you to control it yourself.

```krunkscript
# Detach camera
GAME.CAMERA.detach();

# Attach camera
GAME.CAMERA.attach();
```

## Camera transform <Badge type="tip" text="client-side"/>

:::warning
You can only rotate or position a camera once its [detached](#detaching-cameras).
:::

:::tip
envZone can be an efficient way to see what zone a player is standing in.
:::

### Setting transform data
```krunkscript
# Move camera to position
GAME.CAMERA.move(
    0,   # num x position
    0,   # num y position
    0    # num z position
);

# Rotate camera around
GAME.CAMERA.rotate(
    0,   # num x rotation
    0,   # num y rotation
    0    # num z rotation
);

# Make camera look at coordinates
GAME.CAMERA.lookAt(
    0,   # num x position
    0,   # num y position
    0    # num z position
);

# Get the ID of the envZone the player is standing in.
num activeZone = (num) GAME.CAMERA.envZone; # index or -1 if default
```

### Getting transform data

```krunkscript
# Get camera position
GAME.CAMERA.position.x = 0; # readonly num
GAME.CAMERA.position.y = 0; # readonly num
GAME.CAMERA.position.Z = 0; # readonly num

# Get camera rotation
GAME.CAMERA.rotation.x = 0; # readonly num
GAME.CAMERA.rotation.y = 0; # readonly num
GAME.CAMERA.rotation.Z = 0; # readonly num
```

## Misc <Badge type="tip" text="client-side"/>

```krunkscript
# Get the camera object to modify it
GAME.CAMERA.getObj();

# Shake the camera
GAME.CAMERA.shake(
    0.9 # num (0 - 1)
);

# Change the field of view of the camera
GAME.CAMERA.fov(
    90 # num (10-170)
);
```
---
&nbsp;
# Chat
## Sending chat messages <Badge type="tip" text="server-side"/>
:::tip
You can send or broadcast a chat message 2 times a second.
:::

```krunkscript
# Send message to specific player
GAME.CHAT.send(
    player.id,      # str player id
    "hello world",  # str message
    "#FFF"          # str color
);

# Broadcast message to all players
GAME.CHAT.broadcast(
    "hello world",  # str message
    "#FFF"          # str color
);
```
---
&nbsp;
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
---
&nbsp;
# Cookie
Cookies allow you to permanently store variables on a users browser. These variables can easily be edited by the user and should not be used for sensitive information. They're usually used for user preferences.

KrunkScript "Cookies" rely on the browsers' [localStorage api](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), and have nothing to do with real cookies.

:::warning
Cookies can only store strings as values
:::

## Accessing cookies <Badge type="tip" text="client-side"/>
```krunkscript
# Save a value to a cookie
GAME.COOKIES.save(
    "test",   # str name
    "100"     # str data
);

# Load a cookies' value by their name
str value = GAME.COOKIES.load(
    "test"   # str name
);

# Delete a cookie
GAME.COOKIES.remove(
    "test"   # str name
);

# Check if cookie exists
GAME.COOKIES.has(
    "test"    # str name
);
```
---
&nbsp;
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
---
&nbsp;
# Inputs

## Getting inputs <Badge type="danger" text="broken"/>
:::tip
- Must be used inside update loop
- Javascript keycodes are used for keys: https://keycode.info/
:::

:::warning
Broken. Dont use. Instead use the following hooks:
- onKeyHeld
- onKeyUp
- onKeyPress
:::

```krunkscript
# Do something when "c" (key code 67) is held down
public action update(num delta) {
    if (GAME.INPUTS.keyDown(67)) {
        # do something
    };
}
```

## Enabling and disabling inputs <Badge type="tip" text="client-side"/> <Badge type="tip" text="server-side"/>

```krunkscript
# Disables inputs
GAME.INPUTS.disableDefault()

# Reenables inputs, known to be buggy
GAME.INPUTS.enableDefault()
```

## Mouse movement and position <Badge type="danger" text="broken"/>
:::tip
Mouse position can only be received when cursor is locked to the game.
:::

```krunkscript
# Supposed to give mouse position on 2D maps, inconsistant but does work.
obj mouseOverlayPosition = GAME.INPUTS.mousePosOverlay();

# Suposed to give mouse position, doesnt work.
obj mousePosition = GAME.INPUTS.mousePos();

# Cursor movement vector, doesnt work.
obj mouseMovementVector = GAME.INPUTS.mouseMovement();
```

## Locking and unlocking mouse <Badge type="tip" text="client-side"/>

```krunkscript
# Frees the mouse from the game, not the window.
GAME.INPUTS.unlockMouse();

# Frees the mouse from the window.
GAME.INPUTS.freeMouse();

# Re-focus the mouse on the game. Does not work if the mouse is freed.
GAME.INPUTS.lockMouse();
```