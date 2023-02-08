import InfoGrid from '../Shared/InfoGrid';

const About = () => {
  const cards = [
    {
      title: 'Nachhaltiger Erfolg ',
      subtitle:
        'Erfahren Sie mehr über den entscheidenden Unterschied zwischen nachhaltigem Erfolg und einem „One-Hit Wonder“. An Beispielen aus der Profi-Tennis Szene veranschaulicht Patrik Kühnen eindrücklich, was es braucht, um nicht nur erfolgreich zu werden, sondern auch zu bleiben.'
    },
    {
      title: 'Ein gesunder Lebensstil für Erfolg',
      subtitle:
        'Mit seiner Expertise für Bewegung, Gesundheit und Performance hilft Patrik Kühnen Menschen, die Bedeutung eines gesunden Lebensstils und Bewegung in Bezug auf die individuelle Leistungsfähigkeit und Nachhaltigkeit ihres Erfolgs zu erkennen.'
    },
    {
      title: 'Bessere Performance',
      subtitle:
        'Patrik Kühnen gibt Ihnen Tools an die Hand, die Spitzensportler nutzen, um ihre Performance stetig zu steigern und die auch aus dem Kontext des Spitzensports heraus ihre Wirksamkeit immer wieder beweisen.'
    },
    {
      title: 'Gewohnheitstreppe',
      subtitle:
        'Lernen Sie wie man es schafft, sich mit Hilfe der „Gewohnheitstreppe“ kontinuierlich und immer während zu verbessern.'
    }
  ];
  return <InfoGrid dark data={cards} className="gradient py-16" />;
};

export default About;
