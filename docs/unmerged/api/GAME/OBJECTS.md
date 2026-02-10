# Objects
Allows you to get information on objects in the scene.

:::tip
- For spawning objects check [GAME.SCENE](#scene).
- For deleting and modifying objects check scene object #TODO.
:::

## Getting scene objects <Badge type="tip" text="client-side" /> <Badge type="tip" text="server-side" />

```krunkscript
# Get a list of incomplete client scene objects
obj[] objects = GAME.OBJECTS.list();
```

```krunkscript
# Get a list of incomplete client scene objects
obj[] nodes = GAME.OBJECTS.getPathNodes();
```

## Get object by interface ID <Badge type="tip" text="server-side" />
#todo, shit no workey?
```krunkscript
obj[] objects = GAME.OBJECTS.getByInterface(id);
```