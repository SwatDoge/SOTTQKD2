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

## Managing the overlay <Badge type="tip" text="client-side" vertical="middle" />
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
    0.1     #num scale
);
```

```krunkscript
# Set opacity of canvas strokes
GAME.OVERLAY.globalAlpha(
    1       # num (0-1) opacity
);
```

## Overlay state <Badge type="tip" text="client-side" vertical="middle" />
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

## Overlay transform <Badge type="tip" text="client-side" vertical="middle" />
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
    1,      # horizontal scaling
    0,      # horizontal skewing
    1,      # vertical skewing
    1,      # vertical scaling
    0,      # horizontal moving
    0       # vertical moving
);
```

```krunkscript
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
    "round"  #str type ("round", "bevel", "miter")
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