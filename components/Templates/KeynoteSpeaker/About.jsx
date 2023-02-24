import InfoGrid from '../Shared/InfoGrid';

const About = () => {
  const cards = [
    {
      title: 'Nachhaltiger Erfolg ',
      subtitle:
        'Was ist der Unterschied zwischen nachhaltigem Erfolg und einem „One-Hit Wonder“? Mit spannenden Storys aus dem Profitennis erklärt Patrik Kühnen, warum manche Menschen erfolgreicher sind als andere – und wie jeder Einzelne von diesem Wissen profitieren kann.'
    },
    {
      title: 'Ein gesunder Lebensstil als Basis',
      subtitle:
        'Wie hängen Lebensstil und Leistungsfähigkeit zusammen? Patrik Kühnen erläutert auch anhand vieler eigener Erfahrungen, wie sich die Bewegung und das Bewusstsein für die Bedeutung der Gesundheit auf die Performance auswirken – nicht nur im Sport.'
    },
    {
      title: 'Lernen vom Profisport',
      subtitle:
        'Was zeichnet Spitzensportler aus? Als ehemaliger Tennisprofi und langjähriger Coach kennt Patrik Kühnen viele Tools, die von den erfolgreichsten Athleten der Welt genutzt werden. In seinen Vorträgen vermittelt er eindrucksvoll, wie diese funktionieren.'
    },
    {
      title: 'Gewohnheitstreppe',
      subtitle:
        'Wie lässt sich die eigene Leistung immer weiter steigern? Mit Hilfe der sogenannten Gewohnheitstreppe zeigt Patrik Kühnen, wie kontinuierliche Verbesserungen für jeden Menschen – in diversen Lebensbereichen – möglich sind.'
    }
  ];
  return <InfoGrid dark data={cards} className="gradient py-16" />;
};

export default About;
