/*
 * A simple card component for displaying information about an event.
 */

import {
  Heading,
  Text,
  Icon,
  HStack,
  Button,
  IconButton,
  Card, CardBody,
  SkeletonText,
  Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody
} from '@chakra-ui/react'
import { FaAt, FaVideo, FaInfo } from 'react-icons/fa6'
import dayjs from 'dayjs'
import CustomParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(CustomParseFormat)

export default function EventCard({
  day,
  start,
  end,
  location,
  videoconferenceLink,
  extraInfo,
  skeleton
}) {
  const startTime = dayjs(start, "HH:mm:ss").format("h:mm a")
  const endTime = end && dayjs(end, "HH:mm:ss").format("h:mm a")

  return (
    <Card p={2}>
      <CardBody>
        {skeleton ? (
          <SkeletonText noOfLines={3} spacing={1} skeletonHeight={5} minW={24} />
        ) : (
          <>
            <HStack align="baseline" mb={1}>
              <Heading as="h3" size="md">{day}</Heading>
              {extraInfo && (
                <Popover>
                  <PopoverTrigger>
                    <IconButton icon={<FaInfo />} arial-label="Extra info" isRound={true} size="xs" variant="outline" ml={1} />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>{extraInfo}</PopoverBody>
                  </PopoverContent>
                </Popover>
              )}
            </HStack>
            <Heading as="h4" size="sm" color="gray.600" mb={1}>{startTime}{endTime && <> &ndash; {endTime}</>}</Heading>
            <HStack align="center">
              {location && (
                <>
                  <Icon as={FaAt} />
                  <Text fontSize="medium"> {location}</Text>
                </>
              )}
              {videoconferenceLink && (
                <Button
                  leftIcon={<FaVideo />}
                  size="xs"
                  variant="outline"
                  as="a"
                  href={videoconferenceLink}
                >
                  Join
                </Button>
              )}
            </HStack>
          </>
        )}
      </CardBody>
    </Card>
  )
}
