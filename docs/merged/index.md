# Admin
## Kicking and banning users <Badge type="tip" text="server-side"/>

```krunkscript
# Ban player
GAME.ADMIN.ban(
    player.id # str player id
);
```

```krunkscript
# Kick player
GAME.ADMIN.kick(
    player.id # str player id
);
```
---
&nbsp;
# Ads
## Video advertisement <Badge type="danger"/>
:::warning
Ads played with this method get blocked by almost everything, including minimal privacy extensions.
:::
:::tip
You're able to play a video ad every 5 minutes.
:::

```krunkscript
# Play a video ad
GAME.ADS.playVideo();
```
---
&nbsp;
# AI
AI is the same as in the Editor, and doesnt have any pathfinding.

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
```

```krunkscript
# Remove an AI from the map
GAME.AI.remove(
    robot.sid # str AI object sid
);
```

## Getting all AI <Badge type="tip" text="server-side"/>
```krunkscript
# List AI on your map
obj[] robots = GAME.AI.list();
```
---
&nbsp;
# Anim
Play animations on imported GLTF models.

## Playing and stopping animations <Badge type="tip" text="client-side"/>
:::tip
Scene objects, players and AI have access to the `playAnim` and `stopAnim` method, which is a recommended shorthand for the functions below.
:::

:::warning
Animations only work with GLTF models.
:::

```krunkscript
# Play animation
GAME.ANIM.playClip(
    object,     # obj Scene object, player object or AI object
    "Jump",     # str animation name
    0           # num x time the animation repeats (0 = infinite)
);
```

```krunkscript
# Stop animation
GAME.ANIM.stopClip(
    object,     # obj scene object, player object or AI object
    "Jump"      # str animation name
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
```

```krunkscript
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
```

```krunkscript
# Rotate camera around
GAME.CAMERA.rotate(
    0,   # num x rotation
    0,   # num y rotation
    0    # num z rotation
);
```

```krunkscript
# Make camera look at coordinates
GAME.CAMERA.lookAt(
    0,   # num x position
    0,   # num y position
    0    # num z position
);
```

### Getting transform data

```krunkscript
# Get camera position
GAME.CAMERA.position.x = 0; # readonly num
GAME.CAMERA.position.y = 0; # readonly num
GAME.CAMERA.position.Z = 0; # readonly num
```

```krunkscript
# Get camera rotation
GAME.CAMERA.rotation.x = 0; # readonly num
GAME.CAMERA.rotation.y = 0; # readonly num
GAME.CAMERA.rotation.Z = 0; # readonly num
```

## Misc <Badge type="tip" text="client-side"/>

```krunkscript
# Get the camera object to modify it
obj camera = GAME.CAMERA.getObj();
```

```krunkscript
# Shake the camera
GAME.CAMERA.shake(
    0.9 # num (0 - 1)
);
```

```krunkscript
# Change the field of view of the camera
GAME.CAMERA.fov(
    90 # num (10-170)
);
```

```krunkscript
# Get the ID of the envZone the player is standing in.
num activeZone = (num) GAME.CAMERA.envZone; # returns index or -1 if default
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
    "#FFF"          # str hex color
);
```

```krunkscript
# Broadcast message to all players
GAME.CHAT.broadcast(
    "hello world",  # str message
    "#FFF"          # str hex color
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
obj[] classes = GAME.CONFIG.getClasses();   # class object array
```

```krunkscript
# Get the weapon configs
obj[] weapons = GAME.CONFIG.getWeapons();   # weapon object array
```

```krunkscript
# Get configs of current match
obj match = GAME.CONFIG.getMatch();         # match object
```

```krunkscript
# Get host settings of current match
obj settings = GAME.CONFIG.getSettings();   # match settings object
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
```

```krunkscript
# Load a cookies' value by their name
str value = GAME.COOKIES.load(
    "test"   # str name
);
```

```krunkscript
# Delete a cookie
GAME.COOKIES.remove(
    "test"   # str name
);
```

```krunkscript
# Check if cookie exists
bool hasCookie = GAME.COOKIES.has(
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
---
&nbsp;
# Inputs

## Getting inputs <Badge type="danger" text="broken"/>
:::warning
Broken. Dont use. Instead use the following hooks:
- onKeyHeld
- onKeyUp
- onKeyPress
:::

:::tip
- Must be used inside update loop
- Javascript keycodes are used for keys: https://keycode.info/
:::

```krunkscript
# Do something when "c" (key code 67) is held down
bool isHoldingC = GAME.INPUTS.keyDown(67);
```

## Enabling and disabling inputs <Badge type="tip" text="client-side"/> <Badge type="tip" text="server-side"/>

```krunkscript
# Disables inputs
GAME.INPUTS.disableDefault();
```

```krunkscript
# Reenables inputs, known to be buggy
GAME.INPUTS.enableDefault();
```

## Mouse movement and position <Badge type="danger" text="broken"/>
:::tip
Mouse position can only be received when cursor is locked to the game.
:::

```krunkscript
# Supposed to give mouse position on 2D maps, inconsistant but does work.
obj mouseOverlayPosition = GAME.INPUTS.mousePosOverlay();
```

```krunkscript
# Suposed to give mouse position, doesnt work.
obj mousePosition = GAME.INPUTS.mousePos();
```

```krunkscript
# Cursor movement vector, doesnt work.
obj mouseMovementVector = GAME.INPUTS.mouseMovement();
```

## Locking and unlocking mouse <Badge type="tip" text="client-side"/>

```krunkscript
# Frees the mouse from the game, not the window.
GAME.INPUTS.unlockMouse();
```

```krunkscript
# Frees the mouse from the window.
GAME.INPUTS.freeMouse();
```

```krunkscript
# Re-focus the mouse on the game. Does not work if the mouse is freed.
GAME.INPUTS.lockMouse();
```
---
&nbsp;
# Live_objects
Live objects were added to krunker in season 7, and allow players to spawn objects with clientside hitboxes.

## Creating a live object <Badge type="tip" text="server-side"/>
:::tip
- There is no rate limit on this feature.
- Allows you to bypass the object limit of any map.
- Objects created with this method show up in `GAME.OBJECTS.list()`.
:::

```krunkscript
obj cube = GAME.LIVE_OBJECTS.addCube(
    0,      # num position x 
    0,      # num position y
    0,      # num position z
    10,     # num width
    10,     # num height
    10,     # num length
    0,      # num void (6 sized array of 0's and 1's, intended to represent which faces are enabled. Scrapped feature.)
    {}      # TODO, minimal scene object
);
```

---
&nbsp;
# Mods
Mods allow you to replace the assets of the base game.
:::info Important resources for mods
- [mod.zip](https://krunker.io/modzip)
- [settings.txt](https://krunker.io/docs/settings.txt)
:::

## Loading/unloading a mod <Badge type="tip" text="client-side" />
```krunkscript
# Reset/unload mods
GAME.MODS.reset();
```

## Removing a mod <Badge type="tip" text="client-side" />
:::tip
`GAME.MODS.Reset()` foces a popup on your screen, which can be removed using:
```krunkscript
GAME.UI.updateDIVText("popupHolder", "");
```
:::

```krunkscript
# Load mod by URL
GAME.MODS.load(
    "https://krunker-user-assets.nyc3.cdn.digitaloceanspaces.com/md42849/mod.zip" # str mod URL
);
```

---
&nbsp;
# Network
Networking allows you to send values between the server and the client.

:::warning
**Networking can introduce significant performance problems at scale.**

- Data: 2000 bytes per message.
- Message ID is unlimited in length (krunker docs are wrong).
- Broadcast (server to all): 10 msg per second.
- Send (server to client): 20 msg per second per user.
- Send (client to server): 40 msg per second.
:::

:::tip
- Receiving data is handled with the `onNetworkMessage` event.
- For constantly syncing between values on the client, like custom movement, check out registerSyncValues #TODO
:::

## Sending data <Badge type="tip" text="client-side"/> <Badge type="tip" text="server-side"/>
::: code-group
```krunkscript [Client]
# Sending data from the client to the server
bool isRateLimited = GAME.NETWORK.send(
    "test",     # str message id
    {a: 1}      # obj data
);
```

```krunkscript [Server]
# Sending data from the server to the specified user
bool isRateLimited = GAME.NETWORK.send(
    "test",     # str message id
    {a: 1},     # obj data
    player.id   # str player id
);
```
:::
## Broadcasting data <Badge type="tip" text="server-side"/>
```krunkscript
# Send data to all clients
bool isRateLimited = GAME.NETWORK.broadcast(
    "test",     # str message name
    {a: 1}      # obj data
);
```
---
&nbsp;
# NFT
For a short time before aquisition, Krunker under Yendis entertainment implemented [NFT's](https://opensea.io/Krunker/created) into krunker. While the methods allegidly work, theres so few NFT owners left that its hard to test anything.

:::info Developer statement
"Added Basic NFT functions: hasWallet, ownedAssets (check docs)" ~ Yendis, patchnotes. It has never been added to the docs.
:::

## Creating a live object <Badge type="tip" text="server-side"/>

```krunkscript
# Check if user has a linked crypto wallet.
bool hasWallet = GAME.NFT.hasWallet(
    player.id    # str player id
);
```

```krunkscript
# Returns unknown list type of owned NFT objects.
GAME.NFT.ownedAssets(
    player.id,    # str player id 
    collection,   # str name of collection
    callback      # function(bool succesful, obj[] assets) callback
);
```
---
&nbsp;
# Objects
Allows you to get information on objects in the scene.

:::tip
- For spawning objects check [GAME.SCENE](#scene).
- For deleting and modifying objects check scene object #TODO.
:::

## Getting scene objects <Badge type="tip" text="client-side" /> <Badge type="tip" text="server-side" />

```krunkscript
# Get a list of minimal client scene objects
obj[] objects = GAME.OBJECTS.list();
```

```krunkscript
# Get a list of minimal client scene objects
obj[] nodes = GAME.OBJECTS.getPathNodes();
```

## Get object by interface ID <Badge type="tip" text="server-side" />
#todo, shit no workey?
```krunkscript
obj[] objects = GAME.OBJECTS.getByInterface(id);
```
---
&nbsp;
# Overlay
As opposed to "UI", OVERLAY uses canvas rendering to render UI. It allows you to render shapes and text on top of a 2D overlay.

:::warning
- OVERLAY only renders in the `render` hook, which runs after the `update` hook. See [order of execution] #TODO.
- Keep in mind that default browser font families may differ for other browsers.
:::

:::tip
- The methods here are closely based on [the original browser canvas methods](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
- Canvas shapes start at the top left of your screen, setting position will offset it to the bottom right.
- You can use a custom font-family from a mod for the canvas, as shown in the examples below.
- To convert 3D world pos to 2d screen pos, check this method in [GAME.SCENE](#get-2d-screen-position-of-3d-world-position)
:::

## Managing the overlay <Badge type="tip" text="client-side" />
```krunkscript
# Move the cursor, everything gets rendered relative to this
GAME.OVERLAY.moveTo(
    50,     # num x position
    140     # num y position
);
```

```krunkscript
# Get dimensions of overlay obj{x, y} 
obj size = GAME.OVERLAY.getSize();

num x = size.x;
num y = size.y;
```

```krunkscript
# Move entire overlay 
GAME.OVERLAY.offset(
    10,     # num x offset
    0       # num y offset
);
```

```krunkscript
# Scale overlay
GAME.OVERLAY.scale(
    0.1     #num scale (0-1)
);
```

```krunkscript
# Set opacity of canvas strokes
GAME.OVERLAY.globalAlpha(
    1       # num (0-1) opacity
);
```

## Overlay state <Badge type="tip" text="client-side" />
```krunkscript
# Clear overlay
GAME.OVERLAY.clear();
```

```krunkscript
# Save a drawing state
GAME.OVERLAY.save();
```

```krunkscript
# Rollback a drawing state
GAME.OVERLAY.restore();
```

## Overlay transform <Badge type="tip" text="client-side" />
```krunkscript
# Move path relative to itself
GAME.OVERLAY.translate(
    20,     # num x direction
    20      # num y direction
);
```

```krunkscript
# Transform allows you to translate an object thru a matrix
GAME.OVERLAY.transform(
    1,      # num horizontal scaling
    0,      # num horizontal skewing
    1,      # num vertical skewing
    1,      # num vertical scaling
    0,      # num horizontal moving
    0       # num vertical moving
);
```

```krunkscript
# Resets the current transform and reapplies using transform()
GAME.OVERLAY.setTransform(
    1,      # num horizontal scaling
    0,      # num horizontal skewing
    1,      # num vertical skewing
    1,      # num vertical scaling
    0,      # num horizontal moving
    0       # num vertical moving
);
```

## Basic drawing <Badge type="tip" text="client-side" />
These methods don't need a path to be rendered on the canvas.

### Text
```krunkscript
# Draw text on screen
GAME.OVERLAY.drawText(
    "Hello world",  # str text
    0,              # num x position
    0,              # num y position
    0,              # num rotation (0 - 360)
    20,             # num font size
    "center",       # str alignment ("left", "center", "right")
    "#FFF",         # str color
    0.9,            # num opacity
    "comic sans"    # str font
);
```

```krunkscript
# Get canvas text width
num textWidth = GAME.OVERLAY.measureText(
    24,             # num fontsize
    "Testing",      # str text
    "serif"         # str font family name
);
```

### Images
```krunkscript
# Draw an image
GAME.OVERLAY.drawImage(
    "28142",    # str texture asset id
    0,          # num x position
    0,          # num y position
    256,        # num width
    256,        # num height
    0,          # num rotation (0 - 360)
    0.9         # num opacity (1 - 0)
);
```

### Lines
```krunkscript
# Draw a line
GAME.OVERLAY.drawLine(
    0,          # num x start position
    0,          # num y start position
    100,        # num x end position
    100,        # num y end position
    20,         # num thickness
    "#FFF",     # str color
    0.9         # num opacity (0 - 1)
);
```

### Shapes
```krunkscript
# Draw a rectangle
GAME.OVERLAY.drawRect(
    0,          # num x position
    0,          # num y position
    100,        # num width
    100,        # num height
    0,          # num rotation (0 - 360)
    "#FFF",     # str color
    0.9,        # num opacity (0 - 1)
    false       # bool center
);
```

```krunkscript
# Draw a circle
GAME.OVERLAY.drawCircle(
    0,          # num x position
    0,          # num y position
    100,        # num width
    100,        # num height
    0,          # num rotation (0 - 360)
    "#FFF",     # str color
    0.9,        # num opacity (0 - 1)
    false       # bool center
);
```

## Freeform strokes and paths <Badge type="tip" text="client-side" />
You can completely freely create and style shapes.
1. An overlay consists of a "cursor".
2. Any draw methods you call from this cursor creates a "path", which gets styled with the styles of the "stroke"
3. When calling `GAME.OVERLAY.stroke()` the strokes get applied to the paths.

### Stroke styles
```krunkscript
# Set filling style
GAME.OVERLAY.fillStyle(
    "#FFF"  # str color
);
```

```krunkscript
# Fill a path (before stroke)
GAME.OVERLAY.fill();
```

```krunkscript
# Set stroke style
GAME.OVERLAY.strokeStyle(
    "#FFF"  # str color
);
```

### Lines
```krunkscript
# Draw a line from cursor
GAME.OVERLAY.lineTo(
    150,     # num x position
    60       # num y position
);
```

```krunkscript
# Set corners where two lines meet
GAME.OVERLAY.lineJoin(
    "round"  # str type ("round", "bevel", "miter")
);
```

```krunkscript
# Set line width
GAME.OVERLAY.lineWidth(
    20       # num pixel width
);
```

```krunkscript
# Set line dash width
GAME.OVERLAY.lineDashOffset(
    5        # num space between dashes on line
);
```

### Text
```krunkscript
# Path text
GAME.OVERLAY.strokeText(
    "SwatDoge",     # str text to stroke out
    20,             # num x position
    10,             # num y position
    5               # num max width of stroke
);
```

### Shapes
```krunkscript
# Path a rectangle
GAME.OVERLAY.strokeRect(
    20,             # num x position 
    10,             # num y position
    15,             # num width
    17              # num height
);
```
### Curves and arcs
```krunkscript
# Path an arc
GAME.OVERLAY.arc(
    5,              # num position x
    10,             # num position y
    17,             # num circle radius
    0,              # num angle the circle starts
    Math.PI,        # num angle the circle ends
    true            # bool is counter clockwise
);
```
---
&nbsp;
# Payment

## Charging KR <Badge type="danger" text="broken"/>
```krunkscript
# Charging KR from map, non-functional.
GAME.PAYMENTS.charge();             # unknown
```

## Giving KR
```krunkscript
GAME.PAYMENTS.giveKR(
    player.id,                      # str player id
    0                               # int kr amount
);
```

---
&nbsp;
# Platform
Get current platform user resides on.

TODO ccs phone stuff

## Spending & giving KR <Badge type="tip" text="client-side"/>
```krunkscript
# Check if user is on mobile
bool isMobile = GAME.PLATFORM.isMobile();
```

```krunkscript
# Check if user is on browser
bool isBrowser = GAME.PLATFORM.isBrowser();
```

```krunkscript
# Check if user is using a custom client
bool isClient = GAME.PLATFORM.isClient();
```

---
&nbsp;
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
# Disables player meshes
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
---
&nbsp;
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
---
&nbsp;
# Scene

## Create scene objects <Badge type="tip" text="client-side" />

:::warning
As opposed to [LIVE_OBJECTS](#live-objects), scene objects are completely client-side and don't have hitboxes.
:::

todo order of execution
### Standard objects
```krunkscript
# Add a cube to the scene
obj cube = GAME.SCENE.addCube(
    "28000",        # str texture asset id
    "#fff",         # str color
    5,              # num x position
    0,              # num y position
    5,              # num z position
    10,             # num width
    10,             # num height
    10,             # num length
    {}              # obj additional data
);
```

```krunkscript
# Add a plane to the scene
obj plane = GAME.SCENE.addPlane(
    "28000",        # str texture asset id
    "#fff",         # str color
    5,              # num x position
    0,              # num y position
    5,              # num z position
    1,              # num width
    10,             # num length
    {}              # obj additional data
);
```

```krunkscript
# Add a sign to the scene
obj sign = GAME.SCENE.addSign(
    0,              # num x position
    10,             # num y position
    0,              # num z position
    10,             # num width
    10,             # num length
    "Hi :)",        # str text
    {}              # obj sign object todo
);
```

```krunkscript
# Add a sphere to the scene
obj sphere = GAME.SCENE.addSphere(
    "28000",        # str texture asset id
    "#fff",         # str color
    5,              # num x position
    0,              # num y position
    5,              # num z position
    8,              # num width
    4,              # num height
    10,             # num length
    {}              # obj sphere object todo
);
```

```krunkscript
# Add a sprite to the scene
obj sprite = GAME.SCENE.addSprite(
    "28000",        # str texture asset id
    "#fff",         # str color
    5,              # num x position
    0,              # num y position
    5,              # num z position
    8,              # num width
    4,              # num height
    10,             # num length
    {}              # obj sprite object todo
);
```
### 3D models and Polygons
:::warning
- Only .obj and .gltf are supported for 3d models.
- You can not change opacity of 3d models in krunker after you have spawned them.
- Texture changing does not work on 3d models.
- In update 5.4.2 most encodings were removed from krunker. Keep this in mind when using textureEncoding.
- `alwaysRender` does not work.
- Textures do not work on addCustom verts.
:::

```krunkscript
# Add an asset to the scene
obj asset = GAME.SCENE.addAsset(
    "236t",         # str 3d asset id
    5,              # num x position
    0,              # num y position
    5,              # num z position
    1,              # num scale
    "#fff",         # str color
    {},             # obj asset object
    onObjectLoad    # void action() callback when asset loads. (function name is function used for callback)
);
```

```krunkscript
# Add a polygon to the scene
obj polygon = GAME.SCENE.addCustom(
    "236t",         # str asset texture id
    "#fff",         # str color
    num[0, 0, 3],   # Float32Array of Vertices
    5,              # num x position
    0,              # num y position
    5,              # num z position
    6,              # num width
    2,              # num height
    10,             # num length
    {}              # obj custom data
);
```

### Lights
```krunkscript
# Add a directional light to scene
obj sun = GAME.SCENE.addDirLight(
    "#fff",         # str color
    0,              # num x position
    0,              # num y position
    0,              # num z position
    10,             # num x target position
    10,             # num y target position
    10,             # num z target position
    1,              # num intensity (0-1)
    false           # bool cast shadows
);
```

```krunkscript
# Add a directional light to scene
obj fluorescent = GAME.SCENE.addLightBar(
    "#fff",         # str color
    0,              # num x direction
    0,              # num y direction
    0,              # num z direction
    10,             # num width
    10,             # num length
    {}              # obj light object #todo
);
```

```krunkscript
# Add a light cone to scene
obj lamp = GAME.SCENE.addLightCone(
    "#fff",         # str color
    0,              # num x direction
    0,              # num y direction
    0,              # num z direction
    10,             # num width
    10,             # num length
    10,             # num height
    {}              # obj light object #todo
);
```

```krunkscript
# Add a pointlight to scene
obj campfire = GAME.SCENE.addPointLight(
    "#fff",         # str color
    0,              # num x position
    0,              # num y position
    0,              # num z position
    10,             # num distance
    10,             # num decay
    1,              # num intensity (0-1)
    false           # bool cast shadows
);
```

```krunkscript
# Add a spotlight to scene
obj spotlight = GAME.SCENE.addSpotLight(
    "#fff",         # str color
    0,              # num x position
    0,              # num y position
    0,              # num z position
    10,             # num x target position
    10,             # num y target position
    10,             # num z target position
    10,             # num distance
    10,             # num decay
    1,              # num intensity (0-1)
    45,             # num circumference
    1,              # num penumbra (shadow blurryness)
    false           # bool cast shadows
);
```

```krunkscript
# Add a rectangular light
obj discoFloor = GAME.SCENE.addRectLight(
    "#fff",         # str color
    0,              # num x position
    0,              # num y position
    0,              # num z position
    10,             # num width
    10,             # num length
    1               # num intensity (0-1)
);
```

## Clear all scene items <Badge type="tip" text="client-side" />
:::warning
Also deletes the sun from the scene.
:::
```krunkscript
# Clear all scene objects
GAME.SCENE.clear();
```

## Get 2D screen position of 3d world position <Badge type="tip" text="client-side" />
```krunkscript
# Get 2d screen position of 3d point
obj position = GAME.SCENE.posToScreen(x, y, z);

num x = position.x;
num y = position.y;
```

## Ambient <Badge type="tip" text="client-side" />
::: tip
You can get the current envZone from [GAME.CAMERA](#misc)
:::

todo skydome object
```krunkscript
# Set sky color (single color)
GAME.SCENE.setSkyColor(
    "#fff"      # str color
);
```

```krunkscript
# Set skydome settings (gradient colors)
GAME.SCENE.setSkyDome(
    "#fff",     # str hex color 1
    "#fff",     # str hex color 2
    "#fff",     # str hex color 3
    {}          # obj additional data
);
```

```krunkscript
# Fight god, take control of the sun
GAME.SCENE.setSkyLight(
    "#fff",     # str color
    2,          # num light intensity (0 - 3)
    20,         # num sun angle x (0 - 360)
    20,         # num sun angle y (0 - 360)
    100         # num light distance (10 - 15000)
);
```

```krunkscript
# Adjust the ingame ambient light
GAME.SCENE.setAmbientLight(
    "#fff",     # str color
    2           # num light intensity (0 - 3)
);
```

```krunkscript
# Remove skydome
GAME.SCENE.removeSkyDome();
```

```krunkscript
# Change fog settings
GAME.SCENE.setFog(
    "#fff",     # str color
    100         # num distance
);
```

TODO
.getBone

## Useless transform methods <Badge type="tip" text="client-side" />
Dont use this you're weird.

todo scene object
:::tip
Use the .position / .rotation / .scale properties on the base scene object
:::

```krunkscript
# Move an object
GAME.SCENE.movObj(
    cube,   # obj scene object
    0,      # num x position
    0,      # num y position
    0       # num z position
);
```

```krunkscript
# Rotate an object
GAME.SCENE.rotObj(
    cube,   # obj scene object
    0,      # num x euler rotation
    0,      # num y euler rotation
    0       # num z euler rotation
);
```

```krunkscript
# Scale an object
GAME.SCENE.scaleObj(
    cube,   # obj scene object
    0,      # num width
    0,      # num height
    0       # num length
);
```
---
&nbsp;
# Settings

## Changing settings <Badge type="tip" text="client-side" />
```krunkscript
# Set a setting for a player
GAME.SETTINGS.set(
    "defaultSkins",     # str setting name
    true                # bool setting value
);
```

```krunkscript
# Get the value of a setting
GAME.SETTINGS.get(
    "defaultSkins"      # str setting name
);
```

## Listing all setting names <Badge type="tip" text="client-side" />
:::tip
You can also get all existing settings from [this site](https://krunker.io/docs/settings.txt)
:::

```krunkscript
# Get all names of settings
GAME.SETTINGS.list();
```
---
&nbsp;
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
---
&nbsp;
# Storage
`STORAGE` permanently stores custom values for each player on a database associated with your map. Unlike `GAME.COOKIES` which stores the data locally on a players pc and can be modifed by them, `GAME.STORAGE` is entirely serverside. It should therefore be used for data which you do not players to be able to tamper with.

:::danger
- This feature <u>only</u> works on published maps.
:::

:::warning
- You can only store and access data from players who are active in game.
- Use `player.accountName` (server-side only) for storing to the "real" account.
:::

:::tip
- Data can be individually deleted on the maps' [social](https://krunker.io/social.html) page. (Data tab)
- Arrays and objects can not be used in STORAGE, as values get turned into strings (just like COOKIES).
- Due to rate limit restrictions, its recommended to temporarily load player data on the serverside upon `onPlayerSpawn`, modify the received object during a players lifetime, then load it back into `STORAGE` when `onPlayerLeave` or `onServerClosed` is called.
:::

## Setting/updating storage <Badge type="tip" text="server-side" />
:::warning
- Set, update, transact every 10 seconds per connection/player.
- 30 Keys per map, keys length is 20 characters. (Object properties are treated as unique database keys).
:::

:::tip
#todo player storage public
:::
```krunkscript
# Set a player value to a specific value
GAME.STORAGE.set(
    "SwatDoge",                     # str accountName
    {kills: 300, nick: "Swat"},     # obj data
    true,                           # bool private
    callback                        # action(obj data, bool success, str accountName) callback function
);
```
```krunkscript
# Subtract/Add a value
GAME.STORAGE.update(
    "SwatDoge",                     # str accountName
    {kills: -5},                    # obj data
    true,                           # bool private
    callback                        # action(obj data, bool success, str accountName) callback function
);
```
```krunkscript
# Subtract/Add a value, but never go below 0
GAME.STORAGE.transact(
    "SwatDoge",                     # str accountName
    {kills: -5},                    # obj data
    true,                           # bool private
    callback                        # action(obj data, bool success, str accountName) callback function
);
```

## (Cross-)Loading storage <Badge type="tip" text="server-side" />
:::danger
- Loading from an empty database will result in an error message "No data" and not call the callback. Make sure to update every value to an empty base value using `GAME.STORAGE.update`.
:::

:::tip
- You can load every 5 seconds per connection/player.
:::

```krunkscript
# Load data you stored on your map
GAME.STORAGE.load(
    "SwatDoge",     # str accountName
    "",             # str name of game with public database. (leave empty)
    callback        # action(obj data, bool success, str accountName) callback function
);
```

```krunkscript
# Load "public" data you stored on another map
GAME.STORAGE.load(
    "SwatDoge",     # str accountName
    "lava_run",     # str name of game with public database.
    callback        # action(obj data, bool success, str accountName) callback function
);
```

## Delete storage <Badge type="tip" text="server-side" />
# todo
To delete data storage values you can create a `delete all` key and load it into the Storage.
```krunkscript
# Set a player value to a specific value
GAME.STORAGE.set(
    "SwatDoge",                     # str accountName
    {kills: 300, nick: "Swat"},     # obj data
    true,                           # bool private (false: private, true: public) Public databases can be accessed by others
    callback                        # action(obj data, bool success, str accountName) callback function
);
```
---
&nbsp;
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
---
&nbsp;
# Trigger
:::tip
There is no rate-limiting on this feature.
:::

## Execute triggers <Badge type="tip" text="server-side" /> <Badge type="danger" text="broken"/>
TODO allegidly fixed
:::danger
removed due to security concerns
:::
```krunkscript
# Call a trigger
GAME.TRIGGERS.execute(
    id,         # num trigger interface id
    player.id   # str player id
);
```

## Get trigger by interface ID <Badge type="tip" text="server-side" />
TODO, looks like no workey
```krunkscript
obj[] triggers = GAME.TRIGGERS.getByInterface(id);
```

## List triggers <Badge type="tip" text="server-side" /> <Badge type="tip" text="client-side" />
```krunkscript
# Get a list of minimal server scene objects
obj[] triggers = GAME.TRIGGERS.list();
```
---
&nbsp;
# UI
UI Allows you to create DIV Elements through the browsers' DOM api. You can use this together with CSS for more freedom in UI's.

## Div element
### Creating divs <Badge type="tip" text="client-side" />
```krunkscript
# Create a div
str divId = GAME.UI.addDIV(
    "minimap",                       # str id of div
    true,                            # bool is shown (display: none)
    "width: 10px; height: 10px",     # str CSS inline style as string
	"gameUI"                         # str parent div id (default: "customGUIHolder")
);
```

### Modifying divs <Badge type="tip" text="client-side" />
```krunkscript
# Update div style property
GAME.UI.updateDIV(
    "minimap",                      # str id of div
    "background-color",             # str property
    "red"                           # str value
);
```
```krunkscript
# Update text in div
GAME.UI.updateDIVText(
    "minimap",                      # str id of div
    "hello world"                   # str text
);
```
```krunkscript
# Move element to a different parent
GAME.UI.moveDIV(
    "sott_test",            # Current child id
    "gameUI",               # New parent to move to
    "sott_test_2"           # New child id
);
```

### Reading divs <Badge type="tip" text="client-side" /> 
```krunkscript
# Get property of div, returns str css value
GAME.UI.getProp(
    "minimap"           # str id of div
    "background-color"  # property to get value of
);
```

### Removing divs <Badge type="tip" text="client-side" />
:::tip
You can remove child divs by simply setting the text of the parent element to an empty string.
:::

```krunkscript
# Remove the div
GAME.UI.removeDIV(
    "minimap"                       # str id of div
);
```

## Image element <Badge type="tip" text="client-side" />
```krunkscript
# Add image element
str id = GAME.UI.addImage(
    "39190",                        # str image asset id
    "image",                        # str element id
    true,                           # bool is shown (display: none)
    "width: 10px; height: 10px"     # str instline CSS style as string
    "gameUI"                        # str parent div id (default: "customGUIHolder")
);
```

## Global methods <Badge type="tip" text="client-side" />
```krunkscript
# Get screen size
obj size = GAME.UI.getSize();

num x = (num) size.x;
num y = (num) size.y;
```

```krunkscript
# Hide crosshair
GAME.UI.hideCrosshair();
```
```krunkscript
# Hide DOM UI
GAME.UI.hideDefault();
```
---
&nbsp;
# URLs
This feature never worked.

## Opening urls <Badge type="danger" text="broken" />
```krunkscript
GAME.URLS.openDiscord(
    "YBnq2um"                                                           # str discord invite url
);
```
```krunkscript
GAME.URLS.openOpensea(
    "https://opensea.io/SwatDoge"                                       # str openSea wallet url
);
```
```krunkscript
GAME.URLS.openTwitter(
    "https://twitter.com/swatdoge"                                      # str twitter url
);
```
```krunkscript
GAME.URLS.openYoutube(
    "https://www.youtube.com/channel/UCkQM8ePPA8me73585aLJvmw"          # str youtube url
);
```
---
&nbsp;
# changeGame

```krunkscript
# Change the match to be a different map
GAME.changeGame(
    "DQ_Battleboats"        # str map name
    {                       # obj change game object
        host: true,
        private: true
    }
);
```
---
&nbsp;
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
---
&nbsp;
# setTitle

```krunkscript
# Set the website name in the browser tab
GAME.setTitle(
    "title"         #str title
);
```