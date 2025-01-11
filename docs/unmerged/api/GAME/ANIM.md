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