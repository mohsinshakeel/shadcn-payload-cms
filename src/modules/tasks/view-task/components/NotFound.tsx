import NextImage from '@/shadcn/image'
import Clipboard from '@/assets/images/clipboard.png'
import { SpinnerIcon } from '@/assets/icons'

interface NotFoundProps {
  isLoading?: boolean
}

const NotFoundWithLoading = ({ isLoading }: NotFoundProps) => {
  return (
    <div className="w-full h-[270px] flex flex-col items-center justify-center border-t border-border rounded-lg mt-10 gap-5">
      {isLoading ? (
        <SpinnerIcon className="w-4 h-4 " />
      ) : (
        <>
          <NextImage src={Clipboard} alt="logo" />
          <p className="text-base font-bold  text-muted">Task not found</p>
          <p className="text-base font-normal text-muted">
            The task you are looking for does not exist.
          </p>
        </>
      )}
    </div>
  )
}

export default NotFoundWithLoading
