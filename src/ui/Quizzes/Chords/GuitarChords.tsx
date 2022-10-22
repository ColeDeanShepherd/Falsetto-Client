import * as React from "react";

import { FlashCard, FlashCardSide, createFlashCardId } from "../../../FlashCard";
import { FlashCardSet } from "../../../FlashCardSet";
import { getNote, getStandardGuitarTuning, StringedInstrumentTuning } from '../../../lib/TheoryLib/StringedInstrumentTuning';
import { StringedInstrumentNote } from "../../../lib/TheoryLib/StringedInstrumentNote";
import { GuitarFretboard, renderGuitarNoteHighlightsAndLabels } from "../../Utils/GuitarFretboard";
import { renderDistinctFlashCardSideAnswerSelect } from "../Utils";

const flashCardSetId = "guitarChords";

// https://gtrlib.com/ is a good resource

const flashCardsData = [
  { frontSide: [undefined, 3, 2, 0, 1, 0], backSide: "C" },
  { frontSide: [undefined, 0, 2, 2, 2, 0], backSide: "A" },
  { frontSide: [undefined, 0, 2, 2, 1, 0], backSide: "A Minor" },
  { frontSide: [3, 2, 0, 0, 0, 3], backSide: "G" },
  { frontSide: [0, 2, 2, 1, 0, 0], backSide: "E" },
  { frontSide: [0, 2, 2, 0, 0, 0], backSide: "E Minor" },
  { frontSide: [undefined, undefined, 0, 2, 3, 2], backSide: "D" },
  { frontSide: [undefined, undefined, 0, 2, 3, 1], backSide: "D Minor" },

  { frontSide: [5, 7, 7, 6, 5, 5], backSide: "A" },
  { frontSide: [5, 7, 7, 5, 5, 5], backSide: "A Minor" },
  // sus2 is missing
  { frontSide: [5, 7, 7, 7, 5, 5], backSide: "Asus4" },
  { frontSide: [5, 6, 7, 5, undefined, 8], backSide: "Adim" },
  { frontSide: [5, 8, 7, 6, 6, 5], backSide: "Aaug" },
  { frontSide: [5, undefined, 4, 6, 5, undefined], backSide: "A6" },
  { frontSide: [5, undefined, 4, 5, 5, undefined], backSide: "Amin6" },
  { frontSide: [5, 7, 5, 6, 5, 5], backSide: "A7" },
  { frontSide: [5, 7, 6, 6, 5, 5], backSide: "AM7" },
  { frontSide: [5, 7, 5, 5, 5, 5], backSide: "Am7" },
  { frontSide: [5, 6, 5, 5, undefined, undefined], backSide: "Am7b5" },
  { frontSide: [5, 6, 4, 5, undefined, undefined], backSide: "Adim7" },
  { frontSide: [5, 7, 6, 5, 5, 5], backSide: "AmM7" },
  { frontSide: [5, undefined, 6, 6, 4, 4], backSide: "AM7#11" },
  { frontSide: [5, 7, 5, 6, 5, 7], backSide: "A9" },
  { frontSide: [5, 7, 5, 5, 5, 7], backSide: "Am9" },
  { frontSide: [5, 5, 5, 6, 5, 5], backSide: "A11" },
  { frontSide: [5, 7, 5, 6, 7, 5], backSide: "A13" },

  { frontSide: [undefined, 5, 7, 7, 7, 5], backSide: "D" },
  { frontSide: [undefined, 5, 7, 7, 6, 5], backSide: "D Minor" },
  { frontSide: [undefined, 5, 7, 7, 8, 5], backSide: "Dsus4" },
  { frontSide: [undefined, 5, 7, 7, 5, 5], backSide: "Dsus2" },
  { frontSide: [undefined, 5, 6, undefined, 6, 4], backSide: "Ddim" },
  { frontSide: [undefined, 5, 8, 7, 7, 6], backSide: "Daug" },
  { frontSide: [undefined, 5, 4, 4, 3, 5], backSide: "D6" },
  { frontSide: [undefined, 5, 3, 4, 3, 5], backSide: "Dmin6" },
  { frontSide: [undefined, 5, 7, 5, 7, 5], backSide: "D7" },
  { frontSide: [undefined, 5, 7, 6, 7, 5], backSide: "DM7" },
  { frontSide: [undefined, 5, 7, 5, 6, 5], backSide: "Dm7" },
  { frontSide: [undefined, 5, 6, 5, 6, undefined], backSide: "Dm7b5" },
  { frontSide: [undefined, 5, 6, 4, 6, undefined], backSide: "Ddim7" },
  { frontSide: [undefined, 5, 7, 6, 6, 5], backSide: "DmM7" },
  { frontSide: [undefined, 5, 8, 5, 7, 6], backSide: "Daug7" },
  { frontSide: [undefined, 5, 4, 5, 6, undefined], backSide: "D7#9" },
  { frontSide: [undefined, 5, 4, 5, 5, 5], backSide: "D9" },
  { frontSide: [undefined, 5, 3, 5, 5, 5], backSide: "Dm9" },
  { frontSide: [undefined, 5, 5, 5, 5, 5], backSide: "D11" },
  { frontSide: [undefined, 5, 5, 5, 5, 5], backSide: "Dm11" },
  
  { frontSide: [undefined, undefined, 5, 7, 8, 7], backSide: "G" },
  { frontSide: [undefined, undefined, 5, 7, 8, 6], backSide: "G Minor" },
  { frontSide: [undefined, undefined, 5, 7, 8, 8], backSide: "Gsus4" },
  { frontSide: [undefined, undefined, 5, 7, 5, 7], backSide: "G6" },
  { frontSide: [undefined, undefined, 5, 7, 5, 6], backSide: "Gmin6" },
  { frontSide: [undefined, undefined, 5, 7, 6, 7], backSide: "G7" },
  { frontSide: [undefined, undefined, 5, 7, 7, 7], backSide: "GM7" },
  { frontSide: [undefined, undefined, 5, 7, 6, 6], backSide: "Gm7" },
  { frontSide: [undefined, undefined, 5, 6, 6, 6], backSide: "Gm7b5" },
  { frontSide: [undefined, undefined, 5, 6, 5, 6], backSide: "Gdim7" },
  { frontSide: [undefined, undefined, 5, 7, 7, 6], backSide: "GmM7" },
  { frontSide: [undefined, undefined, 5, 8, 6, 7], backSide: "Gaug7" },
  { frontSide: [undefined, undefined, 5, 4, 6, 5], backSide: "G9" },
  { frontSide: [undefined, undefined, 5, 5, 6, 7], backSide: "G11" },
  { frontSide: [undefined, undefined, 5, 5, 6, 7], backSide: "G13" },
];

function createFlashCardSet() {
  const flashCardSet = new FlashCardSet(flashCardSetId, "Guitar Chords", createFlashCards);
  flashCardSet.renderAnswerSelect = renderDistinctFlashCardSideAnswerSelect;
  return flashCardSet;
}

const guitarTuning: StringedInstrumentTuning = getStandardGuitarTuning(/*stringCount*/ 6);

const getGuitarNotes = (fretNumbers: Array<number | undefined>): Array<StringedInstrumentNote> =>
  fretNumbers
    .map((n, i) => (n !== undefined)
      ? getNote(guitarTuning, i, n)
      : undefined)
    .filter(x => x !== undefined)
    .map(x => x as StringedInstrumentNote);

const guitarStyle = { width: "100%", maxWidth: "400px" };

export const createFlashCards = (): FlashCard[] =>
  flashCardsData
    .map((d, i) => new FlashCard(
      createFlashCardId(flashCardSetId, i + '.' + d.backSide),
      new FlashCardSide(
        size => (
          <GuitarFretboard
            width={400} height={140}
            tuning={guitarTuning}
            minFretNumber={0} fretCount={11}
            renderExtrasFn={metrics => renderGuitarNoteHighlightsAndLabels(
              metrics,
              getGuitarNotes(d.frontSide),
              "lightblue",
              (n, i) => ""
            )}
            style={guitarStyle}
          />
        ),
        d.frontSide
      ),
      new FlashCardSide(d.backSide, d.backSide)
    ));

export const flashCardSet = createFlashCardSet();