import * as React from "react";
import * as Vex from "vexflow";

import * as Utils from "../../../Utils";
import * as FlashCardUtils from "../Utils";
import { FlashCard } from "../../../FlashCard";
import { VexFlowComponent } from "../../VexFlowComponent";
import { FlashCardGroup, RenderAnswerSelectArgs } from "../../../FlashCardGroup";

const width = 100;
const height = 65;

export function renderAnswerSelect(
  state: RenderAnswerSelectArgs
): JSX.Element {
  return FlashCardUtils.renderMultiRowDistinctFlashCardSideAnswerSelect(state, [5, 5]);
}

export function createFlashCardGroup(): FlashCardGroup {
  const flashCardGroup = new FlashCardGroup("Sheet Music Note Durations", createFlashCards);
  flashCardGroup.initialSelectedFlashCardIndices = Utils.range(0, 4).concat(Utils.range(8, 12));
  flashCardGroup.renderAnswerSelect = renderAnswerSelect;
  flashCardGroup.containerHeight = "80px";
  flashCardGroup.moreInfoUri = "http://www.thejazzpianosite.com/jazz-piano-lessons/the-basics/overview/";

  return flashCardGroup;
}
export function createFlashCards(): FlashCard[] {
  return [
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "w", [])}
        />
      ),
      "Whole Note"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "h", ["hr"])}
        />
      ),
      "Half Note"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "q", ["qr", "hr"])}
        />
      ),
      "Quarter Note"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "8", ["8r", "qr", "hr"])}
        />
      ),
      "Eighth Note"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "16", ["16r", "8r", "qr", "hr"])}
        />
      ),
      "Sixteenth Note"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "32", ["32r", "16r", "8r", "qr", "hr"])}
        />
      ),
      "32nd Note"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "64", ["64r", "32r", "16r", "8r", "qr", "hr"])}
        />
      ),
      "64th Note"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "128", ["128r", "64r", "32r", "16r", "8r", "qr", "hr"])}
        />
      ),
      "128th Note"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "wr", [])}
        />
      ),
      "Whole Rest"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "hr", ["hr"])}
        />
      ),
      "Half Rest"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "qr", ["qr", "hr"])}
        />
      ),
      "Quarter Rest"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "8r", ["8r", "qr", "hr"])}
        />
      ),
      "Eighth Rest"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "16r", ["16r", "8r", "qr", "hr"])}
        />
      ),
      "Sixteenth Rest"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "32r", ["32r", "16r", "8r", "qr", "hr"])}
        />
      ),
      "32nd Rest"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "64r", ["64r", "32r", "16r", "8r", "qr", "hr"])}
        />
      ),
      "64th Rest"
    ),
    FlashCard.fromRenderFns(
      () => (
        <VexFlowComponent
          width={width} height={height}
          vexFlowRender={vexFlowRender.bind(null, "128r", ["128r", "64r", "32r", "16r", "8r", "qr", "hr"])}
        />
      ),
      "128th Rest"
    )
  ];
}
function vexFlowRender(noteDurationString: string, restDurationStrings: string[], context: Vex.IRenderContext) {
  context
    .setFont("Arial", 10)
    .setBackgroundFillStyle("#eed");

  const stave = new Vex.Flow.Stave(0, -20, width);
  stave.setContext(context).draw();
  
  const notes = [
    new Vex.Flow.StaveNote({
      clef: "treble",
      keys: ["b/4"],
      duration: noteDurationString
    })
  ];

  notes[0].setXShift(25);

  for (const durationString of restDurationStrings) {
    const restNote = new Vex.Flow.StaveNote({
      clef: "treble",
      keys: ["b/4"],
      duration: durationString
    });

    notes.push(restNote);

    // Move the rest out of view.
    restNote.setXShift(390);
  }
  
  const voice = new Vex.Flow.Voice({num_beats: 4, beat_value: 4});
  voice.addTickables(notes);
  
  const formatter = new Vex.Flow.Formatter();
  formatter.joinVoices([voice]).format([voice], width);
  
  voice.draw(context, stave);
}