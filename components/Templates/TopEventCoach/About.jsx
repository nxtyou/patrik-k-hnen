import InfoGrid from '../Shared/InfoGrid';

const About = () => {
  const cards = [
    {
      title: 'Professionelle Atmosphäre',
      subtitle:
        'Mit Freude am Spiel und Leidenschaft für das Coaching schaffen Patrik Kühnen und sein Trainerteam eine entspannte und trotzdem professionelle Atmosphäre auf dem Court. Sie vermitteln einfache Tipps und Tricks, von denen jeder profitiert.'
    },
    {
      title: 'Erfahrung und Begeisterung',
      subtitle:
        'Natürlich teilt Patrik Kühnen in seinen Camps auch Anekdoten aus seiner Zeit als Spieler und Davis-Cup-Coach. Vor allem aber vermittelt er die Liebe zum Spiel.'
    },
    {
      title: 'Unvergessliche Erlebnisse',
      subtitle:
        'Robinson bietet seinen Gästen hervorragende Tennis-Bedingungen, qualifizierte Trainer und erstklassige Ausstattungen. Die Clubs stehen nicht nur für Sport und Entertainment, sondern auch für ideale Möglichkeiten, um in luxuriöser Umgebung zu entspannen.'
    },
    {
      title: 'Erfolgreiche Zusammenarbeit',
      subtitle:
        'Für Patrik Kühnen ist die Zusammenarbeit mit Robinson der perfekte Rahmen, um seine Liebe zum Tennis mit seiner Begeisterung für das Coaching zu verbinden – und das bereits sehr mehr als 20 Jahren.'
    }
  ];
  return <InfoGrid dark data={cards} className="gradient py-16" />;
};

export default About;
