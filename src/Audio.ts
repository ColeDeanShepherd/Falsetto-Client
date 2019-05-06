import { Howl } from "howler";

export function loadSoundAsync(soundFilePath: string): Promise<Howl> {
  return new Promise<Howl>((resolve, reject) => {
    new Howl({
      src: soundFilePath,
      onload: function(this: Howl) {
        resolve(this);
      },
      onloaderror: (soundId, error) => {
        reject(error);
      }
    });
  });
}
export function loadSoundsAsync(soundFilePaths: Array<string>): Promise<Array<Howl>> {
  const soundCount = soundFilePaths.length;
  const loadedSounds = new Array<Howl>(soundCount);
  let loadedSoundCount = 0;
  
  return new Promise((resolve, reject) => {
    soundFilePaths
      .map((filePath, i) => {
        return new Howl({
          src: filePath,
          onload: function(this: Howl) {
            loadedSounds[i] = this;
            loadedSoundCount++;
      
            if (loadedSoundCount === soundCount) {
              resolve(loadedSounds);
            }
          },
          onloaderror: (soundId, error) => {
            reject(error);
          }
        });
      });
  });
}
export function playSound(soundFilePath: string, volume: number = 1) {
  const howl = new Howl({ src: soundFilePath, volume: volume });
  howl.play();
}
export function playSoundsSimultaneously(soundFilePaths: Array<string>) {
  const loadedSounds = new Array<Howl>();
  let loadedSoundCount = 0;

  const playSounds = () => {
    for (const loadedSound of loadedSounds) {
      loadedSound.play();
    }
  };

  const sounds = soundFilePaths
    .map(filePath => new Howl({
      src: filePath,
      onload: function(this: Howl) {
        loadedSounds.push(this);
        loadedSoundCount++;
  
        if (loadedSoundCount === sounds.length) {
          playSounds();
        }
      },
      onloaderror: () => {
        loadedSoundCount++;
  
        if (loadedSoundCount === sounds.length) {
          playSounds();
        }
      }
    }));
}
export function playSoundsSequentially(soundFilePaths: Array<string | null>, delayInMs: number, cutOffSounds: boolean = false): () => void {
  let isCancelled = false;

  const playSounds = () => {
    for (let i = 0; i < loadedSounds.length; i++) {
      const iCopy = i; // for lambda
      const loadedSound = loadedSounds[i];

      if (loadedSound) {
        setTimeout(() => {
          // stop the previous sound if necessary
          if (cutOffSounds && (iCopy > 0)) {
            const previousLoadedSound = loadedSounds[iCopy - 1];

            if (previousLoadedSound) {
              previousLoadedSound.fade(1, 0, 300);
            }
          }

          // play the current sound
          if (!isCancelled) {
            loadedSound.play();
          }
        }, delayInMs * i);
      }
    }
  };
  
  const soundCount = soundFilePaths.length;
  let loadedSoundCount = 0;
  const loadedSounds = soundFilePaths
    .map(filePath => {
      if (filePath) {
        return new Howl({
          src: filePath,
          onload: function(this: Howl) {
            loadedSoundCount++;
      
            if (loadedSoundCount === soundCount) {
              playSounds();
            }
          },
          onloaderror: () => {
            loadedSoundCount++;
      
            if (loadedSoundCount === soundCount) {
              playSounds();
            }
          }
        });
      } else {
        loadedSoundCount++;
        return null;
      }
    });
  
  return () => isCancelled = true;
}