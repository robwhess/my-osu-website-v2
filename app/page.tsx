import Image from "next/image"

import robImg from "@/static/rob.jpg"

export default function Home() {
    return (
        <main className="flex justify-center my-8 lg:my-12">
            <div className="card card-lg lg:card-side lg:max-w-6xl max-w-2xl mx-2 bg-base-100">
                <figure className="flex-1">
                    <Image src={robImg} alt="Photo of Rob Hess" loading="eager" />
                </figure>
                <div className="card-body flex-1">
                    <p>
                        Hello!  My name is Rob Hess, and I&apos;m an instructor in Computer Science at Oregon State University.  I mostly teach courses related to web and mobile app development.
                    </p>
                    <p className="my-2">
                        In my past life, I was an engineer on the Yahoo Machine Learning and Vision team, where I got to research, design, and deploy some <a className="link" href="http://code.flickr.net/2014/10/20/introducing-flickr-park-or-bird/" target="_blank" rel="noopener noreferrer">very cool technologies</a> at <a className="link" href="http://code.flickr.net/2014/05/20/computer-vision-at-scale-with-hadoop-and-storm/" target="_blank" rel="noopener noreferrer">massive scale</a>.  While I was at Yahoo, I also spent time working on Flickr&apos;s Front End team where I implemented and deployed <a className="link" href="https://www.flickr.com/search" target="_blank" rel="noopener noreferrer">web</a> <a className="link" href="https://www.flickr.com/explore" target="_blank" rel="noopener noreferrer">pages</a> that millions of people use every day.
                    </p>
                    <p className="my-2">
                        Before Yahoo, I worked at a small computer vision startup named IQ Engines, which <a className="link" href="https://techcrunch.com/2013/08/23/yahoo-acquires-image-recognition-startup-iq-engines/" target="_blank" rel="noopener noreferrer">Yahoo acquired</a>, and long, long ago, I earned <a className="link" href="http://ir.library.oregonstate.edu/xmlui/handle/1957/30348" target="_blank" rel="noopener noreferrer">my PhD</a> right here in the CS department of Oregon State.
                    </p>
                    <p>
                        Through it all, I&apos;ve been and remain an avid baker of bread, tender of gardens, player of games, and lover of cats, while also cycling through a million other hobbies, including taking photos and brewing beer.  Currently, I&apos;m honing my woodworking skills.
                    </p>
                </div>
            </div>
        </main>
    )
}
