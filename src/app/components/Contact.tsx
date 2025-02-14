/* eslint-disable react/no-unescaped-entities */
export default function Contact () {
  return (
    <div
      id='contact'
      className='flex flex-col items-center justify-center space-y-6 my-12 px-6 lg:px-24'
    >
      <h1 className='text-2xl underlineTitle w-fit'>Envie d'en savoir plus?</h1>
      <h2 className='text-secondary text-center'>
        Contactez nous par téléphone ou par e-mail, nous vous répondrons au plus
        vite!
      </h2>
      <div className='flex flex-row justify-center'>
        <a
          href='tel:+33649182726'
          className='btn-primary mx-2 text-lg'
          aria-label='Appeler le 06 49 18 27 26'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
            />
          </svg>
        </a>
        <a
          href='mailto:johannabarbe@free.fr'
          className='btn-primary mx-2'
          aria-label='Envoyer un mail à johannabarbe@free.fr'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
