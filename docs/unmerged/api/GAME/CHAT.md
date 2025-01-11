# Chat
## Sending chat messages <Badge type="tip" text="server-side"/>
:::tip
You can send or broadcast a chat message 2 times a second.
:::

```krunkscript
# Send message to specific player
GAME.CHAT.send(
    player.id,      # str player id
    "hello world",  # str message
    "#FFF"          # str color
);

# Broadcast message to all players
GAME.CHAT.broadcast(
    "hello world",  # str message
    "#FFF"          # str color
);
```