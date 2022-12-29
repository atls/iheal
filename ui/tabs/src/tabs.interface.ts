interface Tab {
  id: string
  title: string
}

export interface TabsProps {
  tabs: Tab[]
  selectedTab: string
  setSelectedTab: (value: string) => void
}
