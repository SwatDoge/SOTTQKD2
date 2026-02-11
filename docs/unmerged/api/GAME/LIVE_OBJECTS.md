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
