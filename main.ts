enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Walking_2,
    Walking_3,
    Walking_4
}
namespace SpriteKind {
    export const Food_2 = SpriteKind.create()
    export const Food_3 = SpriteKind.create()
    export const Food_4 = SpriteKind.create()
    export const Food_5 = SpriteKind.create()
    export const Gun = SpriteKind.create()
    export const Enemy_2 = SpriteKind.create()
    export const Enemy_3 = SpriteKind.create()
    export const Enemy_4 = SpriteKind.create()
}
// Killer
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy_3, function (sprite, otherSprite) {
    Drone_3.destroy(effects.ashes, 500)
    info.changeScoreBy(1)
})
// Monster
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy_2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MC,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 f f 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 f f 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 2 1 1 2 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . . 2 1 2 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 1 1 1 1 f f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 1 2 1 f 1 f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 2 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 2 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 1 2 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 f 6 6 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 f 6 6 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 f 6 6 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 f 6 6 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . e f e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 f f 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 f f 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 2 1 1 2 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . . 2 1 2 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 1 1 1 1 f f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 1 2 1 f 1 f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 2 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 2 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 1 2 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . . . f f 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 f 6 6 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 f 6 6 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 f 6 6 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 f 6 6 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . e f e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
    0,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MC,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 f 1 1 1 f f 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 f 1 1 f f 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 2 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 2 1 2 1 2 2 1 2 1 2 . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 1 f f 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f 1 1 2 1 1 2 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f f f 1 2 2 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 2 2 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f d f 2 1 1 2 f d f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f f f 1 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . e . . e . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 f 1 1 1 f f 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 f 1 1 f f 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 2 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 2 1 2 1 2 2 1 2 1 2 . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 1 f f 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f 1 1 2 1 1 2 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f f f 1 2 2 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 2 2 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f d f 2 1 1 2 f d f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f f f 1 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . e . . e . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
    0,
    true
    )
})
// Monster
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy_3, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
// Monster
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy_4, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
// Key
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food_3, function (sprite, otherSprite) {
    info.changeLifeBy(3)
    info.changeScoreBy(100)
    music.baDing.play()
    Key_3.destroy(effects.confetti, 500)
})
// Key
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(3)
    info.changeScoreBy(100)
    music.baDing.play()
    Key.destroy(effects.confetti, 500)
})
// Key
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food_4, function (sprite, otherSprite) {
    info.changeLifeBy(3)
    info.changeScoreBy(100)
    music.baDing.play()
    Key_4.destroy(effects.confetti, 500)
})
// Killer
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Drone.destroy(effects.ashes, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gun, function (sprite, otherSprite) {
    music.powerUp.play()
    info.changeScoreBy(50)
    Gun2.destroy(effects.fire, 500)
    game.showLongText("Remember you only get one shot wait tell their all in one place.", DialogLayout.Full)
})
// Gun
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() == 450) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 5 4 5 4 2 2 4 4 . . . . . 
. . . 5 5 4 4 4 4 5 2 . . . . . 
. . . 5 5 4 4 4 4 4 2 . . . . . 
. . . 5 5 5 4 4 4 2 2 . . . . . 
. . . 5 5 5 4 4 4 4 4 . . . . . 
. . . 5 5 4 4 4 4 4 2 . . . . . 
. . . 5 5 4 5 4 2 4 4 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, MC, 500, 100)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 4 2 4 4 5 5 . . . . . . 
. . . 2 5 4 5 4 2 5 . . . . . . 
. . . 4 4 4 4 5 5 5 . . . . . . 
. . . 2 2 4 5 2 4 5 . . . . . . 
. . . 4 2 4 4 5 4 5 . . . . . . 
. . . 2 2 4 5 4 5 5 . . . . . . 
. . . 2 4 2 4 5 2 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, MC, -500, 100)
    }
})
// Key
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food_2, function (sprite, otherSprite) {
    info.changeLifeBy(3)
    info.changeScoreBy(100)
    music.baDing.play()
    Key_2.destroy(effects.confetti, 500)
})
// Monster
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
// Animation
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MC,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 f 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 2 1 2 1 2 . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f 1 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 1 f 2 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f 1 2 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f d f 1 2 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f d f 2 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f d f 1 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f 1 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 f 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 f 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 f 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 f 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . e e e f e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 f 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 2 1 2 1 2 . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f 1 f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 1 1 1 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f 1 f 2 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f 1 2 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f d f 1 2 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f d f 2 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f d f 1 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f 1 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 f 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 f 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 f 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 f 6 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . e e e f e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
    0,
    true
    )
})
// Finale Key
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food_5, function (sprite, otherSprite) {
    game.showLongText(" You Win", DialogLayout.Full)
    game.reset()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    MC,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 1 f f 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f f f 1 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f f f 1 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . e . . e . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 1 f f 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f f f 1 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f f f 1 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . e . . e . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`],
    0,
    true
    )
})
// Killer
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy_2, function (sprite, otherSprite) {
    Drone_2.destroy(effects.ashes, 500)
    info.changeScoreBy(1)
})
let Finale_Key: Sprite = null
let projectile: Sprite = null
let Gun2: Sprite = null
let Key_4: Sprite = null
let Key_3: Sprite = null
let Key_2: Sprite = null
let Key: Sprite = null
let Drone_3: Sprite = null
let Drone_2: Sprite = null
let Drone: Sprite = null
let MC: Sprite = null
// Player
MC = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . 1 1 f 1 1 1 f f 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 f 1 1 f f 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 1 1 1 2 1 1 1 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . 2 1 2 1 2 2 1 2 1 2 . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 1 f f 1 f f . . . . . . . . . . . . . . 
. . . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f 1 1 2 1 1 2 1 1 f . . . . . . . . . . . . . 
. . . . . . . . . f f f 1 2 2 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 2 2 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f d f 2 1 1 2 f d f . . . . . . . . . . . . . 
. . . . . . . . . f d f 1 1 1 1 f d f . . . . . . . . . . . . . 
. . . . . . . . . f f f 1 1 1 1 f f f . . . . . . . . . . . . . 
. . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 6 6 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 6 . . 6 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . e . . e . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(MC)
storyboard.loaderBootSequence.register()
storyboard.start("The Maze")
game.showLongText("Collect 4 keys, avoid the monsters and get back to where you started.", DialogLayout.Full)
// Map
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 7 7 7 7 7 7 7 7 f 2 2 2 f 7 7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 f 
f 7 5 5 7 7 7 7 7 f 2 2 2 f 7 7 7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 f 
f 7 5 5 7 7 7 7 7 f 2 2 2 f 7 7 f f f f 7 7 7 7 7 7 7 5 5 7 7 f 
f 7 7 7 7 7 7 7 7 f 2 2 2 f 7 7 f f 2 f f f f f 7 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 f 2 2 2 f 7 7 f 2 2 2 2 2 2 f 7 7 7 7 7 7 7 f 
f f 7 7 f f f f f f 2 2 2 f 7 7 f 2 2 2 2 2 2 f f f f f f f f f 
2 f 7 7 f 2 2 2 2 2 f f f f 7 7 f f f f f f f f f f f f f f f 2 
2 f 7 7 f f f f 2 2 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 2 
2 f 7 7 7 7 7 f 2 2 f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 2 
f f 7 7 7 7 7 f f f f 7 7 f 7 7 f f f f f f f f f f f f 7 7 f 2 
f 7 7 7 7 7 7 7 7 7 7 7 7 f 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 2 
f 7 7 7 7 7 7 7 7 7 7 7 7 f 7 7 f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 2 
f f f f f 7 7 7 f f f f f f 7 7 f f f f f f 7 7 f f f f f f f f 
f f f f f 7 7 7 f 2 2 f 7 7 7 7 7 7 f 2 2 f 7 7 f 7 7 7 7 7 7 f 
f 7 7 f f 7 7 7 f 2 2 f 7 7 8 8 7 7 f f f f 7 7 f 7 7 7 7 7 7 f 
f 7 7 f f 7 7 7 f 2 2 f 7 7 8 8 7 7 f 7 7 7 7 7 f 7 7 f f f f f 
f 7 7 f f 7 7 7 f 2 2 f 7 7 7 7 7 7 f 7 7 7 7 7 f 7 7 f 7 7 f 2 
f 7 7 f f 7 7 7 f f f f f f f f f f f f f f f f f 7 7 f 7 7 f 2 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 2 2 2 2 2 2 2 f 7 7 7 7 f 7 7 f 2 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f 2 2 2 2 2 2 2 f 7 7 7 7 f 7 7 f 2 
f f f f f f f f f f f 7 7 7 f 2 2 2 2 2 2 f f 7 7 f f f 7 7 f 2 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 f f 2 2 2 2 2 f 7 7 7 7 7 7 7 7 f 2 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f 7 7 7 7 7 7 7 7 f 2 
f f f f f f f f f 7 7 f 7 7 7 f f 7 7 7 7 7 7 7 f f f f 7 7 f f 
f 7 7 7 7 7 7 7 f 7 7 f f 7 7 f f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 f f f f f 7 7 f f 7 7 f f f f f f 7 7 7 7 7 7 f 
f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 f 7 7 7 7 7 7 f 
f 7 5 5 7 7 7 7 7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 f 7 7 5 5 7 7 f 
f 7 5 5 7 7 7 7 f f f f f 7 7 7 7 7 7 f f f f 3 f 7 7 5 5 7 7 f 
f 7 7 7 7 7 7 7 f 2 2 2 f 7 7 7 7 7 7 f 2 2 2 2 f 7 7 7 7 7 7 f 
f f f f f f f f f 2 2 2 f f f f f f f f 2 2 2 2 f f f f f f f f 
`, TileScale.Sixteen)
scene.setTile(3, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
scene.cameraFollowSprite(MC)
MC.setPosition(245, 240)
info.setLife(25)
MC.setFlag(SpriteFlag.StayInScreen, true)
// Monster
Drone = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 2 2 e f f . . . . . . . . . . . . . . 
. . . . . . . . . . f f e e 2 2 e f . . . . . . . . . . . . . . 
. . . . . . . . . . f e 2 f 1 f 2 f f . . . . . . . . . . . . . 
. . . . . . . . . f 2 e 1 f f f e e f . . . . . . . . . . . . . 
. . . . . . . . . f e 2 1 f f f 2 2 f f . . . . . . . . . . . . 
. . . . . . . . f f 2 f f f f f 1 f e f . . . . . . . . . . . . 
. . . . . . . . f e e f f 1 1 1 f f e f f . . . . . . . . . . . 
. . . . . . . . f e f f f 1 6 1 f f e e f . . . . . . . . . . . 
. . . . . . . . f e f 2 f f f f f f f e f . . . . . . . . . . . 
. . . . . . . . f e e 1 f 1 f 1 f 1 e e f . . . . . . . . . . . 
. . d . . . . . f f 2 e 2 1 f 2 f 1 2 f f . b b b b b . . . . . 
. . . 2 f f d f f f f 2 e 2 e e 2 2 e f f c c c c c b b . . . . 
. . f f 2 e 2 e e f f f f f f f f f f f e f f f f c c b b . . . 
. . f e e e e e e e e e e e e e e e e e e f f f f f c c b b . . 
. . f e e e e e e e e e 2 e e e e e e e e f f f f f f c c b . . 
. f e 2 e e e d 2 e 2 2 e e e e e 2 e e e e f f f f f f c c . . 
. f e e d e e e e e e e e 2 e e e e e e e e e 2 e e e f f c . . 
. d e e e e d e f f f e e e e e e 2 e e e e e e e e e e f . . . 
. f d e e e f d f . f e e e 2 e e 2 e e f f f f e 2 e e f . . . 
f e e e e f f . . . . f e e e 2 e e e e f . . f e e e e f . . . 
f e e e e d . . . . . . f e e e e e e f . . . f e e e e f . . . 
f e d e e f d . . . . . f f f f f f f f . . . f e 2 e e f . . . 
f d e e e f f . . . . . f 2 f . . f e f . . . f e e e e f . . . 
f e 2 2 e e f f . . . . f f f . . f f f . . f f 2 2 e e f . . . 
f f e 2 e e 2 f f . . . . . . . . . . . . f f e e e 2 f f . . . 
. f f e 2 e f e f . . . . . . . . . . . . f e f 2 f e f . . . . 
. . f f f 2 f f f . . . . . . . . . . . . f f 2 e f f f . . . . 
. . . f f f f f . . . . . . . . . . . . . . f f f f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
Drone.follow(MC)
Drone.setPosition(40, 28)
Drone_2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 2 2 b f f . . . . . . . . . . . . . . 
. . . . . . . . . . f f b b 2 2 b f . . . . . . . . . . . . . . 
. . . . . . . . . . f b 2 f 1 f 2 f f . . . . . . . . . . . . . 
. . . . . . . . . f 2 b 1 f f f b b f . . . . . . . . f f f . . 
f f f . . . . . . f b 2 1 f f f 2 2 f f . . . . . . . f b f . . 
f b f . . . . . f f 2 f f f f f 1 f b f . . . . . . f f b f f . 
f b f f . . . . f b b f f 1 1 1 f f b f f . . . . f f b b b f . 
f b b f f . . . f b f f f 1 6 1 f f b b f . . . f f b b b b f . 
f f b b f f . . f b f 2 f f f f f f f b f . f f f b b b b f f . 
. f b b b f f f f b b 1 f 1 f 1 f 1 b b f f f b b b b b b f . . 
. f b b b b b f f f 2 b 2 1 f 2 f 1 2 f f f f b b b b b f . . . 
. f f b b b f f b b f 2 b 2 b b 2 2 b f b b f f b b f f f . . . 
. . f b b f f b b b b f f f f f f f f b b b b f f f f . . . . . 
. . f b b f b b b b b b b b b b b b b b b b b b f f . . . . . . 
. . . f b f b b b b f f b b b b b b f b b b 2 b f f . . . . . . 
. . . f f f b b b b f b b b b b b b f f b b 2 2 b f . . . . . . 
. . . . f 2 b b f f f b f f f f f b f f f b b b b f f . . . . . 
. . . . f b b 2 f . f b f . . . f b f . f f b 2 b b f . . . . . 
. . . . f b 2 2 f . f f f . . . f f f . . f 2 b b 2 f . . . . . 
. . . . f 2 b 2 f . f . f . . . f . f . . f f f f f f . . . . . 
. . . . f f 2 f f . . . . . . . . . . . 2 f . . 2 . 2 f . . . . 
. . . 2 2 . f . 2 f . . . . . . . . . . f . . . f . . 2 . . . . 
. . . 2 . . 2 . . 2 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy_2)
Drone_2.follow(MC)
Drone_2.setPosition(470, 400)
Drone_3 = sprites.create(img`
. . . . . . . . . . f f f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . f f c c c c c c c c c c c f f . . . . f . . . . 
. . f . . . f f c c c c c c c c c c c c c c c f f f f f . . . . 
. f f . . f c c c c c c c c c c c c f f f c c c c f . . . . . . 
. f . . f c c c c c c c f f f f f f c c c c c c c c f . . . . . 
. f . f c c c c c f f f c c c c c c c c c c c c c c c f . . . . 
. f f f c c c f f c c c c c c c c c c c c c c c c c c f . . . . 
. . f c c c f c c c c c c c c c f f c c c c c c c c c c f . f . 
. . f c c f f c c c c c c c c c c c f f f c c c c c c c f . f . 
. f c c c f c c c c c c c c c c c c c c c f c c c c c c c f f . 
. f c c f f c c c c c c c c c c c c c c c c f f c c c c c f . . 
. f c c c c c c c c c f f f f f f f f c c c c c f c c c c f . . 
. f c c c c c c c c c f f f f f f f f c c c c c f c c c c f . . 
. f c c c c c c c c c f f 6 6 6 6 f f c c c c c c f f c c f . . 
. f c c c c c c c c c f f 2 6 6 6 f f c c c c c c c f f c f . . 
. f c c c c c c c c c c c 2 2 2 2 c c c c c c c c c c f c f f . 
. f c c c c c c c c c c c c 2 2 2 c c c c c c c c c c c c f f f 
. f c c c c c c c c c c c c c c 2 c c c c c c c c c c c c f . f 
. f c c c 2 c c e c c c c c c e 2 c c c c c c c c c c c c f . . 
. f c c c c f c e c c e 2 2 c e c c c c c c e c f c c c c f . . 
. . f c c c f f e c c e c 2 c e c 2 e c 2 c e f f 2 c c f . . . 
. . f c c c f b e f f e f f f e f f e c f f e 2 f c c c f . . . 
. . . f c 2 2 f e b b e 2 b b e b f e f f b e f f c c f f f . . 
. f . f c c 2 c e f f e f f f e f b e 2 b f e c 2 c c f . f . . 
. f f . f c c c e 2 c e c c 2 e c f e f f c e c c 2 f . . f . . 
. . f f f f c c c c 2 c c c c e c c e c 2 c c c c f . . . f . . 
. . . . . . f f c c c c c c c e c c c c c c c f f f . . . . . . 
. . . . . . f f f f c c c c c c c c c c c f f . . f . . . . . . 
. . . . . . f . . . f f f f f f f f f f f . . . . f f . . . . . 
. . . . f f f . . . f . . . . . . . . . f . . . . . f f . . . . 
. . . . . . . . . . f . . . . . . . . f f . . . . . . . . . . . 
. . . . . . . . . . f f . . . . . f f f . . . . . . . . . . . . 
`, SpriteKind.Enemy_3)
Drone_3.follow(MC)
Drone_3.setPosition(150, 400)
// Key
Key = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 6 f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 6 6 6 6 f f . . . . . . . . . . . . . . 
. . . . . . . . . f f 6 6 f f 6 6 f . . . . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 f f 6 6 f f . . . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . . . f f f f 8 8 f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 8 8 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 8 8 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
Key.setPosition(50, 460)
Key_2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 6 f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 6 6 6 6 f f . . . . . . . . . . . . . . 
. . . . . . . . . f f 6 6 f f 6 6 f . . . . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 f f 6 6 f f . . . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . . . f f f f 8 8 f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 8 8 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 8 8 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food_2)
Key_2.setPosition(450, 460)
Key_3 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 6 f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 6 6 6 6 f f . . . . . . . . . . . . . . 
. . . . . . . . . f f 6 6 f f 6 6 f . . . . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 f f 6 6 f f . . . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . . . f f f f 8 8 f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 8 8 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 8 8 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food_3)
Key_3.setPosition(450, 45)
Key_4 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f 6 f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 6 6 6 6 f f . . . . . . . . . . . . . . 
. . . . . . . . . f f 6 6 f f 6 6 f . . . . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 f f 6 6 f f . . . . . . . . . . . . . 
. . . . . . . . . f 6 6 6 6 6 6 6 6 f . . . . . . . . . . . . . 
. . . . . . . . . f f f f 8 8 f f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 8 8 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 8 8 8 8 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food_4)
Key_4.setPosition(50, 30)
info.startCountdown(180)
Gun2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 f . . f 2 . . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . f f f f . . . . . . . 
. . . . . 2 2 2 2 . . . . . . . 
. . . . . f f f f . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . . 2 f . . f 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Gun)
Gun2.setPosition(325, 500)
game.onUpdateInterval(500, function () {
    if (info.score() == 400) {
        Finale_Key = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 5 . . . . . . . . . . . . . . . . 
. . . . . . . . 4 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . . . . . . . 4 . . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . 4 . . f f 4 f f f . . . . . . . . . . . . . . . 
. . . . . . . . . . f f 4 4 4 4 f f . . . 5 . . . . . . . . . . 
. . . . . . . . . f f 4 4 f f 4 4 f . . . . . . . . . . . . . . 
. . . . . 5 . . . f 4 4 4 f f 4 4 f f . . . . . . . . . . . . . 
. . . . . . . . . f 4 4 4 4 4 4 4 4 f . . . . . . . . . . . . . 
. . . . . . . . . f f f f 5 5 f f f f . . . . . . . . . . . . . 
. . 4 . . . . . . . . . f 5 5 f . . . . . . 4 . . . . . . . . . 
. . . . . . . . . . . . f 5 5 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 5 5 f . . . . . . . . . . . . . . . . 
. . . . . . . . . 5 . . f 5 5 f . . . 5 . . . . . . . . . . . . 
. . . . . . . . . . . . f 5 5 f . . . . . . . . . . . . . . . . 
. . . . . . 5 . . . . . f 5 5 f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 5 5 f f f . . . . 5 . . . . . . . . . 
. . . . . . . . . . . . f 5 5 5 5 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 5 5 f f f . 4 . . . . . . . . . . . . 
. . . . . . . 4 . . . . f 5 5 5 5 f . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Food_5)
        Finale_Key.setPosition(245, 240)
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() == 450) {
    	
    }
})
game.onUpdateInterval(500, function () {
    if (info.score() == 453) {
        game.showLongText("Wha...WHAT! You you freed us... but how, i thought that you were the enemy? O...i know what happend, Lies Lies their all lies, don't listen to them they are......EVIL. You have freed me and my friends souls, i can't thank you enough but i have to go now....BYE!", DialogLayout.Full)
    }
})
