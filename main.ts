scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    animation.runImageAnimation(
    beak,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . f . 
        . . . . . . . . . . d d f f . . 
        . . . . . . . . . . d d 2 f . . 
        . 2 . 2 . . . . . . d d d f . . 
        . . 2 . 2 . . . . . d d d f . . 
        . . 2 . . . d . d . d d 2 f . . 
        . . . 2 2 . . d . . d d f f . . 
        . 2 . . . . . d . . . . . . f . 
        . . . . f f f d f f . . . . . . 
        . . . . f f f d f f f . . . . . 
        . . . . f f f d f f f . . . . . 
        . . . . e e e e f f f . . . . . 
        . . . . f f f e e e e . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . f f f f f . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    energy = 2
    sword.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (energy > 1) {
        pause(500)
        beak.destroy()
    } else {
        game.over(false)
    }
})
let beak: Sprite = null
let mySprite: Sprite = null
let sword: Sprite = null
let energy = 0
energy = 0
sword = sprites.create(img`
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
mySprite = sprites.create(img`
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
controller.moveSprite(mySprite, 100, 100)
scene.setBackgroundColor(1)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
tiles.placeOnRandomTile(sword, sprites.dungeon.doorLockedWest)
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
        beak.follow(mySprite)
    }
})
