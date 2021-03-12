import * as React from "react";

import { NoteText } from "../Utils/NoteText";
import {
  GuitarFretboard,
  renderGuitarNoteHighlightsAndNoteNames,
  renderFretNumbers
} from '../Utils/GuitarFretboard';
import { StringedInstrumentMetrics } from "../Utils/StringedInstrumentFingerboard";
import { standard6StringGuitarTuning } from "../Utils/StringedInstrumentTuning"
import * as GuitarNotes from "../Quizzes/Notes/GuitarNotes";
import { Pitch } from '../../lib/TheoryLib/Pitch';
import { PitchLetter } from '../../lib/TheoryLib/PitchLetter';
import { createStudyFlashCardSetComponent } from '../../ui/StudyFlashCards/View';
import { StringedInstrumentNote } from '../../lib/TheoryLib/StringedInstrumentNote';
import { NavLinkView } from '../../ui/NavLinkView';
import { flattenArrays } from '../../lib/Core/ArrayUtils';
import { Card } from "../../ui/Card/Card";

const noteGroups = [
  {
    color: "lightgreen",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 2),

      
    ]
  },
  {
    color: "lightsalmon",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 4)
    ]
  },
  {
    color: "lightblue",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 5), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 5),

      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 2), 0)
    ]
  },
  {
    color: "yellow",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 5),

      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 2), 0)
    ]
  },
  {
    color: "turquoise",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 3)
    ]
  },
  {
    color: "lightgray",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 3), 0),
      
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 3), 1),

      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 4), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 3), 2),

      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 4), 3),
      
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 4), 4),
      
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 5), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 5), 5)
    ]
  }
];

const step3Diagram1NoteGroups = [
  {
    color: "lightgreen",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 2)
    ]
  },
];
const step3Diagram1Notes = flattenArrays<StringedInstrumentNote>(step3Diagram1NoteGroups
  .map(ng => ng.notes));

const step4Diagram1NoteGroups = [
  {
    color: "lightgreen",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 2)
    ]
  },
  {
    color: "lightsalmon",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 3)
    ]
  }
];
const step4Diagram1Notes = flattenArrays<StringedInstrumentNote>(step4Diagram1NoteGroups
  .map(ng => ng.notes));

const step5Diagram1NoteGroups = [
  {
    color: "lightgreen",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 2)
    ]
  },
  {
    color: "lightsalmon",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 4)
    ]
  },
  {
    color: "red",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 5), 5)
    ]
  }
];
const step5Diagram1Notes = flattenArrays<StringedInstrumentNote>(step5Diagram1NoteGroups
  .map(ng => ng.notes));

const step6Diagram1NoteGroups = [
  {
    color: "lightgreen",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 2)
    ]
  },
  {
    color: "lightsalmon",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 4)
    ]
  },
  {
    color: "turquoise",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 3)
    ]
  },
  {
    color: "red",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 5), 5)
    ]
  }
];
const step6Diagram1Notes = flattenArrays<StringedInstrumentNote>(step6Diagram1NoteGroups
  .map(ng => ng.notes));

const step7Diagram1NoteGroups = [
  {
    color: "lightgreen",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 2)
    ]
  },
  {
    color: "lightsalmon",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 4)
    ]
  },
  {
    color: "turquoise",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 3)
    ]
  },
  {
    color: "yellow",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 5)
    ]
  },
  {
    color: "magenta",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 5), 5)
    ]
  },
  {
    color: "red",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 5), 5)
    ]
  }
];
const step7Diagram1Notes = flattenArrays<StringedInstrumentNote>(step7Diagram1NoteGroups
  .map(ng => ng.notes));

const step8Diagram1NoteGroups = [
  {
    color: "lightgreen",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 2)
    ]
  },
  {
    color: "lightsalmon",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 4)
    ]
  },
  {
    color: "turquoise",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 3)
    ]
  },
  {
    color: "yellow",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 5)
    ]
  },
  {
    color: "magenta",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 5), 5)
    ]
  },
  {
    color: "red",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 5), 5)
    ]
  }
];
const step8Diagram1Notes = flattenArrays<StringedInstrumentNote>(step8Diagram1NoteGroups
  .map(ng => ng.notes));

const step9Diagram1NoteGroups = [
  {
    color: "lightgreen",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 2)
    ]
  },
  {
    color: "lightsalmon",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 4)
    ]
  },
  {
    color: "turquoise",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 3)
    ]
  },
  {
    color: "yellow",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 5),

      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 2), 0)
    ]
  },
  {
    color: "magenta",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 5), 5)
    ]
  },
  {
    color: "red",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 5), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 1),
      
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 2), 0),
    ]
  }
];
const step9Diagram1Notes = flattenArrays<StringedInstrumentNote>(step9Diagram1NoteGroups
  .map(ng => ng.notes));

const step10Diagram1NoteGroups = [
  {
    color: "lightgreen",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 2)
    ]
  },
  {
    color: "lightsalmon",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 4)
    ]
  },
  {
    color: "turquoise",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 3)
    ]
  },
  {
    color: "yellow",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 4), 5),

      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 2), 0)
    ]
  },
  {
    color: "magenta",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 5), 5)
    ]
  },
  {
    color: "red",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.B, 0, 3), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 0, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 5), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 0, 3), 1),
      
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 0, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.E, 0, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 0, 2), 0),
    ]
  },
  {
    color: "lightgray",
    notes: [
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 2), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 3), 0),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 3), 0),
      
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 2), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 3), 1),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 3), 1),

      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 3), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 4), 2),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 3), 2),

      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 3), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 4), 3),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 4), 3),
      
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 4), 4),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 4), 4),
      
      new StringedInstrumentNote(new Pitch(PitchLetter.F, 1, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.G, 1, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.A, 1, 4), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.C, 1, 5), 5),
      new StringedInstrumentNote(new Pitch(PitchLetter.D, 1, 5), 5)
    ]
  }
];
  
const step10Diagram2NoteGroups = noteGroups;

export const level1Notes = step3Diagram1Notes;
export const level2Notes = step4Diagram1Notes;
export const level3Notes = step5Diagram1Notes;
export const level4Notes = step6Diagram1Notes;
export const level5Notes = step7Diagram1Notes;
export const level6Notes = step8Diagram1Notes;
export const level7Notes = step9Diagram1Notes;
export const levelsNotes = [
  level1Notes,
  level2Notes,
  level3Notes,
  level4Notes,
  level5Notes,
  level6Notes,
  level7Notes
];

export interface IGuitarNotesLessonProps {
}
export interface IGuitarNotesLessonState {
}
export class GuitarNotesLesson extends React.Component<IGuitarNotesLessonProps, IGuitarNotesLessonState> {
  public constructor(props: IGuitarNotesLessonProps) {
    super(props);
    
    this.state = {};
  }
  public render(): JSX.Element {
    const fretboardWidth = 400;
    const fretboardHeight = 140;
    const fretboardStyle = { width: "100%", maxWidth: "400px", height: "auto" };

    return (
      <Card>
        <h1>Learn the Notes on Guitar in 9 Easy Steps</h1>

        <p>Being able to identify all of the notes on your instrument is vital to becoming a skilled musician, and learning this skill on guitar is quicker and easier than you might think. Let's get started!</p>
        
        <h3>Introduction</h3>
        <p>There are 6 strings and (usually) up to 24 frets on a guitar:</p>
        <p style={{ textAlign: "center" }}>
          <GuitarFretboard
            width={fretboardWidth} height={0.8 * fretboardHeight}
            tuning={standard6StringGuitarTuning}
            fretCount={24}
            style={fretboardStyle}
          />
        </p>

        <p>This means that there are 150 notes to learn! Luckily, you can learn them all in only 9 easy steps by leveraging a few rules to drastically reduce number of notes you need to memorize.</p>
        
        <h3>Step 1</h3>
        <p>The first rule is that the notes repeat every 12 frets. This means that we can ignore all fretted notes after the 11th fret and wrap around instead (so the 12th fret is the same as the open string, the 13th fret is the same as the 1st fret, and so on). Now we are left with this section of the guitar:</p>
        <p style={{ textAlign: "center" }}>
          <GuitarFretboard
            width={fretboardWidth} height={fretboardHeight}
            tuning={standard6StringGuitarTuning}
            renderExtrasFn={metrics => renderFretNumbers(metrics)}
            style={fretboardStyle}
          />
        </p>

        <h3>Step 2</h3>
        <p>Memorize these 7 notes and the shape they make. Note that from reading from the bottom-up and left to right follows the musical alphabet &ndash; the English letters from A to G.</p>
        <p style={{ textAlign: "center" }}>
          <GuitarFretboard
            width={fretboardWidth} height={fretboardHeight}
            tuning={standard6StringGuitarTuning}
            renderExtrasFn={metrics => this.renderDiagramExtras(metrics, step3Diagram1NoteGroups)}
            style={fretboardStyle}
          />
        </p>
        <p>
          {createStudyFlashCardSetComponent(
            GuitarNotes.createFlashCardSet(level1Notes), false, true, "Step 2 Quiz", { margin: "0 auto" })}
        </p>
        
        <h3>Step 3</h3>
        <p>Memorize this rule: If you move up 2 strings and right 2 frets (or move in the exact opposite direction) from any note, that note has the same name as the starting note.</p>
        <NoteText>The G on the 2nd highest string will be introduced in the next step.</NoteText>
        <p style={{ textAlign: "center" }}>
          <GuitarFretboard
            width={fretboardWidth} height={fretboardHeight}
            tuning={standard6StringGuitarTuning}
            renderExtrasFn={metrics => this.renderDiagramExtras(metrics, step4Diagram1NoteGroups)}
            style={fretboardStyle}
          />
        </p>
        <p>
          {createStudyFlashCardSetComponent(
            GuitarNotes.createFlashCardSet(level2Notes), false, true, "Step 3 Quiz", { margin: "0 auto" })}
        </p>

        <h3>Step 4</h3>
        <p>We stopped on the 3rd highest string because there is a special rule you must follow to continue: Any time you move from the 3rd highest string to the 2nd highest string, you must shift one fret to the right (and therefore any time you cross back from the 2nd highest string to the 3rd highest string, you must shift one fret to the left).</p>
        <p style={{ textAlign: "center" }}>
          <GuitarFretboard
            width={fretboardWidth} height={fretboardHeight}
            tuning={standard6StringGuitarTuning}
            renderExtrasFn={metrics => this.renderDiagramExtras(metrics, step5Diagram1NoteGroups)}
            style={fretboardStyle}
          />
        </p>

        <p>
          {createStudyFlashCardSetComponent(
            GuitarNotes.createFlashCardSet(level3Notes), false, true, "Step 4 Quiz", { margin: "0 auto" })}
        </p>

        <h3>Step 5</h3>
        <p>Memorize this rule: If you move up 3 strings and left 3 frets from any note (while remembering to shift one fret to the right if you cross from the 3rd highest string to the 2nd highest string), that note has the same name as the starting note.</p>

        <p style={{ textAlign: "center" }}>
          <GuitarFretboard
            width={fretboardWidth} height={fretboardHeight}
            tuning={standard6StringGuitarTuning}
            renderExtrasFn={metrics => this.renderDiagramExtras(metrics, step6Diagram1NoteGroups)}
            style={fretboardStyle}
          />
        </p>
        <p>
          {createStudyFlashCardSetComponent(
            GuitarNotes.createFlashCardSet(level4Notes), false, true, "Step 5 Quiz", { margin: "0 auto" })}
        </p>
        
        <h3>Step 6</h3>
        <p>Memorize the remaining open string notes. From the lowest string to the 2nd highest string, they are E, A, D, G, B. The highest string's note names are exactly the same as the lowest string's notes, so we are ignoring the highest string for now.</p>
        <p style={{ textAlign: "center" }}>
          <GuitarFretboard
            width={fretboardWidth} height={fretboardHeight}
            tuning={standard6StringGuitarTuning}
            renderExtrasFn={metrics => this.renderDiagramExtras(metrics, step7Diagram1NoteGroups)}
            style={fretboardStyle}
          />
        </p>
        <p>
          {createStudyFlashCardSetComponent(
            GuitarNotes.createFlashCardSet(level5Notes), false, true, "Step 6 Quiz", { margin: "0 auto" })}
        </p>

        <h3>Step 8</h3>
        <p>Memorize the D on the 10th fret of the lowest string, and the G on the 10th fret of the 2nd lowest string:</p>

        <p style={{ textAlign: "center" }}>
          <GuitarFretboard
            width={fretboardWidth} height={fretboardHeight}
            tuning={standard6StringGuitarTuning}
            renderExtrasFn={metrics => this.renderDiagramExtras(metrics, step9Diagram1NoteGroups)}
            style={fretboardStyle}
          />
        </p>

        <p>You have now learned all of the natural (non sharp/flat) notes on the guitar fretboard, and there is only one more step to learn the rest of the notes!</p>
        
        <p>
          {createStudyFlashCardSetComponent(
            GuitarNotes.createFlashCardSet(level7Notes), false, true, "Step 8 Quiz", { margin: "0 auto" })}
        </p>
        
        <h3>Step 9</h3>
        <p>To identify the rest of the notes (accidental notes, whose names have added symbols as well), simply add a '#' (read "sharp") to the natural note to the left, or add a 'b' (read "flat") to the natural note to the right. Yes, each of these notes has two possible names, and which name you use depends on the context (more info. on this in the <NavLinkView to="/essential-music-theory">{"Essential Music Theory"}</NavLinkView> lesson)! But for now we will just label each accidental note with both possible names.</p>
        <p style={{ textAlign: "center" }}>
          <GuitarFretboard
            width={fretboardWidth} height={fretboardHeight}
            tuning={standard6StringGuitarTuning}
            renderExtrasFn={metrics => this.renderDiagramExtras(metrics, step10Diagram1NoteGroups)}
            style={fretboardStyle}
          />
        </p>

        <h3>Test Your Knowledge</h3>
        <p>Now, you can practice your knowledge on your guitar, or using the exercise below.</p>
        <p>
          {createStudyFlashCardSetComponent(
            GuitarNotes.flashCardSet, false, true, "Final Quiz", { margin: "0 auto" })}
        </p>
      </Card>
    );
  }
  private renderDiagramExtras(
    metrics: StringedInstrumentMetrics,
    diagramNoteGroups: Array<{ color: string, notes: Array<StringedInstrumentNote> }>
  ): JSX.Element {
    return (
      <g>
        {diagramNoteGroups
          .map(dng => renderGuitarNoteHighlightsAndNoteNames(
            metrics, dng.notes, dng.color
          ))}
        {renderFretNumbers(metrics)}
      </g>
    );
  }
}