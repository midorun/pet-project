import { Card, Skeleton, Typography } from '@mui/joy'

const CodeSkeleton = () => {
  return (
    <Card variant="solid">
      <code className="relative block">
        <Typography whiteSpace={'pre'}>
          <Skeleton>
            {
              '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;'
            }
          </Skeleton>
        </Typography>
      </code>
    </Card>
  )
}
export default CodeSkeleton
