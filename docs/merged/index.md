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
A feature rushed in by Yendis entertainment, never worked.
## Video advertisement <Badge type="danger" text="broken"/>
:::tip
You would've been able to play a video ad every 5 minutes.
:::

```krunkscript
# Play a video ad
GAME.ADS.playVideo()
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
Play animations on any imported 3d model.

## Playing and stopping animations <Badge type="tip" text="client-side"/>
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
obj camera = GAME.CAMERA.getObj();

# Shake the camera
GAME.CAMERA.shake(
    0.9 # num (0 - 1)
);

# Change the field of view of the camera
GAME.CAMERA.fov(
    90 # num (10-170)
);

# Get the ID of the envZone the player is standing in.
num activeZone = (num) GAME.CAMERA.envZone; # index or -1 if default
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
obj[] classes = GAME.CONFIG.getClasses();   # class object

# Get the weapon configs
obj[] weapons = GAME.CONFIG.getWeapons();   # weapon object list

# Get configs of current match
obj match = GAME.CONFIG.getMatch();         # match object

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

# Load a cookies' value by their name
str value = GAME.COOKIES.load(
    "test"   # str name
);

# Delete a cookie
GAME.COOKIES.remove(
    "test"   # str name
);

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
    {}      # TODO, incomplete scene object
);
```

---
&nbsp;
# Mods
Mods allow you to replace the assets of the base game.
:::tip Important resources for mods
- [mod.zip](https://krunker.io/modzip)
- [settings.txt](https://krunker.io/docs/settings.txt)
:::

## Creating a live object <Badge type="tip" text="server-side"/>
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

# Reset/unload mods
GAME.MODS.reset();
```
---
&nbsp;
# Network
Networking allows you to send values between the server and the client.

:::tip
Receiving data is handled with the `onNetworkMessage` event.
:::

:::tip
For constantly syncing between values on the client, like custom movement, check out registerSyncValues #TODO
:::

:::warning
**Networking can introduce significant performance problems at scale.**

- Data: 2000 bytes per message.
- Message id string: 10 Characters.
- Broadcast (server to all): 10 msg per second.
- Send (server to client): 20 msg per second per user.
- Send (client to server): 40 msg per second.
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

## Detect rate limiting <Badge type="tip" text="client-side"/> <Badge type="tip" text="server-side"/>
When sending too many messages, krunker will rate limit you. This means that requests will not be send for a period of time.

```krunkscript
# Will return a "success" boolean, if false you are being rate limited
if (GAME.NETWORK.broadcast("msg", {txt: "Hello there"}) {
    # message was sent
} 
else {
    # message rate limited
}
```
---
&nbsp;
# NFT
For a short time before aquisition, Krunker under Yendis entertainment implemented [NFT's](https://opensea.io/Krunker/created) into krunker. The methods were never properly implemented for it.

:::info Developer statement
"Added Basic NFT functions: hasWallet, ownedAssets (check docs)" ~ Yendis, patchnotes. It has never been added to the docs.
:::

## Creating a live object <Badge type="danger" text="broken"/>

```krunkscript
# Check if user has a linked crypto wallet.
bool hasWallet = GAME.NFT.hasWallet(
    player.id    # str player id
);

# Returns unknown list type of owned NFT objects.
GAME.NFT.ownedAssets(
    player.id,    # str player id 
    collection,   # void unknown
    callback      # function unimplemented
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

## Getting scene objects
```
# Returns an array of incomplete cube objects in a scene
obj[] objects = GAME.SCENE.list();

# Returns an array of incomplete pathnode objects in a scene
obj[] nodes = GAME.OBJECTS.getPathNodes();
```
---
&nbsp;
# Overlay
As opposed to "UI", OVERLAY uses canvas rendering to render UI. It allows you to render shapes and text on top of a 2D overlay.

:::tip
- The methods here are closely based on [the original browser canvas methods](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
- Canvas shapes start at the top left of your screen, setting position will offset it to the bottom right.
- You can use a custom font-family from a mod for the canvas, as shown in the examples below.
- To convert 3D world pos to 2d screen pos, check this method in [GAME.SCENE](#get-2d-screen-position-of-3d-world-position)
:::

:::warning
- OVERLAY only renders in the `render` hook, which runs after the `update` hook. See [order of execution] #TODO.
- Keep in mind that default browser font families may differ for other browsers.
:::

## Managing the overlay <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Move the cursor, everything gets rendered relative to this
GAME.OVERLAY.moveTo(
    50,     # num x position
    140     # num y position
);

# Get dimensions of overlay obj{x, y} 
obj size = GAME.OVERLAY.getSize();

# Move entire overlay 
GAME.OVERLAY.offset(
    10,     # num x offset
    0       # num y offset
);

# Scale overlay
GAME.OVERLAY.scale(
    0.1     #num scale
);

# Set opacity of canvas strokes
GAME.OVERLAY.globalAlpha(
    1       # num (0-1) opacity
);
```

## Overlay state <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Clear overlay
GAME.OVERLAY.clear();

# Save a drawing state
GAME.OVERLAY.save();

# Rollback a drawing state
GAME.OVERLAY.restore();
```

## Overlay transform <Badge type="tip" text="client-side" vertical="middle" />
```krunkscript
# Move path relative to itself
GAME.OVERLAY.translate(
    20,     # num x direction
    20      # num y direction
);

# Transform allows you to translate an object thru a matrix
GAME.OVERLAY.transform(
    1,      # horizontal scaling
    0,      # horizontal skewing
    1,      # vertical skewing
    1,      # vertical scaling
    0,      # horizontal moving
    0       # vertical moving
);

# Resets the current transform and reapplies using transform()
GAME.OVERLAY.setTransform(
    1,      # horizontal scaling
    0,      # horizontal skewing
    1,      # vertical skewing
    1,      # vertical scaling
    0,      # horizontal moving
    0       # vertical moving
);
```

## Basic drawing <Badge type="tip" text="client-side" vertical="middle" />
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

## Circle
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

## Freeform strokes and paths <Badge type="tip" text="client-side" vertical="middle" />
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

# Fill a path (before stroke)
GAME.OVERLAY.fill();

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

# Set corners where two lines meet
GAME.OVERLAY.lineJoin(
    "round"  #str type ("round", "bevel", "miter")
);

# Set line width
GAME.OVERLAY.lineWidth(
    20       # num pixel width
);

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
Seemingly rushed feature, unimplemented.

## Spending & giving KR <Badge type="danger" text="broken"/>
```krunkscript
# Charging KR from map
GAME.PAYMENTS.charge();             # unknown

GAME.PAYMENTS.giveKR(
    player,                         # player object
    val                             # int kr amount
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

# Check if user is on browser
bool isBrowser = GAME.PLATFORM.isBrowser();

# Check if user is using a custom client
bool isClient = GAME.PLATFORM.isClient();
```

---
&nbsp;
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
GAME.RAYCAST.from(x, y, z, xD, yD, dist)

# Cast a ray from a player
GAME.RAYCAST.fromPlayer(player, dist)
```
---
&nbsp;
# Scene

## Create scene objects <Badge type="tip" text="client-side" vertical="middle" />
As opposed to [LIVE_OBJECTS](live-objects), scene objects are completely client-side and don't have hitboxes.

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

# Add a sign to the scene
GAME.SCENE.addSign(
    0,              # num x position
    10,             # num y position
    0,              # num z position
    10,             # num width
    10,             # num length
    "Hi :)",        # str text
    {}              # sign object todo
);

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
    {}              # obj additional data
);
```
:::warning
- You can not change opacity of 3d models in krunker after you have spawned them
- Texture changing does not work on 3d models
- In update 5.4.2 most encodings were removed from krunker. Keep this in mind when using textureEncoding
- alwaysRender does not work
- Textures do not work on addCustom verts
:::
### 3D assets and Polygons
```krunkscript
# Add an asset to the scene
obj asset = GAME.SCENE.addAsset(
    "236t",         # str 3d asset id
    5,              # num x position
    0,              # num y position
    5,              # num z position
    1,              # num scale
    "#fff",         # str color
    {},             # obj additional data
    onObjectLoad    # action() callback when asset loads. (function name is function used for callback)
);

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
    {}              # obj additional data
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

position.x;  # num x position
position.y;  # num y position
```

## Ambient
::: tip
You can get the current envZone from [GAME.CAMERA](#misc)
:::

todo skydome object
```krunkscript
# Set sky color (single color)
GAME.SCENE.setSkyColor(
    "#fff"      # str color
);

# Set skydome settings (gradient colors)
GAME.SCENE.setSkyDome(
    "#fff",     # str hex color 1
    "#fff",     # str hex color 2
    "#fff",     # str hex color 3
    {}          # obj additional data
);

# Fight god, take control of the sun
GAME.SCENE.setSkyLight(
    "#fff",     # str color
    2,          # num light intensity (0 - 3)
    20,         # num sun angle x (0 - 360)
    20,         # num sun angle y (0 - 360)
    100         # num light distance (10 - 15000)
);

# Adjust the ingame ambient light
GAME.SCENE.setAmbientLight(
    "#fff",     # str color
    2           # num light intensity (0 - 3)
);

# Remove skydome
GAME.SCENE.removeSkyDome();

# Change fog settings
GAME.SCENE.setFog(
    "#fff",     # str color
    100         # num distance
);


```

## Useless transform methods
Dont use this you're weird.

todo base object
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

# Rotate an object
GAME.SCENE.rotObj(
    cube,   # obj scene object
    0,      # num x euler rotation
    0,      # num y euler rotation
    0       # num z euler rotation
);

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

## Changing settings
```krunkscript
# Set a setting for a player
GAME.SETTINGS.set(
    "defaultSkins",     # str setting name
    true               # bool setting value
);

# Get the value of a setting
GAME.SETTINGS.get(
    "defaultSkins"      # str setting name
);
```

## Listing all settings
:::tip
You can also get all existing settings from [this site](https://krunker.io/docs/settings.txt)
:::

```krunkscript
# Get all names of settings
GAME.SETTINGS.list();
```