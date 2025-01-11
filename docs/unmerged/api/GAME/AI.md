# AI
## Creation and deletion <Badge type="tip" text="server-side"/>
:::warning
You are currently limited to 40 active AIs per game
:::

:::tip
Modifying AI should be done within the [render](#render) hook
:::

```krunkscript
# Create an AI/NPC
obj robot = GAME.AI.spawn(
    "11441g",   # str asset id
    "AI 1",     # str name
    0,          # num x position
    0,          # num y position
    0,          # num z position
    {}          # obj AI configuration object
);

GAME.AI.remove(
    robot.sid # AI object sid
);
```

## Getting all AI <Badge type="tip" text="server-side"/>
```krunkscript
# List AI on your map
obj[] robots = GAME.AI.list(); # AI object list
```