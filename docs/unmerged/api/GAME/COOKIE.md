# Cookie
Cookies allow you to permanently store variables on a users browser. These variables can easily be edited by the user and should not be used for sensitive information. They're usually used for user preferences.

KrunkScript "Cookies" rely on the browsers' [localStorage api](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), and have nothing to do with real cookies.

:::warning
Cookies can only store strings as values
:::

## Accessing cookies <Badge type="tip" text="client-side"/>
```krunkscript
# Save a value to a cookie
GAME.COOKIES.save(
    "test",   # str name
    "100"     # str data
);

# Load a cookies' value by their name
str value = GAME.COOKIES.load(
    "test"   # str name
);

# Delete a cookie
GAME.COOKIES.remove(
    "test"   # str name
);

# Check if cookie exists
bool hasCookie = GAME.COOKIES.has(
    "test"    # str name
);
```