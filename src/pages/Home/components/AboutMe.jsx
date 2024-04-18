import { Text, Link } from '@chakra-ui/react'

export default function AboutMe() {
  return (
    <>
      <Text marginBottom={4}>
        Hello!  My name is Rob Hess, and I'm an instructor in Computer Science at Oregon State University.  I mostly teach courses related to web and mobile app development.
      </Text>
      <Text marginBottom={4}>
        In my past life, I was an engineer on the Yahoo Machine Learning and Vision team, where I got to research, design, and deploy some <Link href="http://code.flickr.net/2014/10/20/introducing-flickr-park-or-bird/" isExternal>very cool technologies</Link> at <Link href="http://code.flickr.net/2014/05/20/computer-vision-at-scale-with-hadoop-and-storm/" isExternal>massive scale</Link>.  While I was at Yahoo, I also spent time working on Flickr's Front End team where I implemented and deployed <Link href="https://www.flickr.com/search" isExternal>web</Link> <Link href="https://www.flickr.com/explore" isExternal>pages</Link> that millions of people use every day.
      </Text>
      <Text marginBottom={4}>
        Before Yahoo, I worked at a small computer vision startup named IQ Engines, which <Link href="https://techcrunch.com/2013/08/23/yahoo-acquires-image-recognition-startup-iq-engines/" isExternal>Yahoo acquired</Link>, and long, long ago, I earned <Link href="http://ir.library.oregonstate.edu/xmlui/handle/1957/30348" isExternal>my PhD</Link> right here in the CS department of Oregon State.
      </Text>
      <Text>
        Through it all, I've been and remain an avid baker of bread, tender of gardens, player of games, and lover of cats, while also cycling through a million other hobbies, including taking photos and brewing beer.  Currently, I'm honing my woodworking skills.
      </Text>
    </>
  )
}
