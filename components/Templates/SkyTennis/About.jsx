import InfoGrid from '../InfoGrid';

const About = () => {
  const cards = [
    {
      title: 'Jahrelange Erfahrung',
      subtitle:
        'Als Tennis Experte verfügt Patrik Kühnen über jahrelange Erfahrung und ein tiefes Verständnis für das Spiel. Seine Analysen sind klar und verständlich und geben eine gute Vorstellung davon, was zu erwarten ist.'
    },
    {
      title: 'Insiderwissen',
      subtitle:
        'Er nutzt auch Insiderwissen, das er aus seinen persönlichen Kontakten zu den besten Spielern der Welt gewonnen hat, um seine Analysen zu untermauern und noch präzisere Einschätzungen abzugeben.'
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
