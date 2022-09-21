# Mini Spotify with useContext 

Welcome to the useContext master exercise, to better prep you for further challenges – this demo is here to save the day.

![](https://i.imgur.com/WckMmqj.png)



### In this project you will learn:
- Common logic in building a mini music player.
- How to use the React hook – useContext?
- How to make your own hook by utilizing React Custom Hook and useContext?

### User story:
- Users are able to see a tracklist or a list of songs.
- Users are able to see a controller with pause, play, next and playback buttons. 
- Users are able to play a track and see the track's name displayed.
- Users are able to play, pause or jump from one song to another with the controller.

---
## Project Breakdown

### 1/ Building a Musicplayer 

useContext is needed because we have two child components that share the same information (or state).

The 2 child components includes: 
The tracklist:
![](https://i.imgur.com/3vzuzl4.png)

The controller.
![](https://i.imgur.com/H2NN1h5.png)



The tracklist and the controller both need to know:
1) If a track is playing or pausing to render the corresponding UI. 
2) If a track is playing or pausing to toggle actions. *(If pause -> play, if play -> pause)*
3) If Track 1 is playing and user plays Track 2, Track 1 sees the action and pauses automatically.
4) What track is playing, for the controller to display track's name.

That's a lot of infomation needed to be shared between two components, which will be more complex and chaotic in bigger projects. Thanks to React and the useContext hook, we are now able to manage these information easier than ever. 

 
### 2/ useContext and useCustomHook

While useContext helps share information, useCustomHook is here for us to reuse functions –  everywhere across the app. 

The amazing thing about the two is this practice: 

When you need many functions to modify or change one type of information (one state). Let's combine useContext and useCustomHook.


> **Let's store your information (your state) in a custom hook along with all the functions needed. And every time you need the pair of state and function, just write one simple line of code – useCustomHook().**




How do all these theories come to life? Let's kick off the miniSpotify. 

### 3/ Resources 

**Demo application:** [Cs's MiniSpotify](https://reliable-sfogliatella-5fb38d.netlify.app/)


**A site to download free audios:** [PixaBay.com](https://pixabay.com/music/)


**Source code for all the functions you will need in the app:**

For now, we will focus on learning how to use a custom hook and useContext in an app. So no worries about these functions, take your time and we will walk you through.

- Use this file in your */src/hooks/usePlayerProvider.js*


```javascript=
--------------
to: src/hooks/useMusicPlayer.js
--------------
import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  const {state, setState} = useContext(MusicPlayerContext);

  // Play a specific track
  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      console.log("clicked");
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
    console.log(
      state.currentTrackIndex !== null &&
        state.tracks[state.currentTrackIndex].name
    );
  }

  // Toggle play or pause
  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  }

  // Play the previous track in the tracks array
  function playPreviousTrack() {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  // Play the next track in the tracks array
  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;

```



**Source code for useContext:**
- We are recommended to go over *CoderSchool's M2.2 useContext videos* for better understanding. 

- Use this file in your */src/contexts/MusicPlayerContext.js*
```javascript=
--------------
to: src/contexts/MusicPlayerContext.js
--------------

import React, { useState } from "react";
import Track1 from "./track1.mp3";
import Track2 from "./track2.mp3";
import Track3 from "./track3.mp3";

const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Cold Gin - Jazz",
        file: Track1,
      },
      {
        name: "heaven's On Fire - Jazz",
        file: Track2,
      },
      {
        name: "Beth - Jazz",
        file: Track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  }


const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={state, setState}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };

```

---


## Code Walkthrough

### MusicPlayerContext.js
- **1st:** There are more than just one information (for example: `isPlaying`, `currentTrackIndex`) we need to share across the app, therefore, let's put all the information in one object – `defaulValues`. 

    ![](https://i.imgur.com/N835ndu.png)

- **2nd:**  After setting up the "data" object, it's time for our old friend `useState()`. Let's pass `defaultValues` into `state`.

    ![](https://i.imgur.com/NHCKu1r.png)

    Now, everytime you want to:
    - Access an information:  `state.isPlaying`
    - Change an information:  `setState((state) => {...state, isPlaying: true} )`

    You might notice how `setState()` looks a bit more complex than it used to be.
    
    In older project, this is how we `setState()` – by simply pass in a new value. It's because we are setting state of only one information. 
    
    ```javascript= 
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }
    ```
    
    Today, to code leaner projects we can store many information in one object, just with a few extra things to notice when you `setState()`. 
        
    ```javascript= 
    const playSong = () => {
        setState((state) => {...state,  isPlaying: true} )
    }
    ```


    Instead of a single value, we will pass in a whole object. First, "spread" it out and, second, overwrite with the exact pair of information you want to update – `{...state,isPlaying: true} `. 

    The above technique is not new, we have learned it before in Object Destructuring, let's playback *CoderSchool's M1.2 Programming with JavaScript*.
 
- **3rd:**  Finally, let's look at what the function MusicPlayerProvider does.
It returns the `.Provider` and hold values in prop `value`. Now, in the `App.js`, instead of wrapping `<MusicPlayerContext.Provider>`, we can just simply use `<MusicPlayerProvider>`. 


```javascript=
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

const App = () => {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <Controller />
      </div>
    </MusicPlayerProvider>
  );
};

export default App;
```

  
### useMusicPlayer.js

:fire: Congratulation on making it this far down the rabbit hole –  you are almost there, keep on!

Inside `useMusicPlayer()`:
- **1st:** Let's call out and use the context (all information) we had set up before. 
   
```javascript=
 const useMusicPlayer = () => {
    const {state, setState} = useContext(MusicPlayerContext)
  ...  }
 ```
 
 


- **2nd:** Continue with a list of functions, including `playTrack`, `togglePlay()`, `playPreviousTrach()`, etc. For now, don't worry so much about mathematics and logic inside of them. Let's take some time, chew on it and consult your mentor. We will zoom out and see what the big boss `useMusicPlayer()` does. 

    ![](https://i.imgur.com/bceN3is.png)


- **3rd:** useMusicPlayer() returns a list of functions and information for us to use anywhere. 

    ![](https://i.imgur.com/9UGqJq5.png)

### TrackList.js

 :clap: :raised_hands: Hooray - it's action time! Now we can finally access and update information with just 1 line of code.
 
 `useMusicPlayer()` is a custom hook, that stores many useful things. However, in the component TrackList we will only need a few functions and information, for example: `isPlaying`, `trackList`,` playTrack`, etc. 
 
 - **1st:** we will take them out by: 
 ```javascript=
const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();
 ```
 
 - **2nd:** use them to render UI.
```javascript=
const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)
          
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </>
  );
};

export default TrackList;
```

---

### :muscle:  :tada:You made it!

You are introduced to all the tools needed for this project, let's connect all the pieces and complete your own MiniSpotify!

Reading code walkthrough might take a lot of brain energy :fire: :sweat_drops: but reading will help organize your logic stream and develop great habits, especially for life-learners like us – the programmers :wink:. 

You've changed a lot since our first project, have fun and see you! 
