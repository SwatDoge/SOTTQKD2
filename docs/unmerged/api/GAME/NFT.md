# NFT
For a short time before aquisition, Krunker under Yendis entertainment implemented [NFT's](https://opensea.io/Krunker/created) into krunker. The methods were never properly implemented for it.

:::info Developer statement
"Added Basic NFT functions: hasWallet, ownedAssets (check docs)" ~ Yendis, patchnotes. It has never been added to the docs.
:::

## Creating a live object <Badge type="danger" text="broken"/>

```krunkscript
# Check if user has a linked crypto wallet.
bool hasWallet = GAME.NFT.hasWallet(
    player.id    # str player id
);
```

```krunkscript
# Returns unknown list type of owned NFT objects.
GAME.NFT.ownedAssets(
    player.id,    # str player id 
    collection,   # void unknown
    callback      # function unimplemented
);
```