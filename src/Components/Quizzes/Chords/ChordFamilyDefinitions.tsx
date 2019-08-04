import * as FlashCardUtils from "../Utils";

import { FlashCard } from "../../../FlashCard";
import { FlashCardGroup } from "../../../FlashCardGroup";

const flashCardSetId = "diatonicChordFamilyDefinitions";

export function createFlashCardGroup(): FlashCardGroup {
  const flashCardGroup = new FlashCardGroup(flashCardSetId, "Chord Family Definitions", createFlashCards);
  flashCardGroup.renderAnswerSelect = FlashCardUtils.renderDistinctFlashCardSideAnswerSelect;

  return flashCardGroup;
}
export function createFlashCards(): FlashCard[] {
  return [
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, family: "tonic" }),
      "Tonic", "doesn't contain the 4th scale degree"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, family: "preDominant" }),
      "Pre-Dominant", "contains only 4th scale degree"),
    FlashCard.fromRenderFns(
      JSON.stringify({ set: flashCardSetId, family: "dominant" }),
      "Dominant", "contains the 4th and 7th scale degrees"),
  ];
}