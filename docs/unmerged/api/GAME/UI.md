# UI
UI Allows you to create DIV Elements through the browsers' DOM api. You can use this together with CSS for more freedom in UI's.

## Div element
### Creating divs <Badge type="tip" text="client" vertical="middle" />
```krunkscript
# Create a div
str divId = GAME.UI.addDIV(
    "minimap",                       # str id of div
    true,                            # bool is shown (display: none)
    "width: 10px; height: 10px",     # str CSS inline style as string
	"gameUI"                         # str parent div id (default: "customGUIHolder")
);
```

### Modifying divs <Badge type="tip" text="client" vertical="middle" />
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

### Reading divs <Badge type="tip" text="client" vertical="middle" /> 
```krunkscript
# Get property of div, returns str css value
GAME.UI.getProp(
    "minimap"           # str id of div
    "background-color"  # property to get value of
);
```

### Removing divs <Badge type="tip" text="client" vertical="middle" />
:::tip
You can remove child divs by simply setting the text of the parent element to an empty string.
:::

```krunkscript
# Remove the div
GAME.UI.removeDIV(
    "minimap"                       # str id of div
);
```

## Image element <Badge type="tip" text="client" vertical="middle" />
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

## Global methods <Badge type="tip" text="client" vertical="middle" />

```krunkscript
# Get screen size
obj size = GAME.UI.getSize();

num x = size.x;
num y = size.y;
```

```krunkscript
# Hide crosshair
GAME.UI.hideCrosshair();
```
```krunkscript
# Hide DOM UI
GAME.UI.hideDefault();
```