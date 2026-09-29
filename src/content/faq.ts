/**
 * Häufige Fragen. Reihenfolge = Reihenfolge auf der Seite.
 * Die erste Frage ist standardmäßig geöffnet.
 * Wird zusätzlich als FAQPage-Schema (SEO) ausgegeben.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Ist die Reinigung schonend für mein Pflaster oder Dach?',
    answer:
      'Ja. Wir arbeiten mit einer Spezialmaschine, die überwiegend mit Luft und nur wenig Wasser reinigt. Dadurch wird der Bewuchs gelöst, ohne die Oberfläche aufzurauen oder Fugen auszuspülen. Chemische Zusätze brauchen wir dafür nicht. Bei empfindlichen Materialien machen wir vorher immer eine Probefläche.',
  },
  {
    question: 'Wie lange hält der Schutz nach der Versiegelung?',
    answer:
      'Das hängt von der Fläche ab. Für Dach- und Fassadenreinigung mit Versiegelung geben wir 7–8 Jahre Schutz an, für Wintergarten und Glas mit Nanoversiegelung 4–5 Jahre. Bei Malerarbeiten mit Nano-/Lotus-Farbe sind es 10 Jahre Garantie. Die genauen Werte für Ihr Objekt nennen wir Ihnen beim Beratungstermin. [PRÜFEN]',
  },
  {
    question: 'Kommen Sie auch außerhalb von Bad Hersfeld?',
    answer:
      'Ja. Unser Sitz ist in Bad Hersfeld, gearbeitet wird aber bundesweit. Im Umkreis von rund 60 km beraten wir Sie kostenlos vor Ort. Für Aufträge außerhalb dieses Radius sprechen wir die Anfahrt vorher offen mit Ihnen ab.',
  },
  {
    question: 'Was kostet eine Beratung?',
    answer:
      'Die Beratung vor Ort ist im Umkreis von rund 60 km kostenlos und unverbindlich – ebenso das Angebot. Sie gehen damit keinerlei Verpflichtung ein.',
  },
  {
    question: 'Muss ich während der Arbeiten zu Hause sein?',
    answer:
      'Für den Beratungstermin und die Übergabe ist es gut, wenn Sie da sind. Während der Arbeiten müssen Sie nicht anwesend sein, solange wir Zugang zur Fläche sowie zu Wasser und Strom haben. Das klären wir vorher gemeinsam.',
  },
  {
    question: 'Was ist eine Probeflächenreinigung?',
    answer:
      'Wir reinigen bei Ihnen vor Ort kostenlos einen kleinen Bereich der Fläche. So sehen Sie am eigenen Objekt, wie das Ergebnis aussieht, bevor Sie sich für den Auftrag entscheiden.',
  },
  {
    question: 'Ist das Verfahren umweltverträglich?',
    answer:
      'Die Reinigung selbst kommt ohne chemische Zusätze aus. Wo wir Mittel gegen Algen und Moos einsetzen oder nachbehandeln, sind diese biologisch abbaubar. Da kaum Spritzwasser entsteht, bleiben angrenzende Beete und Pflanzen weitgehend unberührt.',
  },
  {
    question: 'Wie schnell bekomme ich einen Termin?',
    answer:
      'Wir melden uns nach Ihrer Anfrage zeitnah und richten den Termin nach Ihrem Kalender aus – auch samstags. Rufen Sie gerne direkt an, dann finden wir meist sofort ein passendes Zeitfenster.',
  },
];
