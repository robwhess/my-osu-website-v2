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
  Skeleton,
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
  /*
   * Allow a skeleton card to be created without specifying values for other
   * props.  Fill in dummy values for day, start, and location if they're not
   * specified and we're creating a skeleton card.
   */
  day = (skeleton && !day) ? "Saturday" : day
  start = (skeleton && !start) ? new Date() : start
  location = (skeleton && !location) ? "KEC 1109" : location

  const startTime = dayjs(start, "HH:mm:ss").format("h:mm a")
  const endTime = end && dayjs(end, "HH:mm:ss").format("h:mm a")

  return (
    <Card p={2}>
      <CardBody>
        <Skeleton isLoaded={!skeleton}>
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
        </Skeleton>
        <Skeleton isLoaded={!skeleton}>
          <Heading as="h4" size="sm" color="gray.600" mb={1}>{startTime}{endTime && <> &ndash; {endTime}</>}</Heading>
        </Skeleton>
        <Skeleton isLoaded={!skeleton}>
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
        </Skeleton>
      </CardBody>
    </Card>
  )
}
