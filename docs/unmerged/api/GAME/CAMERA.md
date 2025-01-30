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
num activeZone = (num) GAME.CAMERA.envZone; # index or -1 if default
```