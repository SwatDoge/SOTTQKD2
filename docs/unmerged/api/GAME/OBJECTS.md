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