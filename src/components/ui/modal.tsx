"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

type ModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  showCloseButton?: boolean
}

export function Modal({ open, onOpenChange, title, description, children, className, showCloseButton = true }: ModalProps) {
  const overlayRef = React.useRef<HTMLDivElement | null>(null)
  const dialogRef = React.useRef<HTMLDivElement | null>(null)
  const titleId = React.useId()
  const descId = React.useId()

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false)
    }
    if (open) {
      document.addEventListener("keydown", onKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onOpenChange])

  React.useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const dialog = dialogRef.current
    dialog?.focus()

    function handleTab(e: KeyboardEvent) {
      if (e.key !== "Tab" || !dialog) return
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleTab)
    return () => {
      document.removeEventListener("keydown", handleTab)
      previouslyFocused?.focus()
    }
  }, [open])

  if (!open) return null

  function onOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onOpenChange(false)
  }

  return (
    <div
      ref={overlayRef}
      role="presentation"
      onMouseDown={onOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out transition-all duration-200"
      data-state={open ? "open" : "closed"}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descId : undefined}
        tabIndex={-1}
        className={cn(
          "w-full mx-3 sm:mx-4 max-w-lg rounded-xl bg-white p-6 sm:p-8 shadow-2xl outline-none border border-slate-200 dark:bg-card",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          className
        )}
        data-state={open ? "open" : "closed"}
      >
        {(title || description || showCloseButton) && (
          <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
            <div className="min-w-0 flex-1">
              {title && (
                <h3 id={titleId} className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">
                  {title}
                </h3>
              )}
              {description && (
                <p id={descId} className="mt-2 text-sm text-slate-600">{description}</p>
              )}
            </div>
            {showCloseButton && (
              <button
                type="button"
                aria-label="Close"
                className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}


