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