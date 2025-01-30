# Objects
Allows you to get information on objects in the scene.

:::tip
- For spawning objects check [GAME.SCENE](#scene).
- For deleting and modifying objects check scene object #TODO.
:::

## Getting scene objects <Badge type="tip" text="client-side" vertical="middle" /> <Badge type="tip" text="server-side" vertical="middle" />

:::code-group
```krunkscript [client]
# Get a list of incomplete client scene objects
obj[] objects = GAME.OBJECTS.list();
```

```krunkscript [server]
# Get a list of incomplete server scene objects
obj[] objects = GAME.OBJECTS.list();
```
:::

:::code-group
```krunkscript [client]
# Get a list of incomplete client scene objects
obj[] nodes = GAME.OBJECTS.getPathNodes();
```

```krunkscript [server]
# Get a list of incomplete server scene objects
obj[] nodes = GAME.OBJECTS.getPathNodes();
```
:::