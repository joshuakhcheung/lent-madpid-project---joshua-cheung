// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003000000000000000100000000000000010101000101000001000101010100010000010005010000000000000001000100010100010100010001010100010001000000000100000100010000000100010101010001010101010100010101000100010000000100000000000100010101000101010001000101010101000000000000000000010001000100000001000101010104010100010001010001010001000000000000000100000000000100010100010101010101000101010101000101000000000000000001000002010001010101010101000100010001010100010000000000000001000100000000000101010101010101010101010101010101`, img`
. . . . . . . . 2 . . . . . . . 
2 2 2 . 2 2 . . 2 . 2 2 2 2 . 2 
. . 2 . . 2 . . . . . . . 2 . 2 
. 2 2 . 2 2 . 2 . 2 2 2 . 2 . 2 
. . . . 2 . . 2 . 2 . . . 2 . 2 
2 2 2 . 2 2 2 2 2 2 . 2 2 2 . 2 
. 2 . . . 2 . . . . . 2 . 2 2 2 
. 2 2 2 . 2 . 2 2 2 2 2 . . . . 
. . . . . 2 . 2 . 2 . . . 2 . 2 
2 2 2 2 2 2 . 2 . 2 2 . 2 2 . 2 
. . . . . . . 2 . . . . . 2 . 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
2 . . . . . . . . 2 . . . 2 . 2 
2 2 2 2 2 2 . 2 . 2 . 2 2 2 . 2 
. . . . . . . 2 . 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.stairWest,sprites.dungeon.stairEast,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.doorLockedWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
