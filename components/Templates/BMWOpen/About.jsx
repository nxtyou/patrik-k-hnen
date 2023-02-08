import InfoGrid from '../Shared/InfoGrid';

const About = () => {
  const cards = [
    {
      title: 'BMW Open by FWU',
      subtitle:
        'Die “BMW Open by FWU” sind das erste von vier ATP Turnieren in Deutschland und ein fester Bestandteil der europäischen Sandplatz-Serie, welche mit den French Open ihren Höhepunkt erreicht. '
    },
    {
      title: 'Verantwortung des Turnierdirektors',
      subtitle:
        'Als Turnierdirektor ist er verantwortlich für die Organisation des Events und sorgte für einen reibungslosen Ablauf zu gewährleisten, von Spielerauswahl bis zur Unterstützung der Teilnehmer und Zuschauer.'
    },
    {
      title: 'Kompetente Führungskraft',
      subtitle:
        'Seine Arbeit als Turnierdirektor hat gezeigt, dass er ein fähiger Führungskraft ist und dass er die Fähigkeit hat, erfolgreiche Veranstaltungen zu organisieren.'
    },
    {
      title: 'Erfolg durch Erfahrung',
      subtitle:
        'Dank seiner Erfahrung und Leidenschaft für den Sport hat Kühnen dazu beigetragen, dass die BMW Open zu einem erfolgreichen und begehrten Tennis-Event wurden. '
    }
  ];
  return <InfoGrid dark data={cards} className="gradient py-16" />;
};

export default About;
