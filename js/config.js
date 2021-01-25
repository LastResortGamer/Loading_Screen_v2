/*
        Array of music id's to play in the loadscreen. Enter your youtube video id's here. In order to obtain the video ID
        Take whats after the watch?v= on a youtube link. https://www.youtube.com/watch?v=<videoid>
        Do not include the playlist id or anything, it should be a 11 digit code.
       
        Do not use videos that:
        - Do not allow embedding.
        - Copyrighted music (youtube actively blocks this).
*/

/*
	Update the config according to your needs. Two songs are added by default to show how to use the configuration.
	Note: JavaScript arrays do not end with comma (,). That means, when ending an array, do not use a comma.
	Right format should be something like this:
	music: ["cqwmDWCRuCU", "9yplucq49zs"]
	And this should not work:
    music: ["cqwmDWCRuCU", "9yplucq49zs", ]
*/

var config = {
    music: ["csF95sR6lmY", "2HtvFJqCQt4", "S7zZXGxy5vg", "cxQCiZ3z2PY", "vBGiFtb8Rpw", "Bb49BP5WdD4"],
    songnames: ["Arman Cekin - Better Days (ft. Faydee & Karra)", "Kevian Flum - U Mad Bro?", "Defqwop – Heart Afire (feat. Strix)", "Behind The Mastermind - Nerdout (ft. NemRaps & Ben Schuller)", "Culture Code - Make Me Move (feat. Karra)", "Came Witta Beam - Kaneezy"],
    musicVolume: 5, // volume should be under 50% to not cause earrape
    enableMusic: true
}

/*
    TODO: the loading screen crashes when only one song is present in the array.
    Also, when you want to test out the config in your browser, these browsers do not work (atleast for me):
    - Opera GX
    Tested and working browsers
    - Google Chrome
    - Microsoft Edge
    - Mozilla Firefox
*/