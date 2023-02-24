import InfoGrid from '../Shared/InfoGrid';

const About = () => {
  const cards = [
    {
      title: 'BMW Open by American Express',
      subtitle:
        'Die BMW Open by American Express im April sind im Turnierkalender das erste von vier ATP-Events in Deutschland. Die Veranstaltung ist fester Bestandteil der europäischen Sandplatz-Serie, die mit den French Open ihren Höhepunkt erreicht.'
    },
    {
      title: 'Aufgabenfeld',
      subtitle:
        'Ein Turnierdirektor verantwortet nicht nur einen großen Teil der Organisation vor Ort, sondern auch in der Vorbereitung. Er steht mit Spielern und Beratern im Kontakt, kümmert sich um Sponsoren und Partner und ist in der Turnierwoche Ansprechpartner für (fast) jeden.'
    },
    {
      title: 'Kompetenzen',
      subtitle:
        'Wer über viele Jahre die Organisation eines Großevents mitverantwortet, entwickelt immer neue Fähigkeiten – die auch bei anderen Projekten wichtig sind.'
    },
    {
      title: 'Ziele',
      subtitle:
        'Die Weiterentwicklung des Münchener Turniers ist für Patrik Kühnen eine Herzensangelegenheit. Sein Antrieb ist es, das Event jedes Jahr (noch) ein wenig besser zu machen.'
    }
  ];
  return <InfoGrid dark data={cards} className="gradient py-16" />;
};

export default About;
