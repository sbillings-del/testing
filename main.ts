controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
    console.log("")
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.flyToCenter),
    2000,
    false
    )
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.LoopingInBackground)
    game.gameOver(true)
})
