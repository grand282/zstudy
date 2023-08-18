import Image from "../../../node_modules/next/image"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 border-t border-gray-700">
       <div className="mt-4 flex justify-center pb-8 space-x-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.zstudy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center"
          >
            <div className="p-2 rounded-lg hover:bg-blue-800 transition duration-300">
              <Image 
                src={'/icons/playstore.png'} 
                alt={'Google Play Store'} 
                width={60}
                height={30}
              />
            </div>
            <span className="mt-1 text-sm text-gray-300">
              Google Play
            </span>
          </a>
          <a
            href="https://apps.apple.com/us/app/your-app-name/id1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center"
          >
            <div className="p-2 rounded-lg hover:bg-red-800 transition duration-300">
              <Image 
                src={'/icons/app-store.png'} 
                alt={'Apple App Store'} 
                width={60}
                height={30}
              />
            </div>
            <span className="mt-1 text-sm text-gray-300">
              App Store
            </span>
          </a>
          <a
            href="https://www.facebook.com/hcsh3ro?_rdc=1&_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center"
          >
            <div className="p-2 rounded-lg hover:bg-blue-800 transition duration-300">
              <Image 
                src={'/icons/facebook.png'} 
                alt={'facebook'} 
                width={60}
                height={30}
              />
            </div>
            <span className="mt-1 text-sm text-gray-300">
              facebook
            </span>
          </a>
          <a
            href="https://www.youtube.com/watch?v=koKbVUPd6Ys"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center"
          >
            <div className="p-2 rounded-lg hover:bg-red-800 transition duration-300">
              <Image 
                src={'/icons/youtube.png'} 
                alt={'youtube'} 
                width={60}
                height={30}
              />
            </div>
            <span className="mt-1 text-sm text-gray-300">
              YouTube
            </span>
          </a>
        </div>
        <div className="pb-8 text-center">
            <h2>Support Information</h2>
            <p>Email: zstudy@hcs.engineering</p>
            <p>Phone Support: +260 96 7754716</p>
        </div>
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} ZStudy a subsidiary of HERO CONTROL SYSTEMS LLC. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer