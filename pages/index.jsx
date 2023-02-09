import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Index() {
  return (
    <main class="flex min-h-screen items-center justify-center text-center text-4xl font-bold tracking-[2px] sm:text-5xl">
      <nav>
        <ul class="hide flex flex-col gap-5 transition-all duration-1000">
          <li>
            <Link href="home" className="hover:text-iron">
              HOME
            </Link>
          </li>
          <li>
            <Link href="sky-tennis" className="hover:text-iron">
              SKY TENNIS
            </Link>
          </li>
          <li>
            <Link href="keynote-speaker" className="hover:text-iron">
              KEYNOTE SPEAKER
            </Link>
          </li>
          <li>
            <Link href="top-event-coach" className="hover:text-iron">
              TOP EVENT COACH
            </Link>
          </li>
          <li>
            <Link href="bmw-open" className="hover:text-iron">
              BMW OPEN
            </Link>
          </li>
          <li>
            <Link href="contact" className="hover:text-iron">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
