# Trigger
:::tip
There is no rate-limiting on this feature.
:::

## Execute triggers <Badge type="tip" text="server-side" /> <Badge type="danger" text="broken"/>
TODO allegidly fixed
:::danger
removed due to security concerns
:::
```krunkscript
# Call a trigger
GAME.TRIGGERS.execute(
    id,         # num trigger interface id
    player.id   # str player id
);
```

## Get trigger by interface ID <Badge type="tip" text="server-side" />
TODO, looks like no workey
```krunkscript
obj[] triggers = GAME.TRIGGERS.getByInterface(id);
```

## List triggers <Badge type="tip" text="server-side" /> <Badge type="tip" text="client-side" />
```krunkscript
# Get a list of minimal server scene objects
obj[] triggers = GAME.TRIGGERS.list();
```