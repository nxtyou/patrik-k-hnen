import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@/components/Atoms/Icons/MenuIcon';
import Button from '@/components/Atoms/Button';
import ArrowIcon from '@/components/Atoms/Icons/ArrowIcon';

function BMWOpen() {
  return (
    <>
      <header>
        <div className="flex items-center justify-between px-7 py-7 md:px-8 md:py-5">
          <Link href="/">
            <Image src="/images/logo-mini.svg" width="62" height="50" alt="" />
          </Link>
          <Button
            aria-label="Mehr Informationen"
            className="group mt-6 hidden md:flex"
            rightIcon={<ArrowIcon animated />}
            big>
            Mehr Informationen
          </Button>
          <button aria-label="Menü umschalten" className="md:hidden">
            <MenuIcon />
          </button>
        </div>
      </header>
    </>
  );
}

export default BMWOpen;
