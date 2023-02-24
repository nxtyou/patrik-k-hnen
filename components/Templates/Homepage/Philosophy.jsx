import ButtonLink from '@/components/Atoms/ButtonLink';

function Philosophy() {
  return (
    <div className="philosophy">
      <div className="mx-auto flex h-[600px] w-full max-w-7xl items-center px-6 sm:px-8 md:px-20 2xl:px-0">
        <div className="max-w-lg">
          <h2 className="text-[3.5rem] font-medium">Philosophie</h2>
          <p className="mt-3 mb-10 text-xl text-[#fff]">
            Langfristige Zusammenarbeit ist Patrik Kühnen wichtig. Deshalb trifft er Entscheidungen
            für Partnerschaften stets bewusst und auf Basis gemeinsamer Werte.{' '}
          </p>
          <ButtonLink href="/contact">Kontakt aufnehmen</ButtonLink>
        </div>
      </div>
    </div>
  );
}
export default Philosophy;
