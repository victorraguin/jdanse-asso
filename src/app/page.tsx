import ServerBanner from './components/Banner/ServerBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServerHeader from './components/Header/ServerHeader'
import ServerHero from './components/Hero/ServerHero'
import Schedule from './components/Schedule'
import WelcomeMessage from './components/WelcomeMessage'
import ServerDanceClasses from './components/DanceClasses/ServerDanceClasses'
import ServerEvents from './components/Events/ServerEvents'
import ServerGallery from './components/Gallery/ServerGallery'

export default function Home () {
  return (
    <main className='flex min-h-screen flex-col mx-auto max-w-screen-3xl bg-black'>
      <ServerBanner />
      <ServerHeader />
      <h1 className='sr-only'>
        J&apos;Danse - Association de danse à Paimboeuf et dans le Pays de Retz
      </h1>
      <ServerHero />
      <WelcomeMessage />
      <ServerDanceClasses />
      <Schedule />
      <ServerEvents />
      <ServerGallery />
      <Contact />
      <Footer />
    </main>
  )
}
