# Trigger
:::tip
There is no rate-limiting on this feature.
:::
## Execute triggers <Badge type="tip" text="server-side" />
TODO allegidly fixed
```krunkscript
# Call a trigger
GAME.TRIGGERS.execute(
    id,         # num trigger interface id
    # todo trigger object
);
```

## Get trigger by interface ID <Badge type="tip" text="server-side" />
```krunkscript
obj[] triggers = GAME.TRIGGERS.getByInterface(id);
```

## List triggers <Badge type="tip" text="server-side" /> <Badge type="tip" text="client-side" />

```krunkscript
# Get a list of incomplete server scene objects
obj[] triggers = GAME.TRIGGERS.list();
```