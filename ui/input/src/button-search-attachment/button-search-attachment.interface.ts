export interface ButtonSearchAttachmentProps {
  type?: string
  focus: boolean
  value?: any
  attachments?: string[] | string
  setSearch?: (search: boolean) => void
}
