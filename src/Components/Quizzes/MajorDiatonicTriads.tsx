import * as React from 'react';

import { Quiz } from "../../Quiz";

import Button from "@material-ui/core/Button";

export function createQuiz(): Quiz {
  const chordRoots = [1, 2, 3, 4, 5, 6, 7];
  const chordTypes = [
    "major",
    "minor",
    "minor",
    "major",
    "major",
    "minor",
    "diminished"
  ];
  const answers = [
    "major",
    "minor",
    "diminished",
    "augmented"
  ];
  const questionAnswerIndices = chordTypes.map(answer => answers.indexOf(answer));

  return new Quiz(
    "Major Diatonic Triads",
    chordRoots.map(chordRoot => (() => <span>{chordRoot}</span>)),
    questionAnswerIndices,
    selectAnswerId => {
      const answerButtons = answers.map((answer, i) => {
        return <span key={i} style={{padding: "1em 1em 1em 0"}}><Button onClick={event => selectAnswerId(i)} variant="outlined" color="primary">{answer}</Button></span>;
      });
      return <div style={{lineHeight: 3}}>{answerButtons}</div>;
    }
  );
}