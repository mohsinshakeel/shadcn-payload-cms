import * as RadioPrimitive from '@radix-ui/react-radio-group'

import { TrashIcon } from '@/assets/icons'
import { Radio } from '@/shadcn/radio'

interface CardProps {
  title: string
  onToggleCompleted: () => void
  onDelete: () => void
  isCompleted: boolean
  onClickCard: () => void
}

const Card = ({ title, onToggleCompleted, onDelete, isCompleted, onClickCard }: CardProps) => {
  return (
    <div className="w-full h-[75px] flex justify-between items-center border border-border rounded-lg mt-5 gap-5 bg-border p-4">
      <RadioPrimitive.Root className="flex items-center">
        <Radio
          value="true"
          checked={isCompleted}
          onClick={onToggleCompleted}
          className={`rounded-full h-6 w-6 flex items-center justify-center cursor-pointer`}
        />
      </RadioPrimitive.Root>
      <h3
        className="text-sm text-foreground font-normal flex-1 cursor-pointer"
        onClick={onClickCard}
      >
        {title}
      </h3>
      <TrashIcon onClick={onDelete} className="cursor-pointer w-8 h-8" />
    </div>
  )
}

export default Card
