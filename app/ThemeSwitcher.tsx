'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { TbCircleHalf2, TbMoon, TbSun } from 'react-icons/tb'

import { Tooltip } from '~/components/ui/Tooltip'

const themes = [
  {
    label: '浅色模式',
    value: 'light',
    icon: TbSun,
  },
  {
    label: '深色模式',
    value: 'dark',
    icon: TbMoon,
  },
  {
    label: '跟随系统',
    value: 'system',
    icon: TbCircleHalf2,
  },
]
export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false)
  const { setTheme, theme } = useTheme()
  const ThemeIcon = React.useMemo(
    () => themes.find((t) => t.value === theme)?.icon ?? TbCircleHalf2,
    [theme]
  )

  React.useEffect(() => setMounted(true), [])

  function toggleTheme() {
    if (theme === 'system') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('system')
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root disableHoverableContent>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            aria-label="切换颜色主题"
            className="group rounded-full bg-gradient-to-b from-zinc-50/20 to-white/80 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/30 dark:to-zinc-800/80 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={toggleTheme}
          >
            <ThemeIcon className="h-6 w-6 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-200" />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          {themes.find((t) => t.value === theme)?.label}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}