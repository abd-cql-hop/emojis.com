const emojis = ["😣", "😃", "😒", "😎", "🥶", "🥵", "😖"];



function changeEmoji(){
    console.log(emojis[0]);
    let randomNumber = Math.floor(   Math.random() * emojis.length   )
    console.log(randomNumber);
    console.log(  emojis[randomNumber]  );
    document.getElementById("emojiH2").innerHTML=emojis[randomNumber]

}