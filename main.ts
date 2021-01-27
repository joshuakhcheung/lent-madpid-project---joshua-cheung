scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    energy = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let beak: Sprite = null
let energy = 0
energy = 0
let sword = sprites.create(img`
    . 6 6 . . . . . . . . . . . . . 
    . 6 9 6 . . . . . . . . . . . . 
    . . 6 9 6 . . . . . . . . . . . 
    . . . 6 9 6 . . . . . . . . . . 
    . . . . 6 9 6 . . . . . . . . . 
    . . . . . 6 9 6 . . . . . . . . 
    . . . . . . 6 9 6 . . . f . . . 
    . . . . . . . 6 9 6 . f e f . . 
    . . . . . . . . 6 9 8 e f . . . 
    . . . . . . . . . 8 e d . . . . 
    . . . . . . . . f e d f . . . . 
    . . . . . . . f e f . . f . . . 
    . . . . . . . . f . . . . f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let time = 3
scene.setBackgroundColor(1)
let mySprite = sprites.create(img`
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . 5 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 . . . . . 
    . . . 5 5 6 5 5 6 5 . . . . . . 
    . . . . 5 9 5 5 9 5 . . . . . . 
    . . . . d d d d d d . . . . . . 
    . . f f d d d d d d f . . . . . 
    . . f f f f d d f f f f . . . . 
    . . f f f f d 1 f f f f . . . . 
    . . f f f f 1 f f f f f . . . . 
    . . f f f f 1 f f f f f . . . . 
    . . . f f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f f f f f f f f . . . . . 
    . . f f f f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(1000, function () {
    time += -1
    if (time == 0) {
        beak = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . e . . . . . e . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f d d f . . . . . . 
            . . . . . d 2 d d 2 . . . . . . 
            . . . . . d d d d d . . . . f . 
            . . . . f d d d d d f . . f . . 
            . . . f f f d d d f f . f . . . 
            . . . f f f f 1 f f . f . . . . 
            . . . f f f f 1 f f f . . . . . 
            . . . . f f f 1 f f . . . . . . 
            . . . . f f f 1 f f . . . . . . 
            . . . . e e e e f f . . . . . . 
            . . . . f f f e e e . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f f . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(beak, sprites.dungeon.stairEast)
        if (energy == 0) {
            beak.follow(mySprite, 100)
        } else {
        	
        }
    }
})
