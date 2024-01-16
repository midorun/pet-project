import { Card, Skeleton, Typography } from '@mui/joy'

const TextSkeleton = () => {
  return (
    <Card>
      <Typography
        level="body-md"
        mt={2}
      >
        <Skeleton>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fusce ut placerat orci nulla pellentesque dignissim.'
          }
        </Skeleton>
      </Typography>
      <Typography
        level="body-md"
        mt={2}
      >
        <Skeleton>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus. Iaculis eu non diam phasellus vestibulum lorem sed. Sem viverra aliquet eget sit amet tellus cras adipiscing. Sed euismod nisi porta lorem mollis aliquam ut porttitor.'
          }
        </Skeleton>
      </Typography>
      <Typography
        level="body-md"
        mt={2}
      >
        <Skeleton>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at. Est sit amet facilisis magna etiam tempor orci eu lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus urna neque viverra justo nec ultrices dui sapien. Adipiscing diam donec adipiscing tristique risus nec. Aliquam sem et tortor consequat.'
          }
        </Skeleton>
      </Typography>
    </Card>
  )
}
export default TextSkeleton
