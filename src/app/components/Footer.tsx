import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='text-main py-8 border-t border-secondary px-6 lg:px-24'>
      <div className='mx-auto flex flex-col md:flex-row justify-around items-center'>
        {/* Bloc gauche */}
        <div className='mb-8 md:mb-0 w-1/4'>
          <div className='flex flex-col md:flex-row justify-around items-center align-middle w-full'>
            <Link href='/'>
              <Image
                src='/static/Jdanse2.png'
                alt="Logo de l'association de danse J'Danse à Paimboeuf"
                width={120}
                height={120}
                priority
                sizes='(max-width: 768px) 100vw, 1200px'
              />
            </Link>
            <div className='flex space-x-4 mt-4'>
              <Link
                href='https://www.facebook.com/p/JDanse-Asso-100069907428245'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-yellow-500 h-fit hover:-translate-y-1 duration-200 ease-in-out'
              >
                <Image
                  src='/icons/facebook.svg'
                  alt='Logo Facebook'
                  className='h-8 w-8'
                  width={32}
                  height={32}
                />
              </Link>
              <Link
                href='tel:+33649182726'
                target='_blank'
                className='bg-yellow-500 p-1 rounded-full hover:-translate-y-1 duration-200 ease-in-out'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='true'
                  viewBox='0 0 23 23'
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bloc droit */}
        <div className='text-center flex flex-col justify-around items-center'>
          <div className='mb-2'>
            <Link href='/admin' target='_blank'>
              <p className='underline min-w-max'>Administration</p>
            </Link>
          </div>
          <Link href='/mentions-legales'>
            <p className='block mb-2 hover:underline min-w-max'>
              Mentions légales
            </p>
          </Link>
          {/* Ajoutez d'autres liens ici */}

          <div className=''>
            Site créé par :
            <Link href='https://www.victor-raguin.fr' target='_blank'>
              <p className='underline min-w-max'>Victor Raguin 👋</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Texte SEO */}
      <div className='mt-8 text-sm text-center leading-relaxed text-secondary'>
        <p>
          Bienvenue chez J&apos;Danse, votre association de danse située à
          Paimboeuf, au cœur du Pays de Retz. Nos cours de danse, dispensés par
          Johanna Barbe, professeur passionnée, sont adaptés aussi bien pour les
          enfants que pour les adultes. Que vous soyez débutant ou confirmé,
          venez découvrir différentes disciplines dans une ambiance conviviale
          et dynamique. Rejoignez-nous et partagez votre passion pour la danse à
          Paimboeuf et ses environs. J&apos;Danse, c&apos;est l&apos;endroit
          idéal pour apprendre et s&apos;épanouir à travers la danse !
        </p>
      </div>
    </footer>
  )
}

export default Footer
