# NFT
For a short time before aquisition, Krunker under Yendis entertainment implemented [NFT's](https://opensea.io/Krunker/created) into krunker. While the methods allegidly work, theres so few NFT owners left that its hard to test anything.

:::info Developer statement
"Added Basic NFT functions: hasWallet, ownedAssets (check docs)" ~ Yendis, patchnotes. It has never been added to the docs.
:::

## Creating a live object <Badge type="tip" text="server-side"/>

```krunkscript
# Check if user has a linked crypto wallet.
bool hasWallet = GAME.NFT.hasWallet(
    player.id    # str player id
);
```

```krunkscript
# Returns unknown list type of owned NFT objects.
obj[] ownedNFTs = GAME.NFT.ownedAssets(
    player.id,    # str player id 
    collection,   # str name of collection
    callback      # function unimplemented
);
```