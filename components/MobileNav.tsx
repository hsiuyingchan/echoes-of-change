"use client";

import { useEffect, useRef, useState } from "react";
import { MenuIcon, CloseIcon } from "./Icons";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const wasOpenRef = useRef(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    } else if (wasOpenRef.current) {
      toggleButtonRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        ref={toggleButtonRef}
        className="p-2 text-teal-900/60 dark:text-ivory/60 hover:text-teal-900 dark:hover:text-ivory transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-navy/20 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="fixed top-20 right-0 z-50 w-64 h-[calc(100vh-5rem)] bg-ivory dark:bg-navy border-l border-teal-900/5 dark:border-ivory/5 transform translate-x-0 transition-transform duration-300 ease-in-out shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col p-8 space-y-6">
              <a
                href="#how-it-works"
                onClick={closeMenu}
                ref={firstLinkRef}
                className="text-lg font-display font-medium text-teal-900/70 dark:text-ivory/70 hover:text-teal-900 dark:hover:text-ivory transition-colors py-2"
              >
                How It Works
              </a>
              <a
                href="#reflection"
                onClick={closeMenu}
                className="text-lg font-display font-medium text-teal-900/70 dark:text-ivory/70 hover:text-teal-900 dark:hover:text-ivory transition-colors py-2"
              >
                Daily Reflection
              </a>
              <a
                href="#benefits"
                onClick={closeMenu}
                className="text-lg font-display font-medium text-teal-900/70 dark:text-ivory/70 hover:text-teal-900 dark:hover:text-ivory transition-colors py-2"
              >
                Benefits
              </a>
              <a
                href="#reflection"
                onClick={closeMenu}
                className="bg-teal-900 hover:bg-teal-800 text-ivory px-6 py-4 rounded-full text-base font-semibold transition-all text-center mt-6 shadow-xl shadow-teal-900/20"
              >
                Begin Reflection
              </a>
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
