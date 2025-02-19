'use client'

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Form, FormControl, FormField, FormMessage } from '@/shadcn/form'
import { Input } from '@/shadcn/input'
import { Button } from '@/shadcn/button'
import { AddIcon, SpinnerIcon, TickIcon } from '@/assets/icons'

import ColorSelector from './ColorSelector'

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  color: z.string().nonempty('Please select a color'),
})

export type TaskFormValues = z.infer<typeof formSchema>

interface TaskFormProps {
  initialValues?: TaskFormValues
  onSubmit: (values: TaskFormValues) => void
  isLoading?: boolean
}

const TaskForm: React.FC<TaskFormProps> = ({ initialValues, onSubmit, isLoading }) => {
  const form = useForm<TaskFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || { title: '', color: '' },
    mode: 'onSubmit',
  })

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues)
    }
  }, [initialValues])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5 mt-5">
        {/* Title Field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <>
              <FormControl>
                <Input
                  label="Title"
                  placeholder="Ex. Brush your teeth"
                  {...field}
                  className="!m-0 w-full h-[50px]"
                  error={form.formState.errors.title?.message}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </>
          )}
        />

        {/* Color Field */}
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <>
              <FormControl>
                <ColorSelector
                  onSelect={field.onChange}
                  label="Color"
                  selectedColor={field.value}
                />
              </FormControl>
              <FormMessage className="text-destructive" />
            </>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" variant="default" className="w-full h-14" disabled={isLoading}>
          <div className="flex items-center gap-2">
            {isLoading ? (
              <SpinnerIcon className="w-4 h-4 animate-spin" />
            ) : (
              <>
                {initialValues ? (
                  <>
                    <p className="text-base font-bold">Save</p>
                    <TickIcon className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <p className="text-base font-bold">Add</p>
                    <AddIcon className="w-4 h-4" />
                  </>
                )}
              </>
            )}
          </div>
        </Button>
      </form>
    </Form>
  )
}

export default TaskForm
