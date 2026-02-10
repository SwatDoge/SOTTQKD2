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