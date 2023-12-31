import { Card, CardBody } from '@/components/ui/Card'

const NFTShimmer: React.FC = () => {
  return (
    <Card>
      <CardBody className="space-y-4 shimmer rounded-t-[10px] h-52 sm:h-80" />
      <div className="p-5 space-y-2 border-t dark:border-gray-800">
        <div className="w-7/12 h-3 rounded-lg shimmer" />
        <div className="w-1/3 h-3 rounded-lg shimmer" />
      </div>
    </Card>
  )
}

export default NFTShimmer
