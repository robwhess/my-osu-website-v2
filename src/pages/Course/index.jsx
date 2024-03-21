import { useParams } from 'react-router-dom'

export default function Course() {
    const { course } = useParams()
    return (
      <>
        <h2>Course: {course} </h2>
      </>
    )
  }
