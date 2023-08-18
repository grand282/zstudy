'use client'
import Image from '../../../node_modules/next/image';
import Link from '../../../node_modules/next/link';
import Slideshow from './Slideshow';

const slides = [
  {
    src: '/assets/zstudy.png',
    alt: 'Slide 1',
  },
  {
    src: '/assets/edu.jpg',
    alt: 'Slide 2',
  },
  {
    src: '/assets/edu2.jpg',
    alt: 'Slide 3',
  },
  {
    src: '/assets/online.jpg',
    alt: 'Slide 4',
  },
];
function Main() {
  return (
    <>
    <nav className="bg-gray-800 p-4">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <Link legacyBehavior href="/">
        <a className="text-white text-lg font-semibold">
          <Image
            src="/logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </a>
      </Link>
    </div>
    <div className="flex flex-col md:flex-row space-x-4">
     
        <a href="#why" className="text-white hover:text-blue-800 mt-2">Why ZStudy</a>
      
      <Link legacyBehavior href="https://web.zstudy.co/">
        <a className="bg-white hover:bg-blue-500 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-xl transition duration-300 ease-in-out md:duration-1000 md:ease-in-out">
          Get Started
        </a>
      </Link>
    </div>
  </div>
  </nav>
   <div className="min-h-screen flex justify-center items-center">
      <Slideshow slides={slides} />
    </div>

    <div className='bg-gray-900 text-white p-4 pb-8 pt-8 main'>
        <h1 className=' text-center text-2xl'>Explore Our Wide Range of Topics</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 pt-8'>
      <div className="flex items-center">
        <Image 
          src={'/icons/health.png'} 
          alt={'health'} 
          width={30}
          height={30}
          className="bg-red-600"
        />
        <h2 className="ml-2">Health</h2>
      </div>
      <div className="flex items-center">
        <Image 
          src={'/icons/science.png'} 
          alt={'science'} 
          width={30}
          height={30}
          className="bg-blue-700"
        />
        <h2 className="ml-2">Science</h2>
      </div>
      <div className="flex items-center">
        <Image 
          src={'/icons/calculate.png'} 
          alt={'math icon'} 
          width={30}
          height={30}
          className="bg-yellow-700"
        />
        <h2 className="ml-2">Mathematics</h2>
      </div>
      <div className="flex items-center">
        <Image 
          src={'/icons/library.png'} 
          alt={'book icon'} 
          width={30}
          height={30}
          className="bg-lime-700"
        />
        <h2 className="ml-2">Religious Education</h2>
      </div>
      <div className="flex items-center">
        <Image 
          src={'/icons/memory.png'} 
          alt={'memory icon'} 
          width={30}
          height={30}
          className=" bg-amber-700"
        />
        <h2 className="ml-2">PLC programing fundamentals</h2>
      </div>
      <div className="flex items-center">
        <Image 
          src={'/icons/genetics.png'} 
          alt={'science icon'} 
          width={30}
          height={30}
          className=" bg-green-950"
        />
        <h2 className="ml-2">Intergrated science</h2>
      </div>
      
    </div>
    </div>
    <div className='bg-slate-200 pt-8' id='why'>
      <h1 className='text-center text-2xl text-red-600 pb-8'>Why us</h1>
      
      <div className='text-center text-xl text-blue-600 pb-4'>ZStudy won the Genius Zambia most innovative STEM solution</div>
      <div className='flex flex-col items-center md:flex-row md:justify-between pb-4'>
        <div className='pb-4 md:mb-0'>
          <Image 
            src={'/icons/tag.png'} 
            alt={'icon'} 
            width={150}
            height={150}
            className="bg-blue-800"
          />
        </div>
        <p className='font-normal md:w-3/4'>
          The annual Genius Zambia competition acknowledges inventive contributions in science,
          technology, engineering, and mathematics (STEM).<br/>
          ZStudy, a participant, triumphed in the 2021 competition for their unique educational platform.<br/>
          Their success was attributed to the interactive and personalized learning experience<br/>
          they offer, particularly in STEM subjects.<br/>
          Judges praised the dedicated STEM kit and its positive impact on students.<br/>
          ZStudy is grateful for the recognition and remains committed to fostering student<br/>
          achievement in STEM disciplines.
        </p>
      </div>
      
      <div className='text-center text-xl text-blue-600 pt-4 pb-4'>Education on the phone</div>
      <div className='flex flex-col items-center md:flex-row md:justify-between pb-4'>
        <div className='pb-4 md:mb-0'>
          <Image 
            src={'/icons/freelancer.png'} 
            alt={'icon'} 
            width={150}
            height={150}
            className="bg-red-800"
          />
        </div>
        <p className='font-normal md:w-3/4'>
          ZStudy is a groundbreaking platform revolutionizing education in Zambia by digitizing learning,<br/>
          making it accessible and affordable. It addresses issues of time and cost, offering<br/>
          an interactive, personalized mobile learning experience.<br/>
          This innovation bridges education gaps, expanding opportunities for youth.<br/>
          ZStudy is not only affordable and convenient but also highly effective,<br/>
          improving grades and knowledge. Ultimately, ZStudy is a vital asset to Zambia's education sector,<br/>
          promising a brighter future for the upcoming generation.
        </p>
      </div>

      <div className='text-center text-xl text-blue-600 pt-4 pb-4'>Skills</div>
      <div className='flex flex-col items-center md:flex-row md:justify-between'>
        <div className='pb-4 md:mb-0'>
          <Image 
            src={'/icons/router.png'} 
            alt={'icon'} 
            width={150}
            height={150}
          />
        </div>
        <p className='font-normal md:w-3/4'>
          The Internet of Things (IoT) is a rapidly expanding domain that revolutionizes industries and our daily lives.<br/>
          It encompasses internet-connected physical devices, from smart appliances to industrial machines.<br/>
          Learning about IoT is crucial to comprehend its workings and apply it across sectors.<br/>
          In Zambia, ZStudy is a leading IoT training provider, offering comprehensive courses covering IoT fundamentals,<br/>
          system design, and construction. ZStudy's experienced instructors support students,<br/>
          making it a valuable chance for Zambian students to excel in this dynamic field.
        </p>
      </div>

      <div className='text-center text-xl text-blue-600 pt-4 pb-4'>Experience High-Quality Education with ZStudy</div>
      <div className='flex flex-col items-center md:flex-row md:justify-between'>
        <div className='pb-4 md:mb-0'>
          <Image 
            src={'/icons/mortarboard.png'} 
            alt={'icon'} 
            width={150}
            height={150}
          />
        </div>
        <p className='font-normal md:w-3/4'>
        The courses on the ZStudy platform are taught by experienced and knowledgeable instructors,<br/>
        ensuring that students receive a high-quality education. <br/>
        Whether you are a student at University or simply a GCE seeking to pass your exams, <br/>
        ZStudy has something for everyone
        </p>
      </div>

      <div className='text-center text-xl text-blue-600 pt-4 pb-4'>Take Control of Your Learning with ZStudy</div>
      <div className='flex flex-col items-center md:flex-row md:justify-between'>
        <div className='pb-4 md:mb-0'>
          <Image 
            src={'/icons/spotify.png'}
            alt={'icon'} 
            width={150}
            height={150}
          />
        </div>
        <p className='font-normal md:w-3/4'>
        With ZStudy, you have the flexibility to learn at your own pace and on your own schedule. <br/>
        Whether you are a busy student or simply looking to fit learning into your busy life,<br/>
        ZStudy makes it easy to fit education into your routine. <br/>
        Explore the many courses available on the platform and start learning today!<br/>
        </p>
      </div>

      <h1 className='text-center text-2xl text-red-600 pt-8 pb-8'>Experience the Future of STEM Learning with the ZStudy STEM Kit</h1>
      
      <div className='flex flex-col items-center pb-4'>
        <div className='pb-4 md:mb-0'>
          <Image 
            src={'/assets/iot.jpg'} 
            alt={'icon'} 
            width={650}
            height={50}
            className='pb-6'
          />
        </div>
        <p className='container text-lg font-medium md:w-3/4'>
        The ZStudy STEM kit is a groundbreaking educational resource designed for aspiring STEM professionals in Zambia.<br/> 
        Packed with a diverse array of Awards and Ambitions and materials, the kit enables students to delve into numerous subjects, 
        from embedded systems to microcontroller programming, electronics, and more.<br/> 
        Notably, the kit's capacity to employ the I2C protocol stands out, allowing data exchange between<br/> devices—a crucial skill for fields like computer engineering and electronics. 
        Moreover, the kit facilitates exploration of robotics, Arduino programming, sensor interaction, and other cutting-edge technologies. <br/>
        As a result, it serves as an exceptional tool for students keen on honing skills in STEM domains, <br/>
        making it an invaluable asset for fostering hands-on experience and growth in these rapidly evolving fields.<br/> 
        In essence, the ZStudy STEM kit represents an innovative leap in STEM education in Zambia,<br/> empowering students to excel in these dynamic disciplines.
        </p>
      </div>

      <div className='flex flex-col items-center md:flex-row md:justify-between pb-4 pt-6'>
        <div className='pb-4 md:mb-0'>
          <Image 
            src={'/icons/menu.png'} 
            alt={'icon'} 
            width={150}
            height={150}
          />
        </div>
        <p className='font-medium md:w-3/4 text-blue-900'>
        Hands-on Experience: Students gain practical, hands-on experience, enhancing their understanding of these technologies.<br/>
        Diverse Resources: The kit includes tools for I2C protocol communication, motor control via the L298 module, <br/>
        and compatibility with a GSM module add-on, enabling exploration of various topics.<br/>
        Real-world Relevance: Skills acquired are applicable in electronics, robotics, and IoT,<br/> 
        aligning with current job market demands.<br/>
        Flexibility: The kit's adaptability suits students interested in different STEM fields and technologies.<br/>
        Supportive Learning Environment: The ZStudy kit provides resources and support, fostering confidence<br/>
        and motivation in programming learning.
        </p>
      </div>

      <div className='flex flex-col items-center md:flex-row md:justify-between pb-4 pt-6'>
        <div className='pb-4 md:mb-0'>
          <Image 
            src={'/icons/playtime.png'} 
            alt={'icon'} 
            width={150}
            height={150}
          />
        </div>
        <p className=' font-medium md:w-3/4 text-blue-900'>
        The ZStudy STEM kit is a safe and user-friendly learning tool for children, with a low voltage design that minimizes the risk of injury or harm.<br/> 
        The kit also comes with a user manual, providing clear and concise instructions for students to<br/> follow as they explore the various Awards 
        and Ambitions and resources of the kit. <br/>
        This makes it an ideal choice for educators looking for a safe and engaging learning tool for their students.
        </p>
      </div>
    </div>
    </>
  )
}

export default Main