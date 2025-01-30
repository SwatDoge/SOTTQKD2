# Anim
Play animations on any imported 3d model.

## Playing and stopping animations <Badge type="tip" text="client-side"/>
:::tip
Scene objects, players and AI have access to the `playAnim` and `stopAnim` method, which is a recommended shorthand for the functions                    below.
:::

:::warning
Animations only work with GLTF.
:::

```krunkscript
# Play animation
GAME.ANIM.playClip(
    object,     # Scene object, player object or AI object
    "Jump",     # Animation name
    0           # x time the animation repeats (0 = infinite)
);
```

```krunkscript
# Stop animation
GAME.ANIM.stopClip(
    object,     # Scene object, player object or AI object
    "Jump"      # Animation name
);
```