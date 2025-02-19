import type { CollectionConfig } from 'payload'

export const Tasks: CollectionConfig = {
  slug: 'tasks',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'color',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Pending',
          value: 'PENDING',
        },
        {
          label: 'Completed',
          value: 'COMPLETED',
        },
      ],
      required: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [({ value }) => value || new Date().toISOString()],
      },
    },
    {
      name: 'updatedAt',
      type: 'date',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [() => new Date().toISOString()],
      },
    },
  ],
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
}
