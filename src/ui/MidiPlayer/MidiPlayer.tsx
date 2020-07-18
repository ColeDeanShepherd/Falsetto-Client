import * as React from "react";
import { Midi } from "@tonejs/midi";

const midiFile = "data:audio/midi;base64,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";

export class MidiPlayerView extends React.Component<{}, {}> {
  public componentDidMount() {
    this.parseMidiFile();
  }

  public render(): JSX.Element {
    return (
      <h2 className="margin-bottom">
        MIDI Player
      </h2>
    );
  }

  private async parseMidiFile() {
    const midi = await Midi.fromUrl(midiFile);
  }
}