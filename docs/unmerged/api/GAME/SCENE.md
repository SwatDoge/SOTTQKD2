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