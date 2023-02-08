import InfoGrid from '../Shared/InfoGrid';

const About = () => {
  const cards = [
    {
      title: 'Professionelle Atmosphäre',
      subtitle:
        'Mit ansteckender Begeisterung, Spaß am Spiel und Leidenschaft für das Unterrichten schafft er eine entspannte aber doch professionelle Atmosphäre und optimiert, zusammen mit seinen beiden Co-Trainern, das Spiel eines jeden Teilnehmers.'
    },
    {
      title: 'Ein erfahrener und begeisterter Coach',
      subtitle:
        'Mit seiner Leidenschaft und Erfahrung im Tennis-Sport ist Patrik Kühnen ein begehrter Coach, der Spielern hilft, ihre Fähigkeiten zu verbessern und ihre Leidenschaft für den Sport zu fördern.'
    },
    {
      title: 'Ein unvergessliches Erlebnis',
      subtitle:
        'Robinson bietet seinen Gästen eine hervorragende Tennis-Erfahrung mit qualifizierten Trainern und erstklassiger Ausstattung. Verbessern Sie Ihre Fähigkeiten und entspannen Sie sich in luxuriöser Umgebung.'
    },
    {
      title: 'Erfolgreiche Zusammenarbeit',
      subtitle:
        'Patrik Kühnen verbindet seine Leidenschaft für Tennis mit seiner Erfahrung als Coach, um Spielern zu verbessern. Seit 20+ Jahren arbeitet er erfolgreich mit Robinson, dem bekannten Cluburlaub-Anbieter, zusammen. '
    }
  ];
  return <InfoGrid dark data={cards} className="gradient py-16" />;
};

export default About;
