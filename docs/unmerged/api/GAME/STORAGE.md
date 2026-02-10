# Storage
`STORAGE` permanently stores custom values for each player on a database associated with your map. Unlike `GAME.COOKIES` which stores the data locally on a players pc and can be modifed by them, `GAME.STORAGE` is entirely serverside. It should therefore be used for data which you do not players to be able to tamper with.

:::danger
- This feature <u>only</u> works on published maps.
:::

:::warning
- You can only store and access data from players who are active in game.
- Use `player.accountName` (server-side only) for storing to the "real" account.
:::

:::tip
- Data can be individually deleted on the maps' [social](https://krunker.io/social.html) page. (Data tab)
- Arrays and objects can not be used in STORAGE, as values get turned into strings (just like COOKIES).
- Due to rate limit restrictions, its recommended to temporarily load player data on the serverside upon `onPlayerSpawn`, modify the received object during a players lifetime, then load it back into `STORAGE` when `onPlayerLeave` or `onServerClosed` is called.
:::

## Setting/updating storage <Badge type="tip" text="server-side" />
:::warning
- Set, update, transact every 10 seconds per connection/player.
- 30 Keys per map, keys length is 20 characters. (Object properties are treated as unique database keys).
:::

:::tip
#todo player storage public
:::
```krunkscript
# Set a player value to a specific value
GAME.STORAGE.set(
    "SwatDoge",                     # str accountName
    {kills: 300, nick: "Swat"},     # obj data
    true,                           # bool private
    callback                        # action(obj data, bool success, str accountName) callback function
);
```
```krunkscript
# Subtract/Add a value
GAME.STORAGE.update(
    "SwatDoge",                     # str accountName
    {kills: -5},                    # obj data
    true,                           # bool private
    callback                        # action(obj data, bool success, str accountName) callback function
);
```
```krunkscript
# Subtract/Add a value, but never go below 0
GAME.STORAGE.transact(
    "SwatDoge",                     # str accountName
    {kills: -5},                    # obj data
    true,                           # bool private
    callback                        # action(obj data, bool success, str accountName) callback function
);
```

## (Cross-)Loading storage <Badge type="tip" text="server-side" />
:::danger
- Loading from an empty database will result in an error message "No data" and not call the callback. Make sure to update every value to an empty base value using `GAME.STORAGE.update`.
:::

:::tip
- You can load every 5 seconds per connection/player.
:::

```krunkscript
# Load data you stored on your map
GAME.STORAGE.load(
    "SwatDoge",     # str accountName
    "",             # str name of game with public database. (leave empty)
    callback        # action(obj data, bool success, str accountName) callback function
);
```

```krunkscript
# Load "public" data you stored on another map
GAME.STORAGE.load(
    "SwatDoge",     # str accountName
    "lava_run",     # str name of game with public database.
    callback        # action(obj data, bool success, str accountName) callback function
);
```

## Delete storage <Badge type="tip" text="server-side" />
# todo
To delete data storage values you can create a `delete all` key and load it into the Storage.
```krunkscript
# Set a player value to a specific value
GAME.STORAGE.set(
    "SwatDoge",                     # str accountName
    {kills: 300, nick: "Swat"},     # obj data
    true,                           # bool private (false: private, true: public) Public databases can be accessed by others
    callback                        # action(obj data, bool success, str accountName) callback function
);
```