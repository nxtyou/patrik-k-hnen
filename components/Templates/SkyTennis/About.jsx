import InfoGrid from '../Shared/InfoGrid';

const About = () => {
  const cards = [
    {
      title: 'Jahrelange Erfahrung',
      subtitle:
        'Als Tennisexperte verfügt Patrik Kühnen über jahrelange Erfahrungen und ein tiefes Verständnis für das Spiel. Seine Analysen sind fachlich fundiert und einfach verständlich.'
    },
    {
      title: 'Insiderwissen',
      subtitle:
        'Sein engen Kontakte zu Spielern, Trainern und Funktionären ermöglichen ihm besondere Einblicke in die Tenniswelt, die seine Analysen und Einschätzungen noch stärker machen.'
    },
    {
      title: 'Zutreffende Prognosen',
      subtitle:
        'Durch seine jahrelange Erfahrung stellt er oftmals sehr zutreffende Prognosen über das Spielgeschehen und die Ergebnisse der Matches an.'
    },
    {
      title: 'Wertvoller Einblick',
      subtitle:
        'Seine Arbeit hilft seinen Kunden, einen besseren Einblick in die Spielweise und Strategien der Profis zu erhalten und liefert wertvolle Informationen, die beim Wetten helfen können.'
    }
  ];
  return <InfoGrid dark data={cards} className="py-16" />;
};

export default About;
