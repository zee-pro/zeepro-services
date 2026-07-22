"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      setIsMobileOpen(false);
      setOpenDropdown(null);
    }
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-16 w-full transition-all duration-500",
          "min-[876px]:inset-x-3 min-[876px]:top-3 min-[876px]:w-[calc(100%-1.5rem)] min-[876px]:rounded-2xl",
          scrolled
          ? "bg-white shadow-xl shadow-black/[0.08] min-[876px]:border min-[876px]:border-border/40"
          : "bg-white min-[876px]:border min-[876px]:border-border/20",
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 relative z-10">
            <Image
              src="/zeepro_logo.png"
              alt="Zeepro logo"
              width={240}
              height={80}
              className="h-10 min-[876px]:h-14 w-auto transition-transform duration-300 hover:scale-105"
              priority
            />
            <span className="min-[876px]:max-[1200px]:hidden border-l border-black/15 pl-3 text-[0.7rem] min-[400px]:text-[0.8rem] min-[876px]:text-[0.85rem] font-semibold tracking-wide text-black/70 whitespace-nowrap">
              {SITE_CONFIG.slogan}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 min-[876px]:flex"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const hasChildren = "children" in item;

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "nav-underline inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "text-black active"
                          : "text-black/60 hover:text-black",
                      )}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-300",
                          openDropdown === item.label && "rotate-180",
                        )}
                      />
                    </Link>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 4, scale: 0.98 }}
                          transition={{
                            duration: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute start-0 top-full mt-2 w-64 rounded-xl border border-border/50 bg-popover/95 backdrop-blur-xl p-1.5 shadow-xl shadow-black/10"
                          role="menu"
                        >
                          {item.children.map((child, i) => (
                            <motion.div
                              key={child.label}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: i * 0.04,
                                duration: 0.2,
                                ease: "easeOut",
                              }}
                            >
                              <Link
                                href={child.href}
                                className={cn(
                                  "block rounded-lg px-3 py-2.5 text-sm transition-all duration-200 hover:bg-accent/10",
                                  pathname === child.href
                                    ? "text-black font-medium"
                                    : "text-black/60 hover:text-black",
                                )}
                                role="menuitem"
                              >
                                {child.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "nav-underline rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-black active"
                      : "text-black/60 hover:text-black",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 min-[876px]:flex relative z-10">
            <Link href="/contact">
              <Button
                size="sm"
                className="btn-magnetic gap-1.5 bg-accent text-accent-foreground hover:bg-accent/90 shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
              >
                <Phone className="size-3.5" />
                Request a Consultation
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-3 min-[876px]:hidden relative z-10">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-black/60 hover:bg-muted hover:text-black relative z-10"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="size-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          </div>
        </div>
      </header>

      {/* Mobile menu - outside header to avoid backdrop-blur creating a containing block */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 z-[55] bg-black/20 backdrop-blur-sm min-[876px]:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 bottom-0 right-0 z-[60] w-full max-w-sm border-l border-border bg-white dark:bg-zinc-950 min-[876px]:hidden"
            >
              <nav
                className="flex flex-col h-full p-6 space-y-1"
                aria-label="Mobile navigation"
              >
                {NAV_ITEMS.map((item, i) => {
                  const hasChildren = "children" in item;
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  if (hasChildren) {
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <button
                          type="button"
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                            isActive
                              ? "text-black bg-accent/10"
                              : "text-black/80 hover:bg-muted hover:text-black",
                          )}
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.label ? null : item.label,
                            )
                          }
                          aria-expanded={openDropdown === item.label}
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform duration-300",
                              openDropdown === item.label && "rotate-180",
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden ms-4 mt-1 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className={cn(
                                    "block rounded-lg px-3 py-2.5 text-sm transition-colors",
                                    pathname === child.href
                                      ? "text-black font-medium bg-accent/10"
                                      : "text-black/80 hover:bg-muted hover:text-black",
                                  )}
                                  onClick={() => setIsMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                          isActive
                            ? "text-black bg-accent/10"
                            : "text-black/80 hover:bg-muted hover:text-black",
                        )}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="pt-4 mt-auto"
                >
                  <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                    <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-md shadow-accent/20">
                      <Phone className="size-4" />
                      Request a Consultation
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
