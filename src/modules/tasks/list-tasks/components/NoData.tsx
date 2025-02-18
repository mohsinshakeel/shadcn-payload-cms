import NextImage from '@/shadcn/image'
import Clipboard from '@/assets/images/clipboard.png'
import { SpinnerIcon } from '@/assets/icons'

interface NoDataProps {
  isFetching: boolean
}

const NoData = ({ isFetching }: NoDataProps) => {
  return (
    <div className="w-full h-[270px] flex flex-col items-center justify-center border-t border-border rounded-lg mt-10 gap-5">
      {isFetching ? (
        <div className="flex items-center justify-center gap-2">
          <SpinnerIcon className="w-7 h-7" />
        </div>
      ) : (
        <>
          <NextImage src={Clipboard} alt="logo" />
          <p className="text-base font-bold  text-muted">
            You don&apos;t have any tasks registered yet.
          </p>
          <p className="text-base font-normal text-muted">
            Create tasks and organize your to-do items.
          </p>
        </>
      )}
    </div>
  )
}

export default NoData
