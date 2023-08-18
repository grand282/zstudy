import React from 'react'
import Image from '../../../node_modules/next/image'
import Link from '../../../node_modules/next/link'

function Content() {
  return (
    <div className='bg-gray-900 text-white text-center'>
        <h1 className='text-center text-3xl pt-8 pb-4'>
            Expand Your Learning Horizons and<br/> Opportunities with <br/>ZStudy
        </h1>
        <h2 className='text-center text-sm pt-4 pb-8'>
         Why should you choose ZStudy over<br/>
         Traditional Extra lessons and GCE Class.
        </h2>
      
      <div className='flex flex-row justify-around pb-4'>
        <div className='pb-4 md:mb-0 w-2/5'>
        <ul className=" p-4 border border-blue-500 hover:border-red-500 rounded-xl transition duration-300">
          <h2 className='text-lg'>Traditional centers<br/> <span className='text-3xl font-medium'>benefits</span></h2>
          <h3 className='font-light'>compare</h3>
          <div className='grid grid-row gap-4 mt-8'>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">Limited to location</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">Learning time restrictions</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">No Class Replay</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">unsafe for girl child</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">Expensive</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">Long Distances</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">disorganised delivery of work</h2>
          </div>
          <Link legacyBehavior href="#">
            <a className="bg-white hover:bg-blue-500 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-xl transition duration-300 ease-in-out md:duration-800 md:ease-in-out">
              Make a choice
            </a>
          </Link>
          </div>
        </ul>

        </div>
        <div className='pb-4 md:mb-0 w-2/5'>
        <ul className=" p-4 border border-blue-500 hover:border-red-500 rounded-xl transition duration-300">
          <h2 className='text-lg'>ZStudy <br/><span className=' font-medium text-3xl'>benefits</span></h2>
          <h3 className='font-light'>compare</h3>
          <div className='grid grid-row gap-4 mt-8'>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">Acess from anywhere anytime</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">No Learning time restrictions</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">Classes can be replayed at anytime even without internet</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">cheap as you pay per subject</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">
           The ZStudy platform provides a safe and convenient learning environment for girl children, 
           as they can access courses from the comfort and safety of their own homes, 
           rather than having to travel long distances to attend tuition centers
           </h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">
           Each lesson on the ZStudy platform includes practice exam questions to help students prepare for exams and ensure they are confident and well-prepared on test or exam day
           </h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">USe of simulations in teaching keeps a learner engaged</h2>
          </div>
          <div className="flex items-center">
           <Image 
             src={'/icons/checked.png'} 
             alt={'health'} 
             width={30}
             height={30}
            />
           <h2 className="ml-2">
           Our Teachers are highly skilled with long Teaching experience and are Exam focused in their work delivery
           </h2>
          </div>
          <Link legacyBehavior href="#">
            <a className="bg-white hover:bg-blue-500 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-xl transition duration-300 ease-in-out md:duration-800 md:ease-in-out">
              Choice ZStudy
            </a>
          </Link>
          </div>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Content