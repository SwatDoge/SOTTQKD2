# Trigger
:::tip
There is no rate-limiting on this feature. (wink wink)
:::
## Execute triggers <Badge type="tip" text="server" vertical="middle" />
```krunkscript
# Call a trigger
GAME.TRIGGER.execute(
    id,         # num trigger interface id
    todo
);
```

## List triggers <Badge type="tip" text="server" vertical="middle" /> <Badge type="tip" text="client" vertical="middle" />
:::code-group
```krunkscript [client]
# Get a list of incomplete server scene objects
obj[] triggers = GAME.TRIGGERS.list();
```

```krunkscript [server]
# Get a list of incomplete client scene objects
obj[] triggers = GAME.TRIGGERS.list();
```
:::