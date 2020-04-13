import * as React from "react";

import { Scale } from '../../lib/TheoryLib/Scale';
import { Pitch } from '../../lib/TheoryLib/Pitch';
import { playPitches } from '../../Audio/PianoAudio';
import { Rect2D } from '../../lib/Core/Rect2D';
import { Size2D } from '../../lib/Core/Size2D';
import { Vector2D } from '../../lib/Core/Vector2D';
import { PitchLetter } from '../../lib/TheoryLib/PitchLetter';
import { renderPianoKeyboardNoteNames, PianoKeyboard, PianoKeyboardMetrics } from './PianoKeyboard';
import { doesKeyUseSharps } from '../../lib/TheoryLib/Key';
import { arrayContains } from '../../lib/Core/ArrayUtils';

export function onKeyPress(scale: Scale, keyPitch: Pitch): (() => void) | undefined {
  const pitches = scale.getPitches();
  const pitchMidiNumberNoOctaves = pitches.map(p => p.midiNumberNoOctave);

  if (arrayContains(pitchMidiNumberNoOctaves, keyPitch.midiNumberNoOctave)) {
    const pitches = (keyPitch.midiNumber === scale.rootPitch.midiNumber)
      ? [scale.rootPitch]
      : [scale.rootPitch, keyPitch];
    
    const audioCancellationFn = playPitches(pitches)[1];
    return audioCancellationFn;
  }

  return undefined;
}

export function renderExtrasFn(metrics: PianoKeyboardMetrics, pitches: Array<Pitch>, rootPitch: Pitch): JSX.Element {
  const pitchMidiNumberNoOctaves = pitches.map(p => p.midiNumberNoOctave);

  return renderPianoKeyboardNoteNames(metrics, doesKeyUseSharps(rootPitch.letter, rootPitch.signedAccidental), p => arrayContains(pitchMidiNumberNoOctaves, p.midiNumberNoOctave));
}

export interface IPianoScaleDronePlayerProps {
  scale: Scale;
  style?: any;
}

export class PianoScaleDronePlayer extends React.Component<IPianoScaleDronePlayerProps, {}> {
  public render(): JSX.Element {
    const { scale, style } = this.props;
    
    const pitches = scale.getPitches();
  
    return (
      <PianoKeyboard
        rect={new Rect2D(new Size2D(300, 150), new Vector2D(0, 0))}
        lowestPitch={new Pitch(PitchLetter.C, 0, 4)}
        highestPitch={new Pitch(PitchLetter.C, 0, 5)}
        pressedPitches={[]}
        renderExtrasFn={metrics => renderExtrasFn(metrics, pitches, scale.rootPitch)}
        onKeyPress={pitch => this.onKeyPress(pitch)}
        style={style} />
    );
  }

  private audioCancellationFn: (() => void) | undefined = undefined;

  private onKeyPress(pitch: Pitch) {
    const { scale } = this.props;

    if (this.audioCancellationFn) {
      this.audioCancellationFn();
    }

    this.audioCancellationFn = onKeyPress(scale, pitch);
  }
}