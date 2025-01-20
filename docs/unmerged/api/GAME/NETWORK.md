# Network
Networking allows you to send values between the server and the client.

:::tip
Receiving data is handled with the `onNetworkMessage` event.
:::

:::tip
For constantly syncing between values on the client, like custom movement, check out registerSyncValues #TODO
:::

:::warning
**Networking can introduce significant performance problems at scale.**

- Data: 2000 bytes per message.
- Message id string: 10 Characters.
- Broadcast (server to all): 10 msg per second.
- Send (server to client): 20 msg per second per user.
- Send (client to server): 40 msg per second.
:::

## Sending data <Badge type="tip" text="client-side"/> <Badge type="tip" text="server-side"/>
::: code-group
```krunkscript [Client]
# Sending data from the client to the server
bool isRateLimited = GAME.NETWORK.send(
    "test",     # str message id
    {a: 1}      # obj data
);
```

```krunkscript [Server]
# Sending data from the server to the specified user
bool isRateLimited = GAME.NETWORK.send(
    "test",     # str message id
    {a: 1},     # obj data
    player.id   # str player id
);
```
:::
## Broadcasting data <Badge type="tip" text="server-side"/>
```krunkscript
# Send data to all clients
bool isRateLimited = GAME.NETWORK.broadcast(
    "test",     # str message name
    {a: 1}      # obj data
);
```

## Detect rate limiting <Badge type="tip" text="client-side"/> <Badge type="tip" text="server-side"/>
When sending too many messages, krunker will rate limit you. This means that requests will not be send for a period of time.

```krunkscript
# Will return a "success" boolean, if false you are being rate limited
if (GAME.NETWORK.broadcast("msg", {txt: "Hello there"}) {
    # message was sent
} 
else {
    # message rate limited
}
```